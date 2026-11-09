# Well-Structured Book

One thing that students love is having all practical information about a course collected and updated on one page.
No more scrolling through the introduction lecture on Brightspace while veryfing assessment methods on the online studyguide or finding out about the schedule on MyTimetable. As will be shown in the following section, a TeachBook can be used to clarify the logistics of a course on top of providing the course material to the students.

The crossover module Data Science and Artifical Intelligence for Engineers, or in short DSAIE, aims to teach powerful data science tools to 2nd master students from the Civil Engineering and Geosciences faculty. In order to do that they use a combination of practical projects and theory provided to the students through their online interactive [book](https://interactivetextbooks.citg.tudelft.nl/dsaie/intro.html). 

## Table of contents

```{figure} figures/nice_overview1.PNG
---
width: 700
align: center
---
DSAIE Overview Page
```
While the left menu shows the first two chapters in the table of contents (Home & Logistics), the right hand side menu shows the sections of the current chapter where an introduction is given on the different units of the course, the responsible lecturers as well as the schedule of lectures and practicals. Additionally, the book layout is explained to the students which can help clarify how to use the interactive sections! 

The anatomy  of a TeachBook is explained more in detail on [this page](../basic-features/jupyterbook.md). In short, you can create structure in your book by having chapters and subschapters defined in the `.toc` file. In each chapter you can organize the content in sections using the `#` syntax which is visible in the menu on the right.

## Tagged content

Since all of this information can get a bit overwhelming it might be useful to tag the content so that students can easily grasp how the course is built up. Clicking on `Assessment` in the contents menu on the right will bring you to the following paragrapgh. 

```{figure} figures/nice_overview2.PNG
---
width: 700
align: center
---
DSAIE Assessment Methods + Tags
```
The lecturers have introduced some tags such as `written-exam` and `group-assignment`. Likewise, the reading material is also tagged with different sources so that students know in which textbook they can find more information if interested.

Throughout the book, those tags might be integrated as follows:

```{figure} figures/nice_overview4.PNG
---
width: 700
align: center
---
Additional reading reference
```

+++
{bdg-primary}`my_new_tag`


Make your own!

```
+++
{bdg-primary}`your_new_tag`
```

These badges as they are called are provided by the `spinx-design extension`. Different colours can be found through a bit of research online or [here](https://github.com/executablebooks/sphinx-design/blob/main/docs/badges_buttons.md) as a starting point.


