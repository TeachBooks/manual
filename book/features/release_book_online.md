````{margin}

```{note}

{bdg-link-light}`GitHub Reusable Action: Deploy Book workflow <../external/deploy-book-workflow/README.html>`

{bdg-link-light}`Part of TeachBooks Template <../external/template/README.html>`

{bdg-link-secondary}`Uses TeachBooks package <./teachbooks_intro.html>`

```

```{tip}
This section is useful for user type 3-5.
```

```{seealso}

[{octicon}`mark-github` Repository deploy book workflow](https://github.com/TeachBooks/deploy-book-workflow)

[{octicon}`book` Publish version on separate (fixed) URLs](../installation-and-setup/versions_URLs.md)

{octicon}`pencil` Exercises:
- [Your version of the book](https://teachbooks.io/template/exercises/004.html)
- [Deploy book workflow](https://teachbooks.io/template/extension_exercises/015.html)

```

````

# Share book online for multiple versions

As you'll start working on your TeachBook, you'll probably want to share it online. And over time you'll create more and more versions of your book, for example for different academic years. 

Our Deploy Book Workflow (described in general [here](../external/deploy-book-workflow/README.md)) allows you to do so. It builds your book for all branches in your repository and releases them online via GitHub Pages. In simplified terms, it automatically builds the book website based on updates to your repository, creates multiple instances of your book (defined by each branch) and provides the ability to customize the URL's at which each instance of the book can be accessed. This tool is designed specifically for educational contexts, for example, when you may want to preserve book versions from multiple academic years so that students are able to access it later.

Sharing your book online has many features and customizations:
- Automatic and manual building and releasing of your book online via GitHub Pages using a Reusable GitHub Actions. See explanation [below](how_to_start).
- Ability to release both private (GitHub Pro, GitHub Team, GitHub Enterprise Cloud, or GitHub Enterprise Server required) and public (GitHub Free is enough) repositories. GitHub Teams is free for teachers as described in the [GitHub documentation](https://docs.github.com/en/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-education-for-teachers/about-github-education-for-teachers#github-education-features-for-teachers). If you have an organization for your TeachBook on GitHub, link your GitHub team rights to your organization as described on the [GitHub website](https://github.com/team#organizations).
- Releasing all or a selection of branches, allowing to build a draft version of the TeachBook online which reduces the need for local builds of the book. See explanation [below](gh-workflow-settings).
- Allowing use of submodules within your book. For private submodules, see the explanation [below](private_submodules)
- Converting branch-names to well-defined URLs. See explanation [below](gh-workflow-settings).
- Customizable settings on where the books should be deployed including alias for branch-names and selection of one branch to be deployed on root. The workflow will gives warnings if these settings are ill-defined or conflicting. Although aliases are generally not allowed by GitHub Pages, it seems you can use one alias, but not more. See explanation [below](gh-workflow-settings).
- Customizable behavior of book URL root directory, either by redirecting the root to one of the branches or by copying or moving one of the branches to root. See explanation [below](gh-workflow-settings).
- Adds an 'archived'-banner to old branches / branches of previous years. See explanation [below](gh-workflow-settings).
- Custom 404 "Page Not Found" page with buttons for redirecting to Homepage (e.g., book intro page), "Go Back" or Repository home.
- Provides a summary describing where the TeachBook is released, errors in the build process per branch and how the release step is configured. See explanation [below](gh-workflow-summary)
- Caching of already built books so that it can be partially reused when another branch is released or the next build contains critical errors. See explanation [below](gh-caching)
- Caching of python environment to speed up the workflow. See explanation [below](gh-caching)

(how_to_start)=
## How to start using this workflow

The Deploy Book Workflow is by default incorporated into any book that has been created using the [TeachBooks Template](https://github.com/TeachBooks/template).

Feel free to use it for your existing TeachBook as well:
1. Add [`teachbooks`](https://github.com/TeachBooks/TeachBooks) to your `requirements.txt` file in your root folder
2. Move all the TeachBook files (including `_config.yml` and `_toc.yml`) to a subdirectory `book/`.
3. Copy the [`call-deploy-book.yml`](https://github.com/TeachBooks/template/blob/main/.github/workflows/call-deploy-book.yml) workflow to the `/.github/workflows` folder in your repository (the file is located in the TeachBooks Template repository becuase that file then refers to the file `deploy-book.yml` located in _this_ repository).
4. Set source for GitHub pages to GitHub Actions under <svg aria-label="Edit repository metadata" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-gear float-right">    <path d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z"></path> </svg>`Settings` - <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-browser">    <path d="M0 2.75C0 1.784.784 1 1.75 1h12.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25ZM14.5 6h-13v7.25c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Zm-6-3.5v2h6V2.75a.25.25 0 0 0-.25-.25ZM5 2.5v2h2v-2Zm-3.25 0a.25.25 0 0 0-.25.25V4.5h2v-2Z"></path> </svg> `Pages` - `Build and deployment` - `Source` - `GitHub Actions` (as long as you don't do this the workflow deploys all branches which build successfully).
5. Trigger the workflow by making an edit to the TeachBook by editing and committing changes to one of the files in the `book/` subdirectory (available under <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-code UnderlineNav-octicon d-none d-sm-inline">    <path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path></svg> `Code`) or manually activating the workflow under <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-play UnderlineNav-octicon d-none d-sm-inline">    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>`Actions` - `All workflows` -  `call-deploy-book` - `Run workflow` - `Use workflow from branch: <the branch you did step 1, 2 and 3 in>` - `Run workflow` (this workflow).
6. Now checkout the progress and summary of the releasing workflow under <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-play UnderlineNav-octicon d-none d-sm-inline">    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>`Actions` - `All workflows` -  `call-deploy-book` -`<the most recent workflow run>`.

(gh-workflow-settings)=
## Customize the workflow: TeachBook releasing settings
You can adapt the behaviour by setting repository variables as explained [here](https://docs.github.com/en/actions/learn-github-actions/variables#creating-configuration-variables-for-a-repository) or using the [VS Code Extension GitHub Actions](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-github-actions). Define the following repository variables:
- `PRIMARY_BRANCH` which is set to `main` whenever it's not defined in the repository variables.
  - This sets the branch or alias (when using 'redirect' for `BEHAVIOR_PRIMARY`) which is shown on root.
  - It is advised to show either your default branch on root, or the branch shared with your primary/active book audience (e.g., your current students).
- `BEHAVIOR_PRIMARY` which is set to `redirect` whenever it's not defined in the repository variables.
  - This indicates whether to copy the PRIMARY_BRANCH to root ('copy'), move the PRIMARY_BRANCH to root ('move') or redirect from root to the PRIMARY_BRANCH ('redirect')
  - Advised to use 'redirect' if you expect to archive a version in the future so that the URL doesn't change for the reader (e.g., to preserve URL containing the current academic year shared with students).
  - Use copy or move when you only expect readers to use the root URL. Move is useful to remove unnecessary build artifacts and if you don't need to visit the URL containing the branch or alias name.
- `BRANCH_ALIASES` which is set to ` ` (just a space) whenever it's not defined in the repository variables.
  - This defines an alias (custom URL) for a branch
  - Variables should be a space-separated list of branch names, e.g. 'alias:really-long-branch-name`
  - If no alias is wanted, `BRANCH_ALIASES` may be set to ` ` (just a space)
- `BRANCHES_TO_DEPLOY`  which is set to `*` (all branches) whenever it's not defined in the repository variables.
  - This defines the branches to deploy.
  - It should be a space-separated list of branch names, e.g. 'main second third'.
- `BRANCHES_TO_PREPROCESS` which is set to ` ` (just a space = no branch) whenever it's not defined in the repository variables
  - This defines the branches to preprocess with the [`TeachBooks` package](./draft-release.md), which removed book-pages and config lines defined with `# START REMOVE-FROM-RELEASE` and `# END REMOVE-FROM-RELEASE`
  - It should be a space-separated list of branch names, e.g. 'main second third'.
  - If no preprocessing is required, `BRANCH_TO_PREPROCESS` may be set to ' ' (space).
- `BRANCHES_ARCHIVED` which is set to ` ` (space, no branch) whenever it's not defined in the repository variables
  - This adds a banner to the released branch: You are viewing an archived version of the book. Click here for the latest version.
  - It should be a space-separate list of branch names, e.g. 'main second third'.

In `call-deploy-book.yml` itself you can specify the trigger for this workflow. By default, a push to any branch triggers the workflow. You can limit the branches or subdirectories.

## Additional GitHub settings
We advise  you to enable two options in the general repository setting regarding pull requests in GitHub:
- Enable `Always suggest updating pull request branches`, suggesting a merge from the default branch into any separate branch before merging into main.
- Enable `Automatically delete head branches` to delete branches after they are merged (you'll still be able to restore those).

## Common Usage Examples

Relevant use cases are explained here, along with an explanation for how to set up the workflow accordingly. Note that it is not required to set your `PRIMARY_BRANCH` to the default branch of your GitHub repository; this is a choice that is determined by what version of the source code you want visitors to see (i.e., work in progress, or the most recent "complete" or "released" version of a book).

### Books with active users of different versions (academic years) 

Consider a case where each academic year you would like to create a new book for your students. However, you need to ensure that students from previous years can still access "their" version of the book. 

Assume for this example that we are working in the "my_organization" GitHub Organization in repository "my_book" and that the current academic year is 2025, and that we have one or more books in our repository from previous years. The desired URL structure is thus:
- students from this year use the book at `my_organization.github.io/my_book/2025/`
- students from last year use the book at `my_organization.github.io/my_book/2024/`
- visitors to `my_organization.github.io/my_book/` will automatically be redirected to the book from the current year

To create this behavior, do the following:

- Create a branch for each year: a logical name would have format `YYYY`, (technically it can be anything, as the URL can be set to `YYYY` with `BRANCH_ALIASES`).
- Set `PRIMARY_BRANCH` to the branch for the current academic year (e.g., `2025`)
- Set `BEHAVIOR_PRIMARY` to `redirect` (default) 

#### Alternative without redirect to current year

One possible modification to this setup would be if you are progressively releasing content to your current students (e.g., `2025`) but you wanted visitors to `my_organization.github.io/my_book/` to see a complete version of your book. Assuming that the ideal version for such visitors is the completed book from the previous year (`2024`), you could do this:
- Set `PRIMARY_BRANCH` to `2024`
- Set `BEHAVIOR_PRIMARY` to `copy`

As your current students may then accidentally go to the older version of the book, we recommend you use a banner to indicate to readers that there is a (partial) new version available, and advise them where to find it. You can add a banner using this workflow (`BRANCHES_ARCHIVED`) or the [standard Jupyter Book v1 banner feature](https://jupyterbook.org/v1/web/announcements.html).

### Books with active editors working in parallel

Consider a case where several authors are working on material for a book and you would like to be able to see the work of any author at any time. You also have a branch that is used to share finalized material with your readers (we call this a "release" branch) and a branch that is used to collect and review the work of all authors before releasing it (we call this a "draft" branch).

Assume for this example that we are working in the "my_organization" GitHub Organization in repository "my_book." The released book is on branch `release` the draft book is on branch `draft`; author branches are `author_1`, `author_2`, etc. The desired URL structure is thus:
- official (released) version of the book is at `my_organization.github.io/my_book/`
- draft version of the book is at `my_organization.github.io/my_book/draft/`
- the work of each author can be found at `my_organization.github.io/my_book/author_1/`, etc.

To create this behavior, do the following:

- Create a branch for each author as well as `release` and `draft` branches
- Set `draft` to the default branch
- Set `PRIMARY_BRANCH` to `release`
- Set `BEHAVIOR_PRIMARY` to `copy`

Note that in this situation we strongly recommend using the Draft-Release workflow that is incorporated in the TeachBooks Python package, which allows you to restrict specific content from appearing in the `release` book that is already incorporated in the `draft` book. [Find out more here](./draft-release.md). This is useful, for example, if you would like to review many chapters, but release only one at a time, or use a banner in the draft book (e.g., via `_config.yml`) but not the released book.

#### Why make the draft branch default?

What if you want to make sure the source code for the released book is visible in the repository, rather than the draft version (e.g., you want to make sure external visitors see this version of the material)? You can do this by making `release` your default branch instead of `draft`. However, this also means that Pull Requests will be default be made into the `release` branch instead of `draft`, which may alter the working method of your team in an undesirable way (e.g., not being able to use a `draft` branch, accidentally releasing material before checking on `draft`, or having to manually adjust every PR that is created by GitHub to merge into `draft` instead of `release`).

(private_submodules)=
## Private submodules
In case your book includes private submodules, you'll need to create a Personal Access Token (classic) with at least the scope `repo` as described in the [github documentation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens), and add this token with the name `GH_PAT` as a `Repository secret` or `Organization secret` (<svg aria-label="Edit repository metadata" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-gear float-right">    <path d="M8 0a8.2 8.2 0 0 1 .701.031C9.444.095 9.99.645 10.16 1.29l.288 1.107c.018.066.079.158.212.224.231.114.454.243.668.386.123.082.233.09.299.071l1.103-.303c.644-.176 1.392.021 1.82.63.27.385.506.792.704 1.218.315.675.111 1.422-.364 1.891l-.814.806c-.049.048-.098.147-.088.294.016.257.016.515 0 .772-.01.147.038.246.088.294l.814.806c.475.469.679 1.216.364 1.891a7.977 7.977 0 0 1-.704 1.217c-.428.61-1.176.807-1.82.63l-1.102-.302c-.067-.019-.177-.011-.3.071a5.909 5.909 0 0 1-.668.386c-.133.066-.194.158-.211.224l-.29 1.106c-.168.646-.715 1.196-1.458 1.26a8.006 8.006 0 0 1-1.402 0c-.743-.064-1.289-.614-1.458-1.26l-.289-1.106c-.018-.066-.079-.158-.212-.224a5.738 5.738 0 0 1-.668-.386c-.123-.082-.233-.09-.299-.071l-1.103.303c-.644.176-1.392-.021-1.82-.63a8.12 8.12 0 0 1-.704-1.218c-.315-.675-.111-1.422.363-1.891l.815-.806c.05-.048.098-.147.088-.294a6.214 6.214 0 0 1 0-.772c.01-.147-.038-.246-.088-.294l-.815-.806C.635 6.045.431 5.298.746 4.623a7.92 7.92 0 0 1 .704-1.217c.428-.61 1.176-.807 1.82-.63l1.102.302c.067.019.177.011.3-.071.214-.143.437-.272.668-.386.133-.066.194-.158.211-.224l.29-1.106C6.009.645 6.556.095 7.299.03 7.53.01 7.764 0 8 0Zm-.571 1.525c-.036.003-.108.036-.137.146l-.289 1.105c-.147.561-.549.967-.998 1.189-.173.086-.34.183-.5.29-.417.278-.97.423-1.529.27l-1.103-.303c-.109-.03-.175.016-.195.045-.22.312-.412.644-.573.99-.014.031-.021.11.059.19l.815.806c.411.406.562.957.53 1.456a4.709 4.709 0 0 0 0 .582c.032.499-.119 1.05-.53 1.456l-.815.806c-.081.08-.073.159-.059.19.162.346.353.677.573.989.02.03.085.076.195.046l1.102-.303c.56-.153 1.113-.008 1.53.27.161.107.328.204.501.29.447.222.85.629.997 1.189l.289 1.105c.029.109.101.143.137.146a6.6 6.6 0 0 0 1.142 0c.036-.003.108-.036.137-.146l.289-1.105c.147-.561.549-.967.998-1.189.173-.086.34-.183.5-.29.417-.278.97-.423 1.529-.27l1.103.303c.109.029.175-.016.195-.045.22-.313.411-.644.573-.99.014-.031.021-.11-.059-.19l-.815-.806c-.411-.406-.562-.957-.53-1.456a4.709 4.709 0 0 0 0-.582c-.032-.499.119-1.05.53-1.456l.815-.806c.081-.08.073-.159.059-.19a6.464 6.464 0 0 0-.573-.989c-.02-.03-.085-.076-.195-.046l-1.102.303c-.56.153-1.113.008-1.53-.27a4.44 4.44 0 0 0-.501-.29c-.447-.222-.85-.629-.997-1.189l-.289-1.105c-.029-.11-.101-.143-.137-.146a6.6 6.6 0 0 0-1.142 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z"></path> </svg>`Settings` > <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-key-asterisk">    <path d="M0 2.75A2.75 2.75 0 0 1 2.75 0h10.5A2.75 2.75 0 0 1 16 2.75v10.5A2.75 2.75 0 0 1 13.25 16H2.75A2.75 2.75 0 0 1 0 13.25ZM2.75 1.5c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25V2.75c0-.69-.56-1.25-1.25-1.25Z"></path><path d="M8 4a.75.75 0 0 1 .75.75V6.7l1.69-.975a.75.75 0 0 1 .75 1.3L9.5 8l1.69.976a.75.75 0 0 1-.75 1.298L8.75 9.3v1.951a.75.75 0 0 1-1.5 0V9.299l-1.69.976a.75.75 0 0 1-.75-1.3L6.5 8l-1.69-.975a.75.75 0 0 1 .75-1.3l1.69.976V4.75A.75.75 0 0 1 8 4Z"></path></svg>`Secrets and variables` > `Actions` > `Repository secrets` or `Organization secrets`.) Furthermore, manually copy the workflow (.github/workflows/deploy-book.yml) in your own repository as the authorization doesn't work with the called workflow.

(gh-workflow-summary)=
## View the workflow progress and summary

Whenever the workflow is triggered, its progress and a summary can be seen under the <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-play UnderlineNav-octicon d-none d-sm-inline">    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>`Actions`- `All workflows` -  `call-deploy-book` in GitHub! It shows you a descriptive summary:
- Ill-defined repository configuration variables (in `Annotations`)
- Which branches are released and where (`https://<username/organization_name>.github.io/<repository_name>` (case sensitive)) including which branch is released on the website root and the applied alias
- Errors in the build process 
- How the repository variables are defined during the build.

Here's an example for a summary for the template book:

> ### Branches deployed
> | Branch 🎋 | Link 🔗 | Build status ☑️ |
> | :--- | :--- | :--- |
> | main | [https://teachbooks.github.io/template/main](https://teachbooks.github.io/template/main) | ✅ `Released` |
> | version2 | [https://teachbooks.github.io/template/version2](https://teachbooks.github.io/template/version2) | 🔴 `Build failed [1]` |
> | version3 | [https://teachbooks.github.io/template/version3](https://teachbooks.github.io/template/version3) | ⭕ `Build failed [2]` |
> 
> #### Legend for build status
> ✅ `Released` - build success, new version released.
>
> 🔴 `Build failed [1]` - build failure, previous version of the book reused.
>
> ⭕ `Build failed [2]` - build failure, no previous version reused.
>
> #### Primary book at root
> The book at the website root <https://teachbooks.github.io/template/> redirects to the primary branch `main` (status: ✅ `Released`).
> 
> ### Aliases
> | Alias ➡️ | Target 🎯 | Link 🔗 |  Build status ☑️ |
> | :--- | :--- | :--- | :---- |
> | draft | main | [https://teachbooks.github.io/template/draft](https://teachbooks.github.io/template/draft) | ✅ `Released` |
> 
> ### Preview of build errors & warnings
> For more details please see the corresponding `build-books` jobs in the left pane.
>
> On branch `version2`:
> ```
> �[91m/home/runner/work/template/template/book/some_content/overview.md:5: WARNING: Non-consecutive header level increase; H1 to H3 [myst.header]�[39;49;00m
> ``` 
>
> On branch `version3`:
> ```
> /home/runner/work/_temp/ff8c8325-8d8b-4c0b-a2b2-32d2169c55bc.sh: line 8: teachbooks: command not found
> ```
>
> ### Repository configuration variables
> Variables can be set at <https://github.com/TeachBooks/template/settings/variables/actions>
>
> ```
> PRIMARY_BRANCH=main (default value used)
> BRANCH_ALIASES=draft:main
> BRANCHES_TO_DEPLOY=* (default value used)
> BRANCHES_TO_PREPROCESS=main
> BEHAVIOR_PRIMARY=redirect (default value used)
> BRANCHES_ARCHIVED= (default value used)
> ```

(gh-caching)=
## Caching

The GitHub Action [Cache](https://github.com/actions/cache) is used in the Deploy Book Workflow (DBW) to save time when building the book. This is accompliched by caching two sets of files for each branch: 1) the Python virtual environment, and 2) the build artifact (the HTML files forming each book website).

The reason for doing this stems from the primary purpose of the Deploy Book Workflow, which builds many versions of a book based on each branch, as well as creating a Python virtual environment from the `requirements.txt` file in the repository. A unique environment for each branch is necessary to test changes to book dependencies and configuration in an isolated way, but can dramatically increase the time required to build all versions of the book when the DBW runs. In addition, it also takes time to build the book itself. For this reason, both of these sets of files are cached (although at the moment, most of the time savings is primarily caching the build artifact).

This works by hashing a specific set of files and including that in the filename of the cache. Every time the workflow is triggered, a new hashed filename is created and compared to the list of existing caches to see if one with the same name exists; if so, the cache is reused. If not, a new environment and/or build artifact is constructed and a new cache is made.

Cached files can be found in GitHub under the Actions tab, then looking for the "Caches" section under the "Management" pane on the left hand side of the screen. For example, this link shows the [caches for this TeachBooks Manual](https://github.com/TeachBooks/manual/actions/caches). If needed, caches can be deleted manually from this page. A cache will expire if unused for longer than 1 week or if the maximum allowed disk space for all cached files is exceeded (both are GitHub policies).

Files created during a GitHub Action are called [artifacts](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/storing-and-sharing-data-from-a-workflow). Although this is _not_ the same thing as a cache, the files in a specific cache or artifact are identical. Artifacts have their own expiration period, which is possible to [customize in the repository settings](https://docs.github.com/en/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization) (default is 90 days). Unexpired artifacts can be viewed at the bottom of any workflow run summary that is available on the Actions tab of a GitHub repository.

To add even more confusion to the situation, if an artifact built during an Action is a set of HTML files (a website) that are used to create a GitHub Pages website, the files served when visiting the URL for that are stored on a webserver; they are _not_ the artifact files, but are identical. Fortunately webserver files are preserved indefinitely (or until GitHub changes this policy), meaning that even though your cache or artifact may be deleted, the website will still remain active.

The cache is a key component of the DBW and leads to several considerations for the building and maintenance of a book, which are explained below, after the criteria for each cache type are described.

### Cached Environment

The DBW uses [Python virtual environments](https://docs.python.org/3/library/venv.html) (`python -m venv .venv`) and `python -m pip install -r requirements.txt` to install packages and create the book building environment. The entire `.venv` directory is preserved in the cache with a file name beginning with `venv-...`. The week number is also included in the file hash, which ensures that a new hash is created at least once per week.

Once created during a successful build action, an existing cached environment will be found and reused unless two specific criteria are met: 1) a book build is required (replacing the cached build artifact), _and_ 2) the `requirements.txt` file is changed. Requirements for a "book build" are described in the next section.

Note that any change to the `requirements.txt` file will trigger creation of a new environment, not necessarily one that specifies the version number of a package.

Note that Specifying package version numbers explicitly and updating them via [Dependabot](./update_env.md) is an excellent way to ensure that environments in the DBW are always up to date and this issue is avoided.

If you are _not_ using Dependabot and are not able to get your packages updated when the DBW is running, delete the cache manually and rerun your GitHub Actions job (go to Actions tab, then looking for the "Caches" section under the "Management" pane on the left hand side of the screen).

### Cached Build Artifacts

Build artifacts are the HTML files that define the website (i.e., the book) and are typically located in the subdirectory `book/_build/html` of a repository once the book is built. Note that these files are typically only visible if you are building the book locally, as they are not committed to the repository by default (i.e., `.gitignore`). For users only using the DBW and the GitHub browswer editor, downloading the build cache is the easiest way to view these files, which have filenames beginnig with `html-build-<branch-name>-...`.

Once created during a successful build action, an existing cached build artifact will be found and reused unless _any_ of three specific criteria are met: 1) a change is made to a file in `book/`, 2) the `requirements.txt` file is changed, or 3) the status of a branch as archive or preprocess has changed (`BRANCHES_TO_PREPROCESS` of `BRANCHES_ARCHIVED`).

Immediately after a successful build action, the book website files exist in three places: cache, artifact and on a GitHub webserver. However, as described at the beginning of this section, the cache will be automatically deleted after 1 week, if unused, and the artifact will be deleted based on the setting in your repository (90 days by default). 

### Effect of Caching on Book Workflow

Implementation of the DBW has several characteristics that should be noted which could help understand certain behaviors of the book build and website deployment process. These points may be useful to consider if you are experiencing undesired behavior in your Actions builds and/or your actual book websites.

- Remember that the DBW action will only run if a commit is made that changes `requirements.txt` or contents of `book/`
- When first creating a repository, the action may not run, or may run and fail; occasionally it is needed to make a new commit to get the workflow to run for the first time (remember to modify something in `book/`) or you may try to re-run the job from the Actions tab
- when using multiple branches, only the branch that is edited will be updated
- the website for each branch may be built with a different Python environments (different package versions)

Unlike the virtual environments (next subsection), caches of the book build do not influence subsequent builds of the book, as this artifact is replaced whenever a commit to a specific branch triggers a new build process. As described above, old cached build artifacts are used if the build process from a new commit fails, ensuring that the URL of a website does not return a 404 page.

### Effect of Caching on Virtual Environment

In particular, note that older branches may have been built with cached environments that are different than those in a newer branch, leading to (undesired) differences in book appearance or functionality---often without the author being aware! This occurs if a package in `requirements.txt` is updated in the time between the creation of environments on different branches, as `pip` will use the newest version when downloading a package (the first time a venv cache is created in the DBW), but it will not always automatically update a package if `pip install -r requirements.txt` is used on an existing environment (this happens every time an existing cache is used!). This means that, when compared to the venv on a newer branch, a frequently used branch (where the cache has not expired) may retain old and out of date packages long after an updated version is available; however, since the week number is included in the venv file hash, this will last for a maximum of 1 week. A best practice to avoid this situation is to pin version numbers explicitly (e.g., `teachbooks==0.2.0`) if you want book builds to remain consistent. In addition, a feature like dependabot can be used to automatically notify you when an update is made; this is [here](./update_env.md).
