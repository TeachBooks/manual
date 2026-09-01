# Installing and running Teachbooks with Pixi

> Install Pixi once, and you don't have to worry about installing the correct Python version and TeachBooks dependencies yourself.

Pixi is a package management tool that allows you to install Python, TeachBooks, and other dependencies using a single `pixi.toml` file. We created this file for you, so you only need to install [pixi from here](https://pixi.prefix.dev/latest/installation/). Pixi is available for Windows, macOS, and Linux.

We present Pixi here as an alternative installation and workflow to the approach presented in the rest of this documentation. When using Pixi, you do not need to separately install Python, TeachBooks, JupyterLab, or manage a virtual environment. Simply start making your book using the [ten steps](https://teachbooks.tudelft.nl/jupyter-book-manual/draft/external/template/README.html#your-first-teachbook-using-the-github-template) and install the project environment as described below.


## Steps
> If you already have a TeachBooks project, download this [pixi.toml file](../../pixi.toml), place it in the root folder of your project, and follow the steps below.

1. Install [pixi](https://pixi.prefix.dev/latest/installation/) on your machine
2. Follow [the 10 steps]([ten steps](https://teachbooks.tudelft.nl/jupyter-book-manual/draft/external/template/README.html#your-first-teachbook-using-the-github-template)) to start your Teachbooks project
3. Clone your project to a local folder [see details here](https://teachbooks.io/manual/workflows/branches.html)
4. Using the terminal, navigate to the root folder of your project and run `teachbooks_install`. This will install all necessary software and packages (listed in the requirements.txt file) - these are installed in the project folder in `.pixi/`.

In the pixi.toml file we have created three tasks:
- `pixi run editor` this will start jupyterlab as the editor for both markdown and jupyternotebooks
- `pixi run server` starts a server
- `pixi run teachbooks` builds the book (equivalent to `teachbooks build book` as described [here](https://teachbooks.tudelft.nl/jupyter-book-manual/draft/installation-and-setup/jupyter-book-setup.html#build-a-book))


## Add dependencies
In the requirements file we included some of the most used depencies. If you want to add packages, add them to the requirements file and run again `pixi run teachbooks_install`. Pixi will then add the dependency to your project and updates the environment.

## Editing with Jupyter lab
As an alternative to VSC, JupyterLab can be used to edit of your Jupyter Notebook and Markdown files. Start JupyterLab by running `pixi run editor` 

```{figure} figures/jupyterlab.png
---
width: 50%
name: fig_juplab_editor 
---
Running `pixi run editor` opens jupyterlab as editor.
```

You can preview the content by rightclicking the markdown document and open with markdownpreviewer. Once finished with editing, go back to the terminal and hit `ctrl + c` to stop the Jupyter server.

## Cleaning up an unused project

The Pixi environment can take up considerable disk space. If you don't plan to work on your TeachBook for a while, you can remove the installed environment with:

`pixi clean`

This removes the software and packages installed in the project's .pixi/ folder. Your pixi.toml and pixi.lock files are kept, so you can recreate the environment later by running:

`pixi install`

```{note} 
If you have multiple Teachbooks, it seems as if they all take a lot of memory. This isn't really the case as pixi makes smart use of links between them.
```