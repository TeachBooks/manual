````{margin}
```{admonition} User types
:class: tip
This section is useful for user type 4-5.
```

{bdg-link-secondary}`Uses TeachBooks package <./teachbooks_intro.html>`
````

(setup-local-server)=
# Local Server to view interactive elements locally

Perhaps you have already noticed that when building a book and testing it locally on your computer, some features do not work the way you expect, or worse---do not work at all! This is because many interactive features rely on browser functionality to work properly, for example: Grasple/H5p iframe exercises, Sphinx-Thebe Python interactivity and HTML/Javascript elements. Although the website is _static_ (i.e., there is no code running on a webserver that generates the content), modern web browsers have their own internal computing environments that run processes to deliver the rich content we desire in our books.

Technically what is needed to facilitate this during the editing and checking of your book locally is a **static web server** that can serve the files in the `./book/_build/html` directory of your book (this subdirectory is created as a result of the command `build book`). We refer to this as a **local server** because it is running on your local machine.

```{admonition} Why do you need a local server?
:class: tip

A TeachBook is really just a _static website._ This means that all book content _and interactivity_ is available via the (static) files that are provided to you by a webserver when you visit a specific URL. After this initial request, all required files are available in your web browser, however, some features require the request and response protocol to work properly. 
```

We recommend you use the **TeachBooks Python Package**, which has a `serve` command in the CLI tool to start and stop local servers. Find out more on {ref}`the TeachBooks Package page <teachbooks-serve>`.

This page presents just a few additional examples that are used by TeachBooks collaborators. There are many more options available out there, for example, [this list illustrates many servers that can be activated with a single line of code!](https://gist.github.com/willurd/5720255).

```{tip}
Remember that the browser is serving static files provided by the local server and does not always keep track when they are updated. 

You should reload the page if you are editing and rebuilding the book. You can try `CTRL+R` `ctrl`+`F5`. If this does not work, on Chrome try right-clicking somewhere on the page, select \"Inspect\", open the \"Network\" tab, then reload with `CTRL+R`.
```

(teachbooks-serve)=
## TeachBooks Server: `teachbooks serve`

If you have the TeachBooks Python package installed (`pip install teachbooks`), starting a server is as simple as:

```bash
teachbooks serve
```

See the {ref}`TeachBooks Package page <teachbooks-serve>` for additional guidance on using the CLI tool.


By default it assumes you have a book in `./book/`, are running the command from the root `./` of your repository and will serve `./book/_build/html`. If not, it will serve the repository root. You can also specify the directory to serve:

```bash
teachbooks serve path unconventional_book_dir/_build/html
```

```{tip}
Remember that the browser is serving static files provided by the local server and does not always keep track when they are updated. 

You should reload the page if you are editing and rebuilding the book. You can try `CTRL+R` `ctrl`+`F5`. If this does not work, on Chrome try right-clicking somewhere on the page, select \"Inspect\", open the \"Network\" tab, then reload with `CTRL+R`.
```

To stop the server, simply run

```bash
teachbooks serve stop
```

The CLI tool is set up to make the book edit and check workflow as easy as possible locally:
- you can rebuild the book without restarting the server.
- it reuses an existing server if already running.
- it prints the URL where the book is served after building the book to easily access it by clicking the link in standard output.
- the `teachbooks serve stop` command prevents Python processes running in the backgroudn and slowing down your computer (it saves the server state in a pickle file). 

### Installation of TeachBooks

The TeachBooks package is currently [available on PyPI](https://pypi.org/project/teachbooks/) and can be installed as follows:

```
pip install teachbooks
```

The first stable release (`v1.0.0`) is expected to be released in Spring 2025. Until then the package is very much useable but will be updated frequently. Therefore, get in the habit of updating the package regularly:

```bash
pip install --upgrade teachbooks
```

We recommend you install this in an environment that is specifically dedicated for building books. Python virtual environments are a good way to manage this and would be consistent with what is used by the GitHub servers via the {ref}`Deploy Book Workflow <deploy-book-workflow>`. However, if you use non-Python tools to edit and check your book, a Conda environment may be a better choice.

The package is a CLI tool that primarily provides a wrapper around the Jupyter Book package which is used for pre- and postprocessing. In this case "wrapper" refers to the CLI usage: CLI commands generally invoke `jupyter-book` commands internally; the `jupyter-book` package is _not_ distributed within the `teachbooks` package.

The source code and function of the package will eventually be documented on a Sphinx-built website ([teachbooks.io/TeachBooks/](https://teachbooks.io/TeachBooks/)), however, this is currently still under construction.

## Live Server: a VS Code Extension

A local server is easy to initialize directly in VS Code using the Live Server extension. Once installed, it can be activated with a "Go Live" button in the bottom right corner of VS Code. The extension will automatically serve index.html, so depending on your book build settings you may need to navigate to the correct directory/file manually using the URL address in the browser.

````{admonition} Install Live Serve Extension
:class: tip

You can install this extension by searching for `Live Server` (or even easier, extension ID `ritwickdey.LiveServer`)in the Visual Studio Code extensions marketplace.

```{figure} https://github.com/ritwickdey/live-server-web-extension/raw/master/img/icon.png
---
width: 10%
name: live-server-icon
```
````


## Python Server: `python -m http.server`

The Python standard library has a built-in server that can be activated from the command line. This is a simple way to serve a book locally  

```
python -m http.server
```

If you don't mind typing a bit more, you can specify the port number and the directory to serve:

```
python -m http.server 8000 --directory book/_build/html
```

This is actually what the `teachbooks serve` command is using, but there we have added additional features to make the process more user-friendly for the book edit and check workflow.

### Stopping the Python Server

It can be challenging to stop the Python server, especially when using Windows OS. Even though you may force end the process (e.g., with `CMD+C`), the server may still be running in the background.

For Mac and Linux users (or for Windows if you have Git Bash installed or another Unix-type terminal), you can try this:

```bash 
pid=$(ps aux | grep http.server | head -n 1 | awk '{ print $2 }')
kill -9 $pid
```

Or this:

```bash
tskill python
```

A Windows-specific command for the CMD prompt or Powershell is:

```
TASKKILL /IM python.exe /F
```
