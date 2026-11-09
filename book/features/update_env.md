````{margin}
```{admonition} User types
:class: tip
This page is useful for user type 4-5.
```

{bdg-dark}`Git Workflow`
````

# Auto-updating packages

When building your book, you are making use of various Python packages: the `teachbooks` and `jupyter-book` v1 packages themselves, but also packages for extensions. These are regularly updated, however, those updates are not necessarily incorporated into your book automatically. The list of packages and their versions are defined in the `requirements.txt` file, which is provided as part of the [template](../external/template/README.md). Consider the following three options for how packages can be specified:
1. `requirements.txt` only contains names of packages like: `download_link_replacer`. In that case, your [deploy-book-workflow](../external/deploy-book-workflow/README.md) will take the most up-to-date version when making your book website once a week (as the chache will be cleared once a week). This might lead to unexpected changes when a new version has been released (although new versions will generally be backwards compatible).
1. `requirements.txt` contains names of packages with a specified version like: `download_link_replacer==1.0.4`. In that case, your [deploy-book-workflow](../external/deploy-book-workflow/README.md) always uses that specific version. In doing so, you'll never get a new update unless you explicitly adapt the version in `requirements.txt`. If you'd like to get notified for updates, you might consider using GitHub's Dependabot.
1. A combination of 1. and 2.: In that case (once a week at most) you will receive new versions for only the unfixed packages, no updates for the fixed versions.

For the case of specified versions, you can use GitHub's Dependabot to notify you that a new version is available _and_ to automatically set up a Pull Request to update your book with the new version.

## Notifications updated packages with Dependabot

Dependabot checks the specified version of packages in your `requirements.txt` file and, if a new version is found, will create a new branch, update the `requirements.txt` file and open a Pull Request whenever there's an update available for that package. Note that packages without a fixed version are ignored by Dependabot.

To activate this feature:
1. Specify version for all packages you want to be notified on in your `requirements.txt` file. See [`requirements.txt`](https://github.com/TeachBooks/manual/blob/release/requirements.txt) of this manual as an example
1. In the `.github/` directory, add a file named `dependabot.yml` with the following content (note that sphinx-thebe (used in [python live coding](./live_code.ipynb)) and docutils (using in [APA referencing](./apa.md)) are ignored because these require a very specific version to work):

```yaml
version: 2
updates:
  - package-ecosystem: "pip" 
    directory: "/"
    schedule:
      interval: "weekly"
      day: "sunday"
      time: "22:59"
    ignore:
      - dependency-name: "sphinx-thebe"
      - dependency-name: "docutils"
```

This check will run every Sunday around midnight (UTC) whether any of the fixed-version packages are updated. If so, several things will happen:
1. A new branch is created with a name that begins with `dependabot...` in the repository
1. A commit is made updating `requirements.txt` (e.g., `jupyterbook_patches==1.4.2` is changed to `jupyterbook_patches==1.4.4`)
1.  A _pull request_ will be created to merge the new branch into the _default_ branch. This pull request must be manually reviewed and merged. Afterwards the _dependabot_ branch can be deleted (automatically).

Note that these activities will occur automatically and may trigger other workflows in your repository (for example, the building of a book on another branch). If the workflow `call-deploy-book` is used, and you don't want the _dependabot_ branches to be built and deployed (and all other branches you do want), you can achieve this by adding the following text to the file `call-deploy-book.yml`:

```yaml
on:
  push:
    branches:
    - '**'
    - '!dependabot**'
```

If you want another scheduled workflow, see [Dependabot options reference](https://docs.github.com/en/code-security/dependabot/working-with-dependabot/dependabot-options-reference#schedule-) for the options.

If you want to manually trigger the Dependabot workflow, you can do this by doing the next steps:

1. Go to your repository on [Github](https://github.com/).
1. Choose **Insights**.
1. Choose **Dependency graph**.
1. Choose **Dependabot**.
1. Choose **Recent update jobs** next to <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" role="img" aria-labelledby="a5ltiumrgcrur1ds9f7gmugoditp5omm" class="octicon" width="16" height="16"><title id="a5ltiumrgcrur1ds9f7gmugoditp5omm">pip</title><path d="M7.932.036c-4.052 0-3.799 1.757-3.799 1.757l.005 1.82h3.867v.547H2.602S.009 3.866.009 7.954c0 4.089 2.263 3.944 2.263 3.944h1.35V10S3.55 7.738 5.85 7.738h3.835s2.155.034 2.155-2.083v-3.5s.327-2.12-3.908-2.12zM5.8 1.26a.695.695 0 11.001 1.39.695.695 0 010-1.39z" fill="#387EB8"></path><path d="M8.047 15.914c4.052 0 3.8-1.757 3.8-1.757l-.005-1.82H7.975v-.547h5.403s2.592.294 2.592-3.795c0-4.088-2.263-3.943-2.263-3.943h-1.35v1.897s.073 2.263-2.227 2.263H6.295S4.14 8.177 4.14 10.295v3.5s-.327 2.12 3.907 2.12zm2.132-1.224a.695.695 0 110-1.39.695.695 0 010 1.39z" fill="#FFE052"></path></svg> `requirements.txt`.
1. Choose **Check for updates**.
