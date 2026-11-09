# How can you do it?

The fun part is the collaborative aspect of TeachBooks! Because all the files are text-based, they're well suited for using git. That allows us to use the version-control principles of git to its best!

Assuming you have a book (well make that happen soon!) and you're ready to collaborate, the process is as follows:

## 1 get an idea
```{figure} figures/idea.png
---
width: 70px
align: right
```
You have an idea to improve a book or add some content! Let's make that happen! Share you idea with the book-authors to let them know you're starting something! Maybe someone else has some ideas on it as well. Later on, you can use GitHub `Issues`, `Projects` and `Milestones` to keep track of this.

## 2 create your version of the book
```{figure} figures/branch.png
---
width: 100px
align: right
```
Let's create a space for you idea to form. You can create your own version of the book, visible for everyone to see. On GitHub, you'll use `branches` or `forks`.

## 3 edit the book
```{figure} figures/edit.png
---
width: 100px
align: right
```
Creativity activated, let's start adding content to your book! You'll add text, images, videos, math, interactive quizes, coding, widgets, etc. As editing the book is not directly done in a graphical interface with buttons like Microsoft Word, you'll need to learn a bit of syntax. The [MyST syntax cheat sheet](https://jupyterbook.org/v1/reference/cheatsheet.html) will be added to your bookmarks. The changes you'll make have to be added to the GitHub version control system, creating `commits` on the your git `branch`.

## 4 check changes
```{figure} figures/check.png
---
width: 100px
align: right
```
You've made a change, how does is look like? Your raw file have to be parsed. You can do that yourself or use the tooling provided by use in a GitHub `Action`. As soon as you uploaded (`pushed` in Git language) your changes to GitHub, it'll create a nice looking website for you!

## 5 repeat, edit and check
```{figure} figures/review.png
---
width: 100px
align: right
```
You'll make mistakes and you'll want to alter content... many, many times... As long as your idea is not ready to be shared with other, keep iterating step 3 and 4 until it's perfect!

## 6 submit for review
```{figure} figures/online.png
---
width: 100px
align: right
```
You're done! Great! Now let's see what others think of your contribution. You'll submit your changes to the original book, in GitHub language this is called a `Pull request`. Other will be able to review, adapt and eventually `merge` your version into the book!

I hope that all of this seems fun! Let's continue on making this happen!