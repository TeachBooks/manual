# Deactivate any active conda environment
conda deactivate 2>/dev/null || true

# Clear conda environment variables
unset CONDA_DEFAULT_ENV CONDA_PROMPT_MODIFIER 2>/dev/null || true

# Create a Python virtual environment
python -m venv venv

# Activate the virtual environment
source venv/Scripts/activate

# Install required packages from requirements.txt and sphinx-autobuild
pip install -r requirements.txt sphinx-autobuild

# Initialize Jupyter Book configuration for the book directory
jupyter-book config sphinx book/

# Disable display of all git authors in Sphinx documentation
# by changing 'git_show_all_authors' from True to False in conf.py
sed -i 's/git_show_all_authors = True/git_show_all_authors = False/' book/conf.py

sed -i "s/external_toc_path = '_toc.yml'/external_toc_path = '_toc_with_local_paths.yml'/" book/conf.py

# Build and serve the Sphinx documentation with auto-reload
# Opens browser automatically and ignores build artifacts and Python files
sphinx-autobuild book book/_build/html --open-browser --ignore "book/_build/**" --ignore "*.py" --ignore "book/references.bib" --ignore "book/_toc_with_local_paths.yml" --pre-build "teachbooks build book/ --process-only"