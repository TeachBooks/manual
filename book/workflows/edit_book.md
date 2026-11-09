# Edit (merge conflicts, staging, committing, pushing)

Suppose we are writing a new chapter, or are updating an existing chapter for our TeachBook. We've created a new branch on which we are going to make the changes.

**Edit files as ...**
`````````{tab-set}
````````{tab-item} ... user type 3 ... 

**... by directly adding changes on a single file to the Git-timeline (committing) in ...**

```````{tab-set}
``````{tab-item} ... GitHub... 

`````{tab-set}
````{tab-item} ... using 'Edit in place'

How to make an edit and make a commit is demonstrated in the gif below. <br> Don't worry if the steps are too fast, all steps are elaborated on in the following step-by-step tutorial.
 
```{figure} figures/user3-collaboration.gif
---
name: user3_edit_demo
---
Demonstration, video available [here](https://youtu.be/LG1vzrOLQHA)
```

In GitHub, you can directly make changes in the files on the remote repository. You can make changes to the files already in the repository using the text editor but you can also upload new files!

1. Navigate to the repository you want to work in and make sure you're in the correct branch.

2. Create a new file by clicking on the button called `Add file` in the top bar. You can either create an entirely new file by clicking `Create new File` or if you already have created a file you can upload it by clicking `Upload files`.

```{figure} figures/HubUser3_NewFile.PNG
---
width: 80%
align: center
---
Create new file
```

3. In the new window, you can start typing your content. Give your file a name and make sure to use the markdown extension: `file_name.md`. Once you are done, commit the new file to the repository by clicking the green button `Commit changes`.

```{figure} figures/HubUser3_NewFile2.PNG
---
width: 80%
align: center
---
Edit new file
```

4. In case you want to make changes to an existing file, navigate to the file in your remote repository. Then click the downward pointing arrow on the very left in the top bar. Select the option `Edit in place`.

```{figure} figures/HubUser3_EditFile.PNG
---
width: 80%
align: center
---
Edit in place
```

5. Make your changes in the text editor and when you are ready, commit your changes to the remote repository by clicking on the green `Commit changes` button.

```{figure} figures/HubUser3_EditFile2.PNG
---
width: 80%
align: center
---
Commit changes
```

6. In case you added a new file, you also need to include it table of contents of your book! The table of contents is specified in a file called `toc.yml` and it is already included in your repository if you used the teachbooks template. You can edit it and commit the changes in the same manner as with markdown `(file.md)` files.

```{figure} figures/HubUser3_toc.PNG
---
width: 80%
align: center
---
Table of contents
```
````

````{tab-item} ... using 'VS Code in your browser'

Using this feature, you can open VS Code in your browser and edit the files in your repository. By doing this, you completely by-pass the need to open (and install) VS Code and GitHub Desktop on your laptop making it the optimal way to quickly fix something. You can make changes to the files already in the repository but you can also upload new files!

```{include} github_dev.md
```

````
`````
``````
``````{tab-item} ... GitLab

In GitLab, you can directly make changes in the files on the remote repository. You can make changes to the files already in the repository using the text editor but you can also upload new files!

1. Navigate to the repository you want to work in and make sure you're in the correct branch.

2. Create a new file by clicking on the plus button in the top bar. You can either create an entirely new file by clicking `New File` or if you already have created a file you can upload it by clicking `Upload File`.

```{figure} figures/User3_NewFile.PNG
---
width: 60%
align: center
---
Create new file
```

3. In the new window, you can start typing your content. Give your file a name and make sure to use the markdown extension: `Chapter1.md`. Once you are done, commit the new file to the repository by clicking the blue button `Commit changes`.

```{figure} figures/User3_NewFile2.PNG
---
align: center
---
Edit new file
```

4. In case you want to make changes to an existing file, navigate to the file in your remote repository. Then click the blue button called `Edit` and select the option `Edit single file`.

```{figure} figures/User3_EditFile.PNG
---
align: center
---
Web Editor
```

5. Make your changes in the text editor and when you are ready, commit your changes to the remote repository by clicking on the blue `Commit changes` button.

```{figure} figures/User3_NewFile2.PNG
---
align: center
---
Commit changes
```

6. In case you added a new file, you also need to include it table of contents of your book! The table of contents is specified in a file called `toc.yml` and it is already included in your repository if you used the teachbooks template. You can edit it and commit the changes in the same manner as you did with markdown `file.md` files.

```{figure} figures/User3_toc.PNG
---
align: center
---
Table of contents (TOC)
```

``````
```````
````````

````````{tab-item} ... user type 4 ...

```````{tab-set}
``````{tab-item} ... for a brand new version (branch)...

**... by (a) making changes on a single or multiple file(s) <br> 
         (b) selecting changes to be added to the Git-timeline (staging) <br>
         (c) adding changes to the Git-timeline (committing) and <br>
         (d) adding changes to GitHub/GitLab (pushing) with ...**

`````{tab-set}
````{tab-item} ... Git in VS Code

How to make an edit and make a commit using VS Code is demonstrated in the figure below, all steps are elaborated on in the following step-by-step tutorial.
 
```{figure} figures/User4_updated-ezgif.com-optimize.gif
---
name: user4_clone_edit_demo
---
Demonstration, video available [here](https://youtu.be/bThimdDRXTc)
```

**Make some changes to a file in for example VS Code and save them**

```{include} stage_commit_push_vscode.md
```

````
````{tab-item} ... GitHub Desktop

**Make some changes to a file in for example VS Code and save them**

```{include} stage_commit_push_github_desktop.md
```

````
`````
``````

``````{tab-item} ... for an existing version (branch)...

**... by (a) regularly obtaining updates from colleagues from GitHub/GitLab (pulling), <br>
         (b) solving potential incompatible changes (merging conflicts), <br>
         (c) making changes on a single / multiple file(s), <br>
         (d) selecting changes to be added to the Git-timeline (staging), <br>
         (e) adding those to the Git-timeline (committing) and <br>
         (f) adding changes to GitHub/GitLab (pushing) with ...**

`````{tab-set}
````{tab-item} ... Git in VS Code

**Regularly obtain updates from colleagues from GitHub/GitLab (pulling)**

If you collaborate with colleagues on your branch, you can get the updates from your colleagues as well by pulling from GitHub/GitLab. This synchronizes the remote repository with your local repository on your machine. On the left side-bar click on the icon that looks like a branch. 

<figure align="center">
    <img src="figures/VSCode_Pull.PNG" alt="Example Image" width="400">
</figure>

By clicking on the 🔄 button, you will pull your colleages' changes.

**Solving potential incompatible changes (merging conflicts)**

When multiple people work on one chapter, it is possible that conflicts will arise if you and your colleagues have made incompatible changes in the same branch. In that case, when pulling from the remote repository, Git in VS Code will recognize conflicts and help you to solve potential incompatible changes (merging conflicts). Open the files that are marked as conflicitng. 

<figure align="center">
    <img src="figures/Conflicts2.PNG" alt="Example Image" width="650">
</figure>

The figure above shows the conflicts. If you look closely you can see that the last couple of words of the paragraph are different in the main branch than in the branch we were working in. There are a couple of options in the top bar: 

- `Accept Current Change` will keep the change in your branch
- `Accept Incoming Change` will keep the change from the main branch (the branch you are merging into your branch)
- `Accept Both Changes` will retain both paragraphs

Choose one of the options to resolve the merge conflict. You now have updated your work with work from your colleagues and resolved potential conlicts. You are now ready to continue working on the content.

**Make some further changes to a file in for example VS Code and save them**

```{include} stage_commit_push_vscode.md
```

````
````{tab-item} ... GitHub Desktop

**Regularly obtain updates from colleagues from GitHub/GitLab (pulling)**

If you collaborate with colleagues on your branch, you can get the updates from your colleagues as well by pulling from GitHub/GitLab. This synchronizes the remote repository with your local repository on your machine. Click on `Fetch` in the top bar. Then on the same place, click on 'Pull'. 

<figure align="center">
    <img src="figures/Fetch.PNG" alt="Example Image" width="650">
</figure>

**Solving potential incompatible changes (merging conflicts)**

When multiple people work on one chapter, it is possible that conflicts will arise if you and your colleagues have made incompatible changes in the same branch. In that case, when pulling from the remote repository, GitHub Desktop will recognize conflicts and help you to solve potential incompatible changes (merging conflicts). 

<figure align="center">
    <img src="figures/Conflicts1.PNG" alt="Example Image" width="450">
</figure>

In this case there are two conflicted files. GitHub Desktop is suggesting to resolve the changes in VS Code (in that case have a look at the section treating VS Code). By clicking on the small downwards arrow you can also solve the conflict directly in GitHub Desktop by choosing the branch of the file you want to keep.

<figure align="center">
    <img src="figures/Conflicts2.PNG" alt="Example Image" width="650">
</figure>

The figure above shows the conflicts. If you look closely you can see that the last couple of words of the paragraph are different in the main branch than in the branch we were working in. There are a couple of options in the top bar: 

- `Accept Current Change` will keep the change in your branch
- `Accept Incoming Change` will keep the change from the main branch (the branch you are merging into your branch)
- `Accept Both Changes` will retain both paragraphs

Choose one of the options to resolve the merge conflict. You now have updated your work with work from your colleagues and resolved potential conlicts. You are now ready to continue working on the content.

**Make some further changes to a file in for example VS Code and save them**

```{include} stage_commit_push_github_desktop.md
```

````
````{tab-item} ... using 'VS Code in your browser'

Using this feature, you can open VS Code in your browser and edit the files in your repository. This can be really useful for **quick fixes** when you dont want to launch GitHub Dekstop or VS Code. However, we would recommend to limit the use of this feature to quick changes as the other workflows allow for more complex tasks.

```{include} github_dev.md
```

````
`````
``````
```````
````````

````````{tab-item} ... user type 5 ...

```````{tab-set}
``````{tab-item} ... for brand new version (branch)

**... by (a) making changes on a single or multiple file(s) <br> 
         (b) checking changes locally <br>
         (c) selecting changes to be added to the Git-timeline (staging) <br>
         (d) adding changes to the Git-timeline (committing) and <br>
         (e) adding changes to GitHub/GitLab (pushing) with ...**

`````{tab-set}
````{tab-item} ... Git in VS Code

The steps above are demonstrated in the figure below, all steps are elaborated on in the following step-by-step tutorial.
 
```{figure} figures/User5_wholeshabang-ezgif.com-optimize.gif
---
name: user5_demo
---
Demonstration, video available [here](https://youtu.be/2ttjBevkEP8)
```

**Make some changes to a file in for example VS Code and save them**

```{include} user45_check_changes.md
```

```{include} stage_commit_push_vscode.md
```

````
````{tab-item} ... GitHub Desktop

**Make some changes to a file in for example VS Code and save them**

```{include} user45_check_changes.md
```

```{include} stage_commit_push_github_desktop.md
```

````
`````
``````

``````{tab-item} ... for an existing version (branch)

**... by (a) regularly obtaining updates from colleagues from GitHub/GitLab (pulling), <br>
         (b) solving potential incompatible changes (merging conflicts), <br>
         (c) making changes on a single / multiple file(s), <br>
         (d) checking changes locally, <br>
         (e) selecting changes to be added to the Git-timeline (staging), <br>
         (f) adding those to the Git-timeline (committing) and <br>
         (g) adding changes to GitHub/GitLab (pushing) with ...**

`````{tab-set}
````{tab-item} ... Git in VS Code

**Regularly obtain updates from colleagues from GitHub/GitLab (pulling)**

If you collaborate with colleagues on your branch, you can get the updates from your colleagues as well by pulling from GitHub/GitLab. This synchronizes the remote repository with your local repository on your machine. On the left side-bar click on the icon that looks like a branch. 

<figure align="center">
    <img src="figures/VSCode_Pull.PNG" alt="Example Image" width="400">
</figure>

By clicking on the 🔄 button, you will pull your colleages' changes.

**Solve potential incompatible changes (merging conflicts)**

When multiple people work on one chapter, it is possible that conflicts will arise if you and your colleagues have made incompatible changes in the same branch. In that case, when pulling from the remote repository, Git in VS Code will recognize conflicts and help you to solve potential incompatible changes (merging conflicts). Open the files that are marked as conflicitng. 

<figure align="center">
    <img src="figures/Conflicts2.PNG" alt="Example Image" width="600">
</figure>

The figure above shows the conflicts. If you look closely you can see that the last couple of words of the paragraph are different in the main branch than in the branch we were working in. There are a couple of options in the top bar: 

- `Accept Current Change` will keep the change in your branch
- `Accept Incoming Change` will keep the change from the main branch (the branch you are merging into your branch)
- `Accept Both Changes` will retain both paragraphs

Choose one of the options to resolve the merge conflict. You now have updated your work with work from your colleagues and resolved potential conlicts. You are now ready to continue working on the content.

**Make some further changes to a file in for example VS Code and save them**

```{include} user45_check_changes.md
```

```{include} stage_commit_push_vscode.md
```

````
````{tab-item} ... GitHub Desktop

**Regularly obtain updates from colleagues from GitHub/GitLab (pulling)**

If you collaborate with colleagues on your branch, you can get the updates from your colleagues as well by pulling from GitHub/GitLab. This synchronizes the remote repository with your local repository on your machine. Click on `Fetch` in the top bar. Then on the same place, click on 'Pull'. 

<figure align="center">
    <img src="figures/Fetch.PNG" alt="Example Image" width="650">
</figure>

**Solve potential incompatible changes (merging conflicts)**

When multiple people work on one chapter, it is possible that conflicts will arise if you and your colleagues have made incompatible changes in the same branch. In that case, when pulling from the remote repository, GitHub Desktop will recognize conflicts and help you to solve potential incompatible changes (merging conflicts). 

<figure align="center">
    <img src="figures/Merge_Conflict_GitHubDesktop2.PNG" alt="Example Image" width="400">
</figure>

In this case there are two conflicted files. GitHub Desktop is suggesting to resolve the changes in VS Code (in that case have a look at the section treating VS Code). By clicking on the small downwards arrow you can also solve the conflict directly in GitHub Desktop by choosing the branch of the file you want to keep.

Choose one of the options to resolve the merge conflict. You now have updated your work with work from your colleagues and resolved potential conlicts. You are now ready to continue working on the content.

**Make some further changes to a file in for example VS Code and save them**

```{include} user45_check_changes.md
```

```{include} stage_commit_push_github_desktop.md
```

````
````{tab-item} ... using 'VS Code in your browser'

Using this feature, you can open VS Code in your browser and edit the files in your repository. This can be really useful for **quick fixes** when you dont want to launch GitHub Dekstop or VS Code. However, we would recommend to limit the use of this feature to quick changes as the other workflows allow for more complex tasks.

```{include} github_dev.md
```

````
`````
``````
```````
````````
`````````
