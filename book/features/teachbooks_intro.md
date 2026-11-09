
````{margin}

```{note}

{bdg-link-secondary}`Python Package: TeachBooks`

{bdg-link-light}`Included in TeachBooks Template <../external/template/README.html>`

```

```{tip}
This section is useful for user type 4-5.

```

```{seealso}

[{octicon}`mark-github` Repository](https://github.com/teachbooks/teachbooks)

[{octicon}`book` Documentation](https://teachbooks.readthedocs.io/)

```

````

(teachbooks_package)=
# TeachBooks Python Package

The TeachBooks Python package is a collection of tools that are used to enhance the Jupyter Book v1 software package by adding features and making customization easier. In general, it is only of interest to user types 4 and 5 when building a book locally. However, it may be important for other users to know what the package does, as it is incorporated in the [Deploy Book Workflow](../external/deploy-book-workflow/README.md) and, therefore, any book created from the [TeachBooks Template](../external/template/README.md). This raises two important points:

1. If you are a book user using the [TeachBooks Template](../external/template/README.md) and/or the [Deploy Book Workflow](../external/deploy-book-workflow/README.md), your book is by default built with the `teachbooks` package, and the way your book is built and features that are included in the book may change automatically when it is updated (these will be non-breaking changes; if not, we will notify our mailing list).
2. If you are using the `jupyter-book` v1 package to build your book, some of the features described in this Manual may not be available to you (i.e., those listed on this page). This will be the case if you are using a [setup described in the Jupyter Book v1 Manual](https://jupyterbook.org/v1/publish/web.html), for example, [this GitHub workflow](https://jupyterbook.org/v1/publish/gh-pages.html).

For those who wish to use the package, it is available on [PyPI](https://pypi.org/project/teachbooks/) and can be installed using `pip install teachbooks`. As `teachbooks` is a wrapper, the package is meant to replace the usage of `jupyter-book` commands (although it does indeed add a few new commands to the CLI, e.g., `serve`). It is conventionally used in an identical way, as follows: 

```
teachbooks build book
```

This Manual describes the main features and usage of the package. For those who wish to understand more of hte technical details, note that the implementation the API is is documented at [teachbooks.readthedocs.io/](https://teachbooks.readthedocs.io/).

## List of Features

Items in the list here are currently implemented in the TeachBooks package and described on other pages of this manual:
- [Draft-Release Workflow](./draft-release.md)
- [External Contents](./external_toc.md)
- [Local Server](./local_server.md) 

The package is also set up to handle [APA references](./apa) when using the Draft-Release Workflow (the `_ext` subdirectory and its contents are manually copied during the pre-build phase). This will not be necessary once the APA Reference feature is turned into a proper Sphinx extension or Pybtext plugin.