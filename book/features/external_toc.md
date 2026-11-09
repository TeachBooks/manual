````{margin}
```{attributiongrey} Attribution
:class: attribution
This page reuses MIT licensed content from {cite:t}`teachbooks_package`. {fa}`quote-left`{ref}`Find out more here.<external_resources>`
```

```{admonition} User types
:class: tip
This page is useful for user type 3-5.
```

{bdg-link-secondary}`Uses TeachBooks package <./teachbooks_intro.html>`

{bdg-success}`WebApp`
````

(external-toc)=
# Sharing content between books in table of contents

## Introduction

When creating books, you might want to reuse material from other people or from other books you made. In some cases you might even want to have the exact same material into your book. You could do so by manually copying material over. However, whenever the source material is updated, you have to do that again. As an alternative, you can use the underlying git system to refer to the source file directly. This allows you to pick a specific version, or keep the most up-to-date version of it. This pages explains how to do so directly in the table of contents using the **External Content** (or **External TOC**) feature which is part of the TeachBooks Python package, or by making use of the [TeachBooks Recombiner](https://teachbooks.io/recombiner/).

Previously, this book feature was implemented using [submodules](../external/Nested-Books/README.md), but the implementation was more difficult to use. Despite this, submodules are still a widely used Git feature that can be very useful for book authors, so check out the [submodules page](../external/Nested-Books/README.md) to learn more, especially if the External TOC tool does not satisfy your needs. Submodules have a few additional features not (yet) implemented using the External TOC.

The External TOC features are incorporated in the teachbooks package starting with version `0.2.0`. The [TeachBooks Recombiner](https://teachbooks.io/recombiner/) is a webapp to ease that process.

## What does it do?

This functionality, part of the [TeachBooks package](https://github.com/TeachBooks/TeachBooks) allows you to refer to `.ipynb`, `.md` and `.rst` files stored on public repositories. These files are then handles as if they were normal files in your book, leading to a the file as a page in your built book. To prevent issues it validates that the external content has a permissive license, automatically combines any `reference.bib` files, and warns you if there's a mismatch in `requirements.txt` or with plugins in `_config.yml`. Furthermore, it adds an attribution admonition (like the one on this page) to the page, showing the source of the file in the built book.

To ease the process, the webapp [TeachBooks Recombiner](https://teachbooks.io/recombiner/) allows you to select the pages to take from other books and generate the syntax to add them to your book.

## Installation
To use this extension, follow these steps:

**Step 1: Install the Package**

Install the module `teachbooks` package using `pip`:
```
pip install teachbooks>=0.2.0
```
    
**Step 2: Add to `requirements.txt`**

Make sure that the package is included in your project's `requirements.txt` to track the dependency:
```
teachbooks>=0.2.0
```

## Usage

To use the functionality, take the URL of a file and add it to your `_toc.yml` as follows:

```yaml
format: jb-book
root: .

parts:
  - caption: ...
    chapters:
    - file: ...
    .
    .
    .
    - external: <link to GitHub / GitLab source .md or .ipynb file>
    .
    .
    .
```

The link can be pointing to a file on a branch (which will take the most recent version of that file on the branch) or a commit or tag (which will take a specific version of the file). For example:
- `external: https://github.com/TeachBooks/manual/blob/release/book/intro.md` will take the most recent version of the intro page of this book on the release branch
- `external: https://github.com/TeachBooks/manual/blob/06d67e8a0110c94d9147ce07090656dedc7d0e64/README.md` will take the file during the state of a specific commit (06d67e8).
- `external: https://github.com/TeachBooks/manual/blob/v1.1.1/README.md` will take the file during the state of a specific tag (v1.1.1)

These links can be created manually, copied from your browser, or generated using the [TeachBooks Recombiner](https://teachbooks.io/recombiner/). For the TeachBooks Recombiner: add the book you want to take content from, select the chapters and follow the instructions which gives you the syntax to add to your `_toc.yml`.

If you're building your book online in GitHub, the [deploy-book-workflow](../external/deploy-book-workflow/README.md) will deal with these files during the `teachbooks build` command. If you want to build the book locally, run the command `teachbooks build`.

If the source file is from another book, the contents of the `requirements.txt`, `_config.yml` are checked for any missing/incompatible entries. If this leads to compatibility issue, you'll be warned during the build which will help you solve these dependencies or plugins manually by updating your main book's `_config.yml` and `requirements.txt`
Additionally, any `references.bib` files are merged into your main book's `references.bib` file, and the licenses of the external content are validated to allow for re-use. External content without a permissive license will result in an error to try to prevent any accidental copyright infringement.

### Configuration
The attribution admonition can be configured in the `_config.yml` file. You can adapt the location (top or margin), colour (making use of the sphinx extension [Sphinx-Named-Colors](../external/Sphinx-Named-Colors/README.md)), and symbol (by adding a custom CSS class). This leads to a similar admonition as mentioned [in the chapter on recommendations for copyright and licenses](custom_attribution).

To adapt the location of the admonition (margin or top, top is default option), you can use the following configuration:

```yaml
teachbooks:
  attribution_location: margin
```

To adapt the colour of the admonition (with for example a grey colour, default is blue), you can use the following configuration. Make sure to add the `sphinx-named-colors` extension to your environment (e.g., `requirements.txt`):

```yaml
sphinx:
  config:
    named_colors_custom_colors: {'attributiongrey':[150,150,150]}
  extra_extensions:
    - sphinx_named_colors

teachbooks:
  attribution_color: attributiongrey
```

To adapt the symbol of the admonition (with for example double quotes), you can add the following [custom CSS class](../_static/attribution.css) to `book/_static/attribution.css`:

```css
/* Attribution */
div.attribution > .admonition-title::after {
  content: "\f10d";
}
```

Note that, when making a changes for the configuration locally they are not incorporated to existing external content.
You will need to remove the `_git/` folder or run `teachbooks clean --external` and re-run the build command to see the changes. When building the book on i.e. GitHub Actions, the `_git/` folder is always rebuild from scratch.


## Contribute

This tool's repository is stored on [GitHub](https://github.com/TeachBooks/TeachBooks). If you'd like to contribute, you can create a fork and open a pull request on the [GitHub repository](https://github.com/TeachBooks/TeachBooks).
