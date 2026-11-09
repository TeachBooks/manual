"""
Script: parse_images.py

Description:
This script processes Markdown (.md) and Jupyter Notebook (.ipynb) files listed in a `_toc.yml` file.
It identifies local image references (including MyST `figure` syntax) in these files, copies the images
to a specified folder (`new_images`), and replaces the local image paths with a public URL
(e.g., `https://files.mude.citg.tudelft.nl/<image_name>`).

Key Features:
- Parses `_toc.yml` to extract all Markdown and Notebook files.
- Detects image references in Markdown files (e.g., `![alt text](image.png "title")`).
- Detects MyST `figure` syntax (e.g., `{figure} /path/to/image.png`).
- Resolves image paths relative to the file or project root.
- Handles image paths with optional titles (e.g., `"title"`) in Markdown and Notebook files.
- Skips processing images that are already converted to the public URL.
- Copies images to the `new_images` folder.
- Updates the files to replace local image paths with public URLs.

How to Use:
1. Place this script in the root directory of your project (where `_toc.yml` is located).
2. Ensure `_toc.yml` contains the list of files to process.
3. Run the script using Python: python parse_images.py
4. The script will:
- Copy referenced images to the `new_images` folder.
- Update the Markdown and Notebook files with the new image URLs.

Dependencies:
- Python 3.x
- PyYAML (install using `pip install pyyaml`)

Notes:
- Ensure the script is run from the project root directory.
- The `base_url` variable should be updated to match your desired public URL prefix.
- The script handles image paths in the following formats:
  - Relative paths (e.g., `image.png`, `./image.png`).
  - Absolute paths (e.g., `/path/to/image.png`).
  - Paths with optional titles (e.g., `![alt text](image.png "title")`).
"""

import os
import re
import shutil
import yaml
import json

# Define the folder where images will be copied
output_folder = "new_images"
base_url = "https://files.mude.citg.tudelft.nl/"

# Ensure the output folder exists
os.makedirs(output_folder, exist_ok=True)

# Function to parse the _toc.yml file and extract all Markdown and Notebook files
def get_files_from_toc(toc_file):
    files = []
    with open(toc_file, "r", encoding="utf-8") as f:
        toc = yaml.safe_load(f)

        # Recursive function to extract file paths
        def extract_files(item):
            if isinstance(item, dict):
                if "file" in item:
                    # Add the file with the appropriate extension
                    file_path = item["file"]
                    if not file_path.endswith((".md", ".ipynb")):
                        if os.path.isfile(file_path + ".md"):
                            file_path += ".md"
                        elif os.path.isfile(file_path + ".ipynb"):
                            file_path += ".ipynb"
                    files.append(file_path)
                if "sections" in item:
                    for section in item["sections"]:
                        extract_files(section)
                if "chapters" in item:
                    for chapter in item["chapters"]:
                        extract_files(chapter)
            elif isinstance(item, list):
                for sub_item in item:
                    extract_files(sub_item)

        # Start extracting files from the "parts" section
        extract_files(toc.get("parts", []))
    return files

# Function to normalize image paths
def normalize_image_path(file_dir, image_path):
    # Check if the path starts with a `/` (absolute path relative to the project root)
    if image_path.startswith("/"):
        # Resolve the path relative to the project root
        project_root = os.getcwd()  # Assuming the script is run from the project root
        resolved_path = os.path.join(project_root, image_path.lstrip("/"))
    else:
        # Resolve the path relative to the file's directory
        resolved_path = os.path.normpath(os.path.join(file_dir, image_path))
    return resolved_path

# Function to find and replace local image references
def process_file(file_path):
    if file_path.endswith(".md"):
        process_markdown(file_path)
    elif file_path.endswith(".ipynb"):
        process_notebook(file_path)

# Process Markdown files
def process_markdown(file_path):
    file_dir = os.path.dirname(file_path)  # Get the directory of the file
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Find all standard Markdown image references (e.g., ![alt text](path "title"))
    matches = re.findall(r"!\[.*?\]\((.*?)(?:\s+\".*?\")?\)", content)
    # Find all MyST figure syntax references (e.g., {figure} path)
    # Handles cases where the `---` block is missing or caption follows directly
    myst_matches = re.findall(r"\{figure\}\s+(.*?)\s*(?:\n|$)", content)
    matches.extend(myst_matches)

    for match in matches:
        # Skip if the image path is already converted to the public URL
        if match.startswith(base_url):
            continue

        # Normalize and resolve the image path
        image_path = normalize_image_path(file_dir, match)

        if os.path.isfile(image_path):
            print(f"Image found: {image_path}")  # Debugging output
            # Copy the image to the output folder
            image_name = os.path.basename(image_path)
            new_path = os.path.join(output_folder, image_name)
            shutil.copy(image_path, new_path)

            # Replace the local URL with the new URL
            new_url = base_url + image_name
            content = content.replace(match, new_url)
        else:
            print(f"Warning: Image not found: {image_path}")  # Debugging output

    # Write the updated content back to the file
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)

# Process Jupyter Notebook files
def process_notebook(file_path):
    file_dir = os.path.dirname(file_path)  # Get the directory of the file
    with open(file_path, "r", encoding="utf-8") as f:
        notebook = json.load(f)

    updated = False
    for cell in notebook.get("cells", []):
        if cell.get("cell_type") == "markdown":
            # Join all lines in the cell into a single string
            cell_content = "".join(cell.get("source", []))

            # Find all standard Markdown image references (e.g., ![alt text](path "title"))
            matches = re.findall(r"!\[.*?\]\((.*?)(?:\s+\".*?\")?\)", cell_content)
            # Find all MyST figure syntax references (e.g., {figure} path)
            myst_matches = re.findall(r"\{figure\}\s+(.*?)\s*(?:\n|$)", cell_content)
            matches.extend(myst_matches)

            for match in matches:
                # Skip if the image path is already converted to the public URL
                if match.startswith(base_url):
                    continue

                # Normalize and resolve the image path
                image_path = normalize_image_path(file_dir, match)

                if os.path.isfile(image_path):
                    print(f"Image found: {image_path}")  # Debugging output
                    # Copy the image to the output folder
                    image_name = os.path.basename(image_path)
                    new_path = os.path.join(output_folder, image_name)
                    shutil.copy(image_path, new_path)

                    # Replace the local URL with the new URL
                    new_url = base_url + image_name
                    cell_content = cell_content.replace(match, new_url)
                    updated = True
                else:
                    print(f"Warning: Image not found: {image_path}")  # Debugging output

            # Split the updated content back into lines and update the cell
            cell["source"] = cell_content.splitlines(keepends=True)

    # Write the updated notebook back to the file if changes were made
    if updated:
        with open(file_path, "w", encoding="utf-8") as f:
            json.dump(notebook, f, indent=2)

# Main function
def main():
    toc_file = "_toc.yml"  # Replace with the path to your _toc.yml file
    files = get_files_from_toc(toc_file)

    print("Files extracted from TOC:", files)  # Debugging output

    for file_path in files:
        # Ensure the file has the correct extension and exists
        if os.path.isfile(file_path):
            print(f"Processing file: {file_path}")  # Debugging output
            process_file(file_path)
        else:
            print(f"Warning: File {file_path} not found or unsupported.")

if __name__ == "__main__":
    main()