````{margin}
```{admonition} User types
:class: tip
This page is useful for user type 4-5.
```
````

# Which git provider to choose

The setup of tools and URLs is dependent on agreements you've made on [collaboration](./collab.md).

Choosing between GitHub and GitLab depends on multiple criteria. GitHub provides more functionalities, but you might prefer the TU Delft(-closed) GitLab system if you're a TU Delft employee.

## Account
GitHub is owned by Microsoft and anyone can make an account. This allows anyone to interact with the source code of your book by posting issues, forking (duplicating while allowing to sync) your book and suggesting changes with pull requests.

For the TU-Delft closed GitLab system, only TU Delft account holders can interact with the source code your book, making it not as open as GitHub: collaboration and reuse is only possible with manual exports of the source code. Individual external accounts can be requested for.

## Book URL
Github allows you to host your book on the GitHub server using GitHub pages (to be recognized by the `<organization/username>.github.io/<book>` url, for example the [template book](https://teachbooks.github.io/template/)), which takes all the steps of hosting out of your hands. Next to GitHub-provided URLs, you can set up a custom owned URL, although this requires some additional skills on a domain which you should own. 

If you're part of TU Delft, you can put your book in the [TUDelft-Book organisation](https://github.com/tudelft-books), which allows you to host your book at `oit.tudelft.nl/<book>`. If you've a private book which is part of the [GitHub Enterprise TU Delft](https://github.com/enterprises/tudelft) and is using SSO, a random url is generated `<random>.github.io/<book>`. For courses we advise you to create an organization with the course name so that the URL represent that course.

On TU Delft's GitLab you need a webserver, which was offered by TeachBooks in the past (to be recognized by the url `teachbooks.tudelft.nl/<book>`), and is still offered by the TU Delft OIT team (to be recognized by the url `interactivetextbooks.tudelft.nl/<book>`).

## Real-time editing book
Editing the book can be done both locally and online on GitHub/GitLab. If done locally, the book can be generated and viewed locally too (typically takes around 1 minute) but this requires you to be at least user type 4 or 5 depending on the book content. The built book can also be viewed online separate from the released version.

On GitHub we developed an [automatic process which builds the book and publishes it online](../external/deploy-book-workflow/README.md) in a very flexible way (publication of multiple version of the book, insights in book building errors, parallel so fast build, custom urls in subdirectories). For a private repository, there is an extensive but limited amount of actions-minutes required for publishing your book. If this proves to be a limit, consider applying for [Teacher benefits](https://docs.github.com/en/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-education-for-teachers/about-github-education-for-teachers#github-education-features-for-teachers) or joining the [GitHub Enterprise of TU Delft](https://github.com/enterprises/tudelft).

For GitLab a webserver is required, if GitLab pages is not enabled, to process book-changes online. Both we and other people at TU Delft have a simplistic workflow which can be used when you're set up on those Git environments and webservers. This simplistic workflow doesn't build all branches, is not easily adaptable, doesn't cache environments, doesn't give a visual summary, and doesn't allow for parallel processes (for every build a runner needs to be assigned for which there's typically only one available). If you want to use GitLab but still want to make use of the GitHub workflow, you can [mirror your repository to GitHub](https://docs.gitlab.com/ee/user/project/repository/mirror/push.html#set-up-a-push-mirror-from-gitlab-to-github). For the TU Delft OIT webserver you’re required to publish your book more officially, it cannot be used for viewing your book online in an active editing-phase since constant copyright checks have to be performed. The amount of computing power available is dependent on how you set the server yourself.

## Setting up book repository and website
On GitHub you can start right away with a git environment and online book using our [template](../external/template/README.md) without the need for any webserver setup!

On GitLab you can set up your own git environment, but you need to be given access by [TU Delft OIT](mailto:Interactive-textbooks@tudelft.nl) to view your build book online if you don't have your own webserver-setup.

## Book access with SSO
When you’re releasing your book on a server on which you're in control (connected to GitLab or GitHub), you can set up SSO login for visitors of the website. In the past, this was arranged for for TU Delft employees at teachbooks.tudelft.nl. However, this is depreciated.

If you want the same functionality with GitHub pages, your book should be part of the [GitHub Enterprise of TU Delft](https://github.com/enterprises/tudelft). This SSO login is a bit different as you're required to give access to specific accounts. Furthermore, the url of you're book on GitHub pages is a random one, so you might consider using a custom URL.

## Access to source code

Both GitLab and GitHub allow for extensive options for visibility of the source code, both private, public or internally. On GitHub, public allows for collaboration with anyone. For SSO login, your book should be part of the [GitHub Enterprise of TU Delft](https://github.com/enterprises/tudelft). If you'd like a private repo on GitHub, apply for a GitHub Team (free as a teacher as described in the [github documentation](https://docs.github.com/en/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-education-for-teachers/about-github-education-for-teachers#github-education-features-for-teachers)) to make use of GitHub pages (for public repos GitHub pages is not restricted).

The TU Delft GitLab requires SSO login for editing the book. Although this is useful for TU Delft employees, it limits the collaboration with people outside of TU Delft.

## Book size limits
In GitLab, an artifact (the book export) can have a maximum size of 150 MB. In GitHub, the total GitHub pages may not exceed 1 GB (including all branches)

## Integration with GitHub Desktop
GitHub has a nice integration with the [GitHub Desktop application](git-setup_local.md). For GitLab it works as well, but has less functionality.

## Intergration with Utteranc.es
[Utteranc.es](../basic-features/utterances.md) requires a GitHub repository to host the discussions. If you're using a GitLab repository, you need a separate GitHub repository and the discussions and book content is not at the same place.

## Summary
Here's a table summarizing the information:
|  | GitHub   | TU Delft GitLab      |
|--|----------|-------------|
| Account | Free GitHub account (owned by Microsoft) 🤝 | Closed, TU Delft account 🔒 |
| Book url  | GitHub pages (`<organization/username>.github.io/<book>`), for TU Delft books a custom URL (`oit.tudelft.nl/<book>`), for private books on TU Delft GitHub Enterprise with SSO a random URL (`<random>.github.io/<book>`), or custom url `<anything>.<anything>/<book>`> 🌐         | TU Delft OIT (`interactivetextbooks.tudelft.nl/<book>`) 🎓 |
| Real-time book editing | Automated and flexible (multiple version of the book, building error insights, fast, custom urls)  with [DBW](../external/deploy-book-workflow/README.md) 🚀   | Some automated scripts exist, but simplistic (not easily adaptable, no caching environments, no visual summaries, no parallel processes) 🛵 For TU Delft OIT: restricted adaptations because of copyright checks 🚫   |
| Setting up book website | Immediate and automated with [template](../external/template/README.md) ⚡️         | Manual setup on personal webserver, or access required by TeachBooks or TU Delft OIT  🚧    |
| Book access with SSO | Only available for GitHub pages on GitHub Enterprise of TU Delft 🎓, optional with custom URL  ✅ | Optional  ✅  |
| Access to source code | Private (if part of organization linked to educational account) /public / internally TU Delft (on GitHub Enterprise of TU Delft) 👥   | Private / public (read-only) / internally TU Delft, editing requires requires SSO login  👥  👀 |
| Book size limits | 1 GB for all branches 📚 | 150 MB per book 📕 |
| GitHub Desktop | Well integrated 😎 | Basic integration 🙂 |
| Utteranc.es | Can be linked to same repository 🏷️ | Requires GitHub repository next to GitLab repository 🏷️🏷️|

If you have doubt about this choice, we advise you to start on GitHub. Moving/duplicating your content to GitLab or hosting to a custom URL is always possible at a later stage.
