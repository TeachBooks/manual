# Code

There are two main ways to include code: directly within a Markdown file or within a Jupyter notebook. More methods are available, but we don't include them here. The first option is great for including simple calculations, or generating simple figures when an image file is not practical. *More will be added later.*

Note that if you are using a `*.ipynb` file or including a code snippet in a `*.md` file, including a blank line between the text and the closing three tick marks will generate an empty code box of one line in the TeachBook.

When making notebooks for the TeachBook, you might want to hide certain cells from the reader. For example, when including a simple figure generated from code or making a JupyterQuiz, we have to execute a code cell that generates the quiz. This code cell is ugly and distracting, so we do not want to render this in the final book.

We can change how the compiler treats notebook cells by using cell tags. You can find a detailed explanation on cell tags [here](https://jupyterbook.org/v1/interactive/hiding.html?highlight=cell%20tag). Specifically, have a look at the sections on *hiding* cell inputs and *removing* cell inputs. 

The workflow of editing cell tags depends on your editor. If you're using Jupyter Lab, you can find instructions [here](https://jupyterbook.org/v1/content/metadata.html#jupyter-cell-tags). 

For example, the following tag is used to convert the code input into either a drop-down (`hide-input`) or make it invisible (replace `hide-input` with `remove-input`). Replace `input` with `output` to do the same with the cell output:
```
{
    "tags": [
        "remove-input"
    ]
}
```

Once a correctly typed tag is added to the notebook it will appear in the buttons at the top and can be added to other cells. Multiple tags can be added to the same cell, in which case the tags are separated by commas.
