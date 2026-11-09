````{margin}
```{admonition} User types
:class: tip
This page is useful for user type 3-5.
```
````

# Collaboration tool: Git

You will need to interact with Git to collaborate on a TeachBook, even if you are working by yourself! You've been introduced to it in the [exercises in the template](../intro/template.md) and you'll be guided through all of the steps in detail in [](../workflows/collaboration.md), but what is this "thing" that sounds suspiciously like something only a computer scientist would want to use?

```{tip}

Perhaps you are wondering: _Why a new tool? Why not something I already know like Microsoft Word and Track Changes? Or something like OneDrive or Dropbox?_

- Git is 100% free, and online tools like GitHub extend this functionality for free.
- Git is explicitly designed for text-based files, which is how the content of a TeachBook is written.
- You will never have to work with many versions of the same file again (e.g., no more "My_Doc_FINAL_v3_RL_again_final.docx"!).
- Online tools like GitHub provide an easy way to backup your work _and_ to allow others to see it.
- Online tools like GitHub also provide a great way to collaborate, for example: discuss changes to your content, allow others to make suggestions for improvement and fix software issues.
- Online tools like Zenodo allow for long term (decades!) preservation of your work and the ability to update your work with version numbers, dates and DOI's.

We don't deny that it can take some time to get familiar to the new terminology and workflow associated with Git, and even longer to feel comfortable with it. However, we _promise_ that if you dedicate a little bit of time to learning about this tool it will make your new life creating online interactive textbooks much easier and more enjoyable.

```

## What is Git?

Git is a version control system (VCS), used by a wide variety of engineers and software developers to work on projects in parallel together. It provides multiple benefits such as tracking changes to files, working side by side with other people, and the ability to rollback to previous versions of files without losing track of newer changes. It is a free and open sources software. It is especially useful for TeachBooks because it is explicitly designed to handle text-based files, which are essential for writing the contents of a book. 

### What is GitHub?

GitHub is a software service that is accessed primarily via a web browser at `github.com`; since 2018 it is owned by Microsoft. It is the most well-known cloud-based Git provider and provides a lot of functionalities for free for open source projects, and even more free services for education. Via a service called GitHub Pages, it also allows you to host websites on `github.io` for free eliminating the need for your own web server (however, you don't have full control over the server setup and operation).

For new TeachBooks users, we advise you to use GitHub. In addition, we recommend you start by making all of your respositories public (unless they contain sensitive information); this will make it easier for others to collaborate with and help you if you get stuck!

### What is GitLab?

GitLab is a cloud-based version control system built around Git; it is a competitor of GitHub, as the two provide many of the same services (but note the names of things can differ, for example, a _Pull Request_ on GitHub is a _Merge Request_ on GitLab). GitLab provides a lot more features to extent Git such as Issues, Merge Requests, CI/CD pipelines, etc.

For TU Delft employees: TU Delft has a license to use GitLab on our own local webservers---this means that all of the files are stored digitally on the TU Delft campus, rather than some unkown webserver that could be physically located in an undesirable (physical) location. This is also why we have our “own” GitLab located at `gitlab.tudelft.nl`, rather than the “normal” GitLab at `gitlab.com`. One reason we don't recommend beginning TeachBooks users at TU Delft start with the TU Delft GitLab is that it does not have an automatic website hosting service set up; instead, it must be manually set up on a TU Delft web server (this is straightforward to do, for example, by BSc students from the Computer Science faculty). GitHub Pages provides this service for free and has proven to be very reliable, so start there!

### Additional lessons

Software carpentry offers git-lessons if you'd like to learn more than just it's specific use for TeachBooks. The lessons are available [online](https://swcarpentry.github.io/git-novice/) and TU Delft offers these as part of a [Software Carpentry workshop](https://www.tudelft.nl/library/research-data-management/r/training-evenementen/training-voor-onderzoekers/software-carpentry-workshops)
