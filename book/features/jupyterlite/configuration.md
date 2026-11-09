# Configuration

In order to use Jupyterlite, we need to update the configuration of our book a bit. First, make sure you have the correct packages installed. These are:

    jupyterlite-sphinx
    jupyterlite-xeus-python

You can install these using `pip`. Make sure these are also defined in the `requirement.txt`! 

## Configuring the kernel

There are multiple Python kernels available that work in the browser. Two popular ones are [Pyodide] and [`Xeus-Python`]. The latter allows you to install packages from `conda-forge` during build time, making them immediately available on your website. In this example, `Xeus-Python` will be used.

When you have installed `jupyterlite-xeus-python`, the kernel will automatically be included in the build without any configuration. However, the default kernel only comes with `numpy`, and we want to make sophisticated interactive content, for example with `matplotlib` and `ipywidgets`. `Xeus-Python` can install these packages itself with `conda`. All we need to do is give it a list of the packages we want installed. To this end, we need to make a configuration file for `jupyterlite` containing settings that will be passed to `Xeus-Python`. The configuration file needs to be in JSON format, and needs to be placed in the root directory of your book (where `_config.yml` lives). In this file, we can specify which packages need to be installed in the kernel as follows:

    {
        "XeusPythonEnv": {
            "packages": [
                "numpy",
                "matplotlib",
                "ipywidgets"
            ]
        }
    }

## Updating the TeachBook's `_config.yml`

Since `jupyterlite-sphinx` is a Sphinx extension, we need to tell TeachBooks to include it in the build process and specify the name of the `jupyterlite` configuration file. To do so, create a new entry in `_config.yml` like this:

    sphinx:
        extra_extensions:
        - jupyterlite-sphinx
        config:
            jupyterlite_config: jupyterlite-config.json

Of course, change `jupyterlite-config.json` to the name of your configuration file.

## Building

When everything is configured correctly, a `Xeus-Python` kernel will be built when you build your book via `teachbooks build`. You can check this by keeping an eye on the output in the terminal: you should see a lot of extra lines mentioning `JupyterLite`.