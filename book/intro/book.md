# What is a TeachBook?

Never seen a TeachBook before? Here's a small demo of the MUDE-book!

```{video} https://www.youtube.com/embed/gbBsWo6em4c?si=ayKhISsx06LmGbDD
:class: blend
```

So what are you looking at? It's a website generated with the [TeachBooks package](https://github.com/TeachBooks/TeachBooks) which in turn makes use of many other tools, of which [Jupyter Book package](https://jupyterbook.org/v1/) and [Sphinx](https://www.sphinx-doc.org/) are the most prominent. Various extensions have been added to improve the student-experience, especially for technical topics! With TeachBooks we aim to make it easy to collaboratively use it, even if you've little experience with the software package which is part of it.

## Three Key Ingredients

To create a TeachBook, three key ingredients are needed:

1. A **configuration file** to define functionalities, `_config.yml`
2. A **table of contents** file to list which files should end up in the book, `_toc.yml`, as well as define its structure
3. **Content** for your book! Text-based files which allows you to embed figures, videos, math and interactive elements.

The files are typically organized together in a files structure like this:

```
└── my_book_directory/
    ├── README.md
    ├── requirements.txt
    └── book/
        └── _config.yml
        └── _toc.yml
        └── contents/
            └── intro.md
            └── chapter1.md
            └── chapter2.ipynb
            └── images/
                └── figure1.png
```

Note the arrangement of the 3 key book ingredients in a subdirectory called `book/`; this is where you should focus when you are just getting started with TeachBooks and are making your first book. Additional files can be used to control the book-building process, and these are typically stored _outside_ the `book/` directory to keep the book contents separate. For now, all you need to understand that everything needed to create a book can be collected in a single top-level directory (`my_book_directory/`, in this case), and this directory is what becomes the collection of files in our Git **repository** (described elsewhere).

`````{admonition} Text-based files? yml? What is that?!
:class: tip, dropdown

Text-based files are digital files on your computer that you can open in a text editor and read directly. There are many file extensions used for text-based files, a few common ones related to TeachBooks are: Markdown (`*.md`), Jupyter Notebooks (`*.ipynb`), and YAML (`*.yml`).

YAML (or YML) is a text-based file format that is primarily used to store data. It is useful because it is easy for humans to read and write, and easy for machines to _parse_ and generate., which is why YAML is often used for configuration files. Here is an example of a YAML file...can you tell what information is being stored?

```yaml
parts:
  - caption: Your First TeachBook!
    chapters:
    - file: intro/book.md
    - file: intro/workflow.md
    - file: intro/template.md
    - file: external/next.md
  - caption: Getting Going!
    chapters:
    - file: ...
```

````{admonition} Description of the YAML file
:class: tip, dropdown

You can see quite clearly that a number of files are listed, and that they are organized into chapters and sections. This defines the structure of the book---you can confirm this by comparing to the left sidebar, as this book is where this example YAML snippet came from!
````
`````

## How is a book made?

A book is made by by writing content in text-based files such as Markdown (`*.md`), Jupyter Notebooks (`*.ipynb`), etc. After that, software is used to "parse" these files and create the final book (e.g., website). Fortunately when getting started you don't need to worry about the software because TeachBooks has set up GitHub tools for you that take care of this process automatically! The process is illustrated in the diagram below.

```{figure} figures/intro-book-2.svg

The process of building a book with TeachBooks. When just getting started, TeachBooks tools enables you to focus on what matters most: learning to write content for your book!
```

```{admonition} Familiar with LaTeX? There are similarities!
:class: dropdown

Have you ever used LaTeX? It turns out there are a lot of similarities with TeachBooks. Here is a quick list:
1. Writing "source code" in text-based files (i.e., `*.tex` versus `*.md`, `*.ipynb`, etc) that is generally easy to read without the markup and uses special functions to format rich document objects (e.g., tables, figures, etc).
2. The "book" is created by using a piece of software that parses the source code and creates the final document (a `*.pdf` versus a `*.html` for TeachBooks).
3. Creating the document structure using a list of files that contain source code that automatically generates the Table of Contents and Index..
4. Sometimes you can spend more time than you like troubleshooting "bugs" that turn out to be simple syntax errors.

If you've used LaTeX before, it will be relatively easy to learn to use a TeachBook.
``` 

## Why are Git and GitHub Important?

The fun part is the collaborative aspect of TeachBooks! However, the amount of software required _when doing this by yourself_ can be intimidating. Git and GitHub are tools used by TeachBooks to make this process as smooth as possible for newcomers.

There are three reasons why Git and GitHub are important for TeachBooks:

1. **Version control**: Git is a version control system that allows you to track changes to your files over time. This is especially useful when you're working with others on a book, as it allows you to see who made what changes and when.
2. **Collaboration**: GitHub is a company that provides a wide array of online tools. These _augment_ the version control features incorporated directly in Git. In short, tools at `github.com` allow you to share your files with others and work on them together. This is especially useful when you're working on a book with multiple authors, as it allows you to easily share your work and collaborate.
3. **Automation**: GitHub provides a number of tools that can help automate the process of building your book. TeachBooks has carefully developed a number of these tools specifically to support teachers and students in the process of creating and sharing educational content.

## What's next?

The following pages will introduce you to a standard "workflow" for editing a book, which is focused entirely in the "source code" of a book (the first box in the diagram above). After we cover this, you'll be ready to make your first book!
