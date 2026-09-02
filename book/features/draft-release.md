
````{margin}

```{note}

{bdg-link-secondary}`Uses TeachBooks package <./teachbooks_intro.html>`

{bdg-link-light}`Included in TeachBooks Template <../external/template/README.html>`

{bdg-link-light}`Supported by Deploy Book workflow <../external/deploy-book-workflow/README.html>`

```

```{tip}
This page is useful for user type 3-5.
```

```{seealso}

[{octicon}`mark-github` Repository](https://github.com/TeachBooks/teachbooks)

[{octicon}`book` Documentation](https://teachbooks.readthedocs.io/latest/cli/cli.html)

```

````

(draft-release)=
# Draft-Release Workflow

Often it is necessary to prepare, review and edit materials in parallel to material that is currently being used by students, or another target audience. This workflow enables an author to easily maintain separate versions of a book without having to repeatedly comment out lines of a table of contents or page when building different versions. It is also easy to implement in CI/CD settings (it is already implemented in the {ref}`Deploy Book Workflow <deploy-book-workflow>`, which builds our TeachBooks).

```{admonition} Why is this useful?
:class: tip

Consider a case where you have been using two branches to develop and maintain a book: `release` (shared with students) and `draft` (shared with colleagues to review contents before release). You are probably also using other branches to develop contents, but rely on the `draft` branch as a way to collect the "finalized-but-not-yet-released" material. Things go smoothly as long as you add pages to the `draft` branch one at a time, then merge the branch into `release` as they are needed.

But what happens when you have 2 pages: one is ready to share with students, but the other is still being reviewed by your colleague. The only way to get the proper page into release is to comment the undesired page in the ToC using a commit on `draft`, merge the commit into `release`, then uncomment the ToC in a new commit on `draft`. This is very tedious, and prone to error as there it is not straightforward to tell which pages are available in the `draft` versus `release` books!

The Draft-Release workflow solves this problem by using commented tags to clearly denote which pages are available in the `draft` book and which are left out of the `release` book.
``` 

The workflow is enabled by a `teachbooks` CLI feature that identifies and removes any lines from the files `_config.yml` and `_toc.yml` file that are surrounded by `REMOVE-FROM-RELEASE` tags.

For example, pages in a developed book (e.g., `draft` branch) can be manually stripped out of the table of contents when a merge request from `draft` to `release` is made. This prevents the page being included in the released book. Pages marked with this feature are still visible in the `draft` book. Lines tagged in the configuration file `_config.yml` can be used in exactly the same manner. The tag is applied as follows:

```yaml
format: jb-book
root: intro

parts:
  - caption: ...
    chapters: 
    - file: ...
      ...
# START REMOVE-FROM-RELEASE
    - file: files_to_remove
# END REMOVE-FROM-RELEASE
```

There is no limit to the number of stripped sections, they can be sequential and indentation does not matter.

To invoke the tag and remove content during the book build process, use the following optional argument when building the book with the `teachbooks` package:

```
teachbooks build --release book
```

This is done in the [deploy-book-workflow](deploy-book-workflow) by including the branches for which preprocessing needs to be done the repository variable `BRANCHES_TO_PREPROCESS` which is by default set to ` ` (just a space = no branch). It should be a space-separated list of branch names, e.g. 'main second third'.

Note that `teachbooks build book` would build a book without stripping the tagged lines, just as `jupyter-book build book` would. This is called "draft mode" and is the default behavior. You can recognize it in the stdout after running the `build` command:

```bash
TeachBooks: running build with strategy 'draft'
```

## Installation

The package is currently [available on PyPI](https://pypi.org/project/teachbooks/) and can be installed as follows:

```
pip install teachbooks
```

The first stable release (`v1.0.0`) is expected to be released in Spring 2025. Until then the package is very much useable but will be updated frequently. Therefore, get in the habit of updating the package regularly:

```bash
pip install --upgrade teachbooks
```

We recommend you install this in an environment that is specifically dedicated for building books. Python virtual environments are a good way to manage this and would be consistent with what is used by the GitHub servers via the {ref}`Deploy Book Workflow <deploy-book-workflow>`. However, if you use non-Python tools to edit and check your book, a Conda environment may be a better choice.

The package is a CLI tool that primarily provides a wrapper around the Jupyter Book v1 package which is used for pre- and postprocessing. In this case "wrapper" refers to the CLI usage: CLI commands generally invoke `jupyter-book` commands internally; the `jupyter-book` package is _not_ distributed within the `teachbooks` package.

The source code and function of the package will eventually be documented on a Sphinx-built website ([teachbooks.io/TeachBooks/](https://teachbooks.io/TeachBooks/)), however, this is currently still under construction.
