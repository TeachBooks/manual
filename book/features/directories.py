import os
import json

def list_file_types(directory):
    file_types = set()
    for root, _, files in os.walk(directory):
        for file in files:
            _, ext = os.path.splitext(file)
            if ext:  # Only include files with extensions
                file_types.add(ext)
    return sorted(file_types)

def format_file_types(file_types):
    formatted = [f"**/*{ext}" for ext in file_types]
    return formatted

if __name__ == "__main__":
    book_directory = r"c:\Users\tomvanwoudenbe\Git\book\book"
    file_types = list_file_types(book_directory)
    formatted_file_types = format_file_types(file_types)
    print("File types in the directory (formatted):")
    print(json.dumps(formatted_file_types))