````{margin}
```{admonition} User types
:class: tip
This page is useful for user type 5.
```
````

# Build your book: JupyterBook

<a href="https://jupyterbook.org/v1/"><img  style="display:inline-block; height:1.5em; width:auto; transform:translate(0, -0.15em)" src="../images/logo-wide.svg" alt="Jupyter book v1"></a> is a regular Python package which converts our content into a website. It's part of all of the `requirements.txt` files for a book repository. At TeachBooks we developed a Python package called `teachbooks` which takes over the these features and adds [additional features](../features/overview.md). One of those additional features, for example, is the workflow to GitHub Pages. 

Concretely, this means that the teachbooks package can be used to replace the <a href="https://jupyterbook.org/v1/"><img  style="display:inline-block; height:1.5em; width:auto; transform:translate(0, -0.15em)" src="../images/logo-wide.svg" alt="Jupyter book v1"></a> package when calling these features. You could think of it as `jupyter-book` being a dependency of `teachbooks`.

```{admonition} Note
:class: tip
Don't forget to add the package `teachbooks` in the `requirements.txt` files in your book repository and to have it installed in your working environment (`pip install teachbooks`).
```

## Build a book

As soon as you've installed your book environment with jupyter-book you can build your book locally. The official <a href="https://jupyterbook.org/v1/"><img  style="display:inline-block; height:1.5em; width:auto; transform:translate(0, -0.15em)" src="../images/logo-wide.svg" alt="Jupyter book v1"></a> documentation is quite extensive. You can navigate to the directory where your book is to leave out the `path-to-book`.

```
teachbooks build <path-to-book>
```
Alternatively:
```
jupyter-book build <path-to-book> --all
```

Note: use `--all` for the jupyter-book whenever building a book to make sure the table of contents fully updates. Or alternatively, delete the old `_build` folder before building the new book.

## View the book locally

Once the build process is completed successfully, you will see the file location in your terminal output. Your terminal will look something like this. Simply open this in the browser (you may have to copy/paste).

```{figure} figures/Terminal.PNG
---
width: 80%
name: terminal
align: center
---
Terminal
```

```{admonition} Tip
:class: tip, dropdown
Bookmark the (local) file location for easy access!
```
