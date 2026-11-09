# Anatomy of a TeachBook

To build a TeachBook, you need three things:

1. A configuration file
2. A table of contents
3. Content

## The configuration file
The configuration file of TeachBooks is named `_config.yml`. It mainly contains settings that apply when building the book. Here is a basic example of a configuration file, taken from this book:

```yaml
title: TeachBook Manual
author: TeachBooks development team
copyright: CC BY-NC

execute:
  execute_notebooks: auto

sphinx:
  extra_extensions:
  - sphinx_inline_tabs
```

Technically speaking, a `_config.yml` file is not required to build a TeachBook. If you don't make one, your TeachBook will just use all default values. However, you should make a configuration file which includes at least the following settings:

- `title`: the title of your book, which appears on the top-left of every page, under the logo.
- `author`: authors of the book, which appears in the bottom margin of every page.
- `logo`: (relative) path to the logo of your book (optional).
- `copyright`: the [licenses](https://creativecommons.org/share-your-work/cclicenses/) attached to your book.

In addition, the following option can also be useful:

- `execute_notebooks`: *turn on/off* the execution of Jupyter Notebooks during the build process. *On* by default. If you perform heavy computations in your notebook (machine learning, FEM models, et cetera), you might be better off running the notebooks on a more powerful machine as opposed to the CI/CD server. To turn it off, specify the value `'off'`. You can also exclude specific notebooks by creating exclude patterns in the filenames. For more info, see the [Jupyter Book v1 documentation](https://jupyterbook.org/v1/content/execute.html#exclude-files-from-execution).


```{warning}
The configuration and table of contents files are in YAML format (short for YAML Ain't Markup Language). YAML has a specific syntax, which can cause some errors if you don't adhere to it. Just like Python, indentation is very important. You can find an overview of the syntax [here](https://en.wikipedia.org/wiki/YAML#Syntax).
```

## The table of contents

The table of contents (`_toc.yml`) file is where you define the structure of your book. You can organize content in *parts*, *chapters*, and *sections* (and subsections, each new section creating a dropdown menu in the ToC). This is what a table of contents could look like:

```yaml
- format: jb-book
- root: intro

chapters:
- file: chapter_1
  sections:
  - file: section_1_1
  - file: section_1_2
- file: chapter_2
  sections:
  - file: section_2_1

et cetera...
```

`root` is the landing page of your book. It will be the first page that people see when they visit the book. You can include files by providing their *relative* path (so the location with respect to `_toc.yml`). These files can be a combination of Markdown, Jupyter Notebooks, and Restructured Text. The example above does not have parts, so the menu on the left will consist of just a list of the chapters. You can also group chapters in parts like this:

```yaml
- format: jb-book
- root: <homepage>

parts:
- caption: Part 1
  chapters:
  - file: chapter_1
    sections:
    - file: section_1_1
    - file: section_1_2
      sections:
      - file: subsection_1_2_1
      - file: subsection_1_2_2
  - file: chapter_2
- caption: Part 2
  chapters:
  - file: chapter_3
    sections:
    - file: section_3_1

et cetera...
```

## Content
The main thing people are interested in, is the content of the book. To help the reader, you can structure the book into chapters, each which sections and subsections as explained below.

### The structure of a chapter
The 'nested' structure in the TOC is one way to organize your book. Another way to do so is in the file itself. The structure is defined by the number of `#`:

```
# Chapter 1 title

## Section 1.1 

### Subsection 1.1.1 

## Section 1.2 

### Subsection 1.2.1
```

The depth for numbered subsection can be set in the TOC file: 

```
parts:
- caption: Part 1
  numbered: 2
  chapters:
  - file: chapter_1
    sections:
    - file: section_1_1
    - file: section_1_2
```

#### Exercise
Check out [this exercise](https://teachbooks.io/template/syntax_exercises/007.html) in the TeachBooks template to see for yourself how to structure files with titles!

### Including a chapter twice
In some cases you want to include the same chapter in two different places in your book (for instance parts). However, you do not want to make the same adjustments in different files, the content should only 'live' in one place. The solution is to use `include`:

````
  ```{include} Argument
  ```
````

The *argument* in this case is the location of the file you want to include (for instance: `/basic-features/equations.md`). Note that when building the book locally, you get some warnings for duplicate labels..

We provide an example of the use of `include` below: We included the chapter [equations](./equations.md) in this page.


```{include} /basic-features/equations.md
```