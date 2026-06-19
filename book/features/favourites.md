````{margin}

```{note}
{bdg-primary}`Sphinx Extension`

{bdg-link-light}`Included in TeachBooks Template <../external/template/README.html>`

```

```{tip}
This page is useful for user type 3-5.
```

```{seealso}

[{octicon}`mark-github` Repository](https://github.com/TeachBooks/TeachBooks-Favourites)

[{octicon}`pencil` Exercise](https://teachbooks.io/template/extension_exercises/017.html)

```

````

# TeachBooks Favourites

TeachBooks Favourites is a Sphinx extension which collects all of TeachBooks' favourite features in one place (including tools originally by TeachBooks and from other sources). It is included by default in the [TeachBooks Template](../external/template/README.md) or can be installed independently. The features included are:

- [Sphinx-Thebe from TeachBooks](./live_code.ipynb)
- [Jupyterbook patches](../external/JupyterBook-Patches/README.md)
- [Download link replacer](../external/Download-Link-Replacer/README.md)
- [Sphinx image inverter](../external/Sphinx-Image-Inverter/README.md)
- [Sphinx iframes](../external/sphinx-iframes/README.md)
- [Sphinx exercise (from Executable Books including TeachBooks contributions)](https://ebp-sphinx-exercise.readthedocs.io/en/latest/)
- [Teachbooks Sphinx tippy](../external/teachbooks-sphinx-tippy/README.md)
- [Sphinx named colors](../external/Sphinx-Named-Colors/README.md)
- [Sphinx dropdown toggle](../_git/github.com_TeachBooks_Sphinx-Dropdown-Toggle/main/MANUAL.md)
- [Sphinx proof (from Executable Books including TeachBooks contributions)](https://sphinx-proof.readthedocs.io/en/latest/)
- [Sphinx code examples](../_git/github.com_TeachBooks_sphinx-code-examples/main/MANUAL.ipynb)
- [Sphinx accessibility](../_git/github.com_TeachBooks_Sphinx-Accessibility/manual/README.md)
- [Sphinx toggle button (from Executable Books including TeachBooks contributions)](https://sphinx-togglebutton.readthedocs.io/en/latest/)
- [Notebook execution patterns](../_git/github.com_TeachBooks_Sphinx-NB-Execution-Patterns/Manual/README.md)
- [Sphinx Launch Buttons](../external/Sphinx-launch-buttons/README.md)
- [Sphinx GitHub Alerts](../_git/github.com_TeachBooks_Sphinx-GitHub-Alerts/main/README.md)
- [Sphinx Metadata Figure](../_git/github.com_TeachBooks_Sphinx-Metadata-Figure/main/MANUAL.ipynb)
- [Sphinx last updated by git (from Matthias Geier, TeachBooks version of the original)](https://github.com/TeachBooks/sphinx-last-updated-by-git)
- [Sphinx Gated Directives](../_git/github.com_TeachBooks_Sphinx-Gated-Directives/main/MANUAL.md)
- [Teachbooks Zoomies](https://github.com/TeachBooks/TeachBooks-Zoomies/)
- [TeachBooks Questions](../_git/github.com_TeachBooks_TeachBooks-Questions/main/MANUAL.md)
- [Sphinx Sticky Margin](../_git/github.com_TeachBooks_Sphinx-Sticky-Margin/main/MANUAL.md)
- [TeachBooks Fetch](../_git/github.com_TeachBooks_TeachBooks-Fetch/main/MANUAL.md)
- [Sphinx to do (from core sphinx](https://www.sphinx-doc.org/en/master/usage/extensions/todo.html)

The extension [Open in new tab](https://pypi.org/project/sphinx-new-tab-link/) is nice, but is not compatible with all setups (dependency clash) so is not included in TeachBooks-Favourites. 

All features which are part of TeachBooks Favourites are include the following label on their respective pages in this manual: {bdg-primary-line}`Part of TeachBooks Favourites`. If you'd like to use specific features, but not the entire TeachBooks Favourites, you can remove this extension and replace it with the individual extensions you want to use.

## Installation
To install TeachBooks-Favourites, follow these steps:

**Step 1: Install the Package**

Install the `teachbooks-favourites` package using `pip`:
```
pip install git+https://github.com/TeachBooks/TeachBooks-Favourites
```

**Step 2: Add to `requirements.txt`**

Make sure that the package is included in your project's `requirements.txt` to track the dependency:
```
git+https://github.com/TeachBooks/TeachBooks-Favourites
```

**Step 3: Enable in `_config.yml`**

In your `_config.yml` file, add the extension to the list of Sphinx extra extensions (**important**: underscore, not dash this time):
```
sphinx: 
    extra_extensions:
        - teachbooks_favourites
```

## Usage

For using the various package we refer to the different manuals linked above.

All extensions are loaded with their default settings.

## Contribute

Do you think we missed an extension that should really be included? Let us know by either

- creating a fork of this repository and submitting a pull request, in which you added the extension to the files
  - `README.md`
  - `pyproject.toml`
  - `src\teachbooks_favourites\__init__.py`
- opening an issue.
