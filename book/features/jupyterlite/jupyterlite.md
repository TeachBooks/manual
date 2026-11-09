# JupyterLite-Sphinx

By popular demand: how to include interactive pieces of code in your TeachBook. We can do this by using the [JupyterLite](https://github.com/jupyterlite) app, which allows you to run a Jupyter Lab session and execute Python code entirely in-browser. Jupyterlite can be embedded in a TeachBook with the [`JupyterLite-Sphinx`](https://github.com/jupyterlite/jupyterlite-sphinx) extension.

## An example

You can try JupyterLite below. It has `numpy`, `matplotlib` and `scipy` installed.

```{eval-rst}
.. replite::
    :width: 100%
    :height: 600px
```

## What you can and can't do

JupyterLite is ideal for including small interactive pieces of content on a page. For example, you may want to include a `matplotlib` plot with some sliders to play with. Or you may have a small model that requires a student to provide some input parameters and then gives some output. It is important to note that JupyterLite makes use of the browser cache for memory, meaning that the state of a JupyterLite element is lost when the user leaves a page. Hence, it may not be a good idea to ask student to code a lot by hand, as they loose all of their progress when the page is closed. 

It is possible to install packages in the kernel that will be shipped with your book. However, there are some strict limitations to what packages can be installed. For once, they should be listed on `conda-forge`. In addition, the package needs to be a [`noarch`](https://docs.conda.io/projects/conda/en/latest/user-guide/concepts/packages.html#noarch-packages) package. In theory, you can install your own packages if it meets those two requirements, but we have no experience in doing that (feel free to try it out yourself, so that we can add instructions to the manual!).

```{warning}
Including JupyterLite in your book imposes some requirements on the Docker image that is used in the CI/CD pipeline. Specifically, you need to have access to Anaconda. If you know what you're doing, have a look at the [`.gitlab-ci.yml`](https://gitlab.tudelft.nl/interactivetextbooks-citg/jupyter-book-manual/-/blob/main/.gitlab-ci.yml) of this repository.
```