# User types

Different types of users will interact with the website or the TeachBooks differently and will therefore need to know more or less about the composition of the book. For now we will differentiate 5 types of users.

## User type 1: Students providing feedback via the book website

```{figure} figures/TB_user1.png
---
name: usertype1
width: 300px
align: center
class: dark-light
---

```

There are multiple tools of providing feedback in the built book:

1. using the issue button in the top-right corner to directly create issues visible to the editor team.
2. Using the [hypothesis](../basic-features/hypothesis.md)-extension which allows public/private highlighting and annotating parts of the book.
3. Using the [Utterances](../basic-features/utterances.md)-extension which allows commenting on pages for books which are hosted on GitHub visible for everyone. Those comments are converted to issues on GitHub for the editors to handle.

## User type 2: Colleague providing feedback on a draft website

```{figure} figures/TB_user2.png
---
name: usertype2
width: 300px
align: center
class: dark-light
---

```

In a similar manner as students, colleagues and team members can leave content-related comments on the website through extensions or GitHub/GitLab features (e.g., Issues). In this way, multiple teachers can give input in the draft of the textbook and course material without requiring a complete understanding of TeachBooks or GitLab/GitHub. The responsible teacher (or student assistants) can then make adaptations to the book as recommended by their colleagues.

## User type 3: Colleague making adjustments via the browser

```{figure} figures/TB_user3.png
---
name: usertype3
width: 300px
align: center
class: dark-light
---

```

This type of user requires only very basic knowledge in GitLab/GitHub in order to make changes to the website themselves. Most importantly, there is no need to install any software! Making adjustments to a file only requires the user to be able to login into GitLab/GitHub and edit .md or .ipynb files. The changes can be done directly in an existing branch, or, if unsure, a new branch can be used for the changes then the set-up and merging can be completed by someone more familiar with GitLab/GitHub. Files can be edited individually or many-at-a-time using the VS Code-style browser application.

## User type 4: Colleague making adjustments locally

```{figure} figures/TB_user4.png
---
name: usertype4
width: 300px
align: center
class: dark-light
---

```

User 4 is a hybrid between type 3 and 5. Basically this user is making changes by editing the .md files locally using, for example, VS Code. Therefore, this user requires a little bit more knowledge on git (think of pulling and pushing changes) but their main focus remains to make adjustments to the content of the book by editing .md files whereas user type 5 has more knowledge to make changes to python files the book as well. This user can build the book online and therefore does not need to have special software installed besides a text editor (e.g., Python is not required). Using this skills, this user type can take the role as editor, managing more than just book content.

## User type 5: Colleague making adjustments and incorporating them in the book locally

```{figure} figures/TB_user5.png
---
name: usertype5
width: 300px
align: center
class: dark-light
---

```

This user has more knowledge in GitLab/GitHub than the previous user and can take care of branching and merging directly. They know how to work with software for editing .md and .ipynb files. They can use the Deploy Book Workflow online to view their changes in the book and coordinate peer review, and/or build the book locally. This user can easily take the role as editor, and might even add additional features to the book. If you do so, please share those on the [TeachBooks-community](https://github.com/teachbooks) so that other people can benefit and contribute to your tooling.

```{Note}

At this point, you might already be trying to see which user type fits you the best. We are aware that the lines between user types can be a bit blurry, especially between type 3, 4 and 5. If you've no experience in git and programming, we advise you to start as user type 3, if you're a bit more experienced you can consider skipping that step. In case you're (1) a user type 3 and want to dabble in git or (2) a user type 4/5 and want to make some quick edits with only a few clicks, then you might consider using a more advanced online editor in GitHub (GitHub Dev) as explained further on in [Collaborative book-editing > Edit](../workflows/edit_book.md) > User type 3 > GitHub > Using VS Code in your browser.
```
