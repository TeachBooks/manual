````{margin}
```{admonition} User types
:class: tip
This page is useful for user type 3, 4 and 5.
```
````

# Collaborative book-editing

A TeachBook is composed out of many files which contain the educational content produced by you. Through the use of branches it is possible to work on the book at the same time as your team-members. Working on content for the book is mainly individual work, the beauty of Git comes in when everybody's changes are merged into the main branch.

We have previously introduced the notions of using Git in the online environment (remote) or locally. All the (text, figures, etc.) files that make up the book are contained on the remote repository on GitLab or GitHub. This could be on an open repository on `gitlab.com` or `github.com`. In the context of creating educational books for students at TU Delft, the repository will most likely be located on `github.com` or `gitlab.tudelft.nl`. If this is the first time you interact with books, you're advise to use `github.com`.

The steps involved are as follows:

 1. **Assign a task to yourself (milestones, issues)**
 2. **Create your own version of the book as...**
```````{tab-set}
``````{tab-item} ... user type 3 ...

**... by creating your own version of the book (branching) or selecting existing version:**

 - branching
``````
``````{tab-item} ... user type 4 and 5.

`````{tab-set}
````{tab-item} Open repository for first time...

**... by <br>
(a) creating your own version (branching)
(b) opening the repository locally (cloning) and selecting correct version (checkout branch):**<br>

 - branching
 - cloning
 - checkout branch
````
````{tab-item} Work in previously opened repository...

**... by <br>
(a) creating your own version (branching) <br>
(b) updating your repository (pulling) and select correct version (checkout branch):**
 
 - branching
 - pulling
 - branching / checkout branch
````
`````
``````
```````
 3. **Edit the book as ...**

```````{tab-set}
``````{tab-item} ... user type 3 ... 

**... by directly adding changes on a single file to Git-timeline (committing):**

 - adding file or making changes to single file
 - committing
``````
``````{tab-item} ... user type 4 ...

`````{tab-set}
````{tab-item} ... on a brand new version (branch)...

**... by <br>
(a) making changes on a single / multiple file(s), <br>
(b) selecting changes to be added to the Git-timeline (staging), <br>
(c) adding those to the Git-timeline (committing) and <br>
(d) adding those changes to GitLab/GitHub (pushing):**

- adding or making changes to file(s)
- staging
- committing
- pushing
````
````{tab-item} ... on an existing version (branch)...

**... by <br>
(a) regularly obtaining updates from colleagues from GitLab/GitHub (pulling), <br>
(b) solving potential incompatible changes (merge conflicts), <br>
(c) making changes on a single / multiple file(s), <br>
(d) selecting changes to be added to the Git-timeline (staging), <br>
(e) adding those to the Git-timeline (committing) and adding those changes to GitLab/GitHub (pushing):**

- pulling
- solving merge conflicts
- adding or making changes to file(s)
- staging
- committing
- pushing
````
`````
``````
``````{tab-item} ... user type 5 ...
`````{tab-set}
````{tab-item} ... on a brand new version (branch)...

**... by <br>
(a) making changes on a single / multiple file(s), <br>
(b) checking changes locally, <br>
(c) selecting changes to be added to the Git-timeline (staging), <br>
(d) adding those to the Git-timeline (committing) and <br>
(e) adding those changes to GitLab/GitHub (pushing):**

- adding or making changes to file(s)
- checking changes locally 
- staging
- committing
- pushing
````
````{tab-item} ... on an existing version (branch)...

**... by <br>
(a) regularly obtaining updates from colleagues from GitLab/GitHub (pulling), <br>
(b) solving potential incompatible changes (merge conflicts), <br>
(c) making changes on a single / multiple file(s), <br>
(d) checking changes locally,  <br>
(e) selecting changes to be added to the Git-timeline (staging), <br>
(f) adding those to the Git-timeline (committing) and <br>
(g) adding those changes to GitLab/GitHub (pushing):**

- pulling
- solving merge conflicts
- adding or making changes to file(s)
- checking changes locally 
- staging
- committing
- pushing
````
``````
```````
 4. **Check changes online**
 5. **Repeat steps 3 and 4 until you're satisfied**
 6. **Reviewing (merge request), (eventually repeat steps 3 and 4) and combine (merging) your version with main draft version of book**
