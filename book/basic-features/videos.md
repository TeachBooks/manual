---
jupytext:
  text_representation:
    extension: .md
    format_name: myst
    format_version: 0.13
    jupytext_version: 1.10.3
kernelspec:
  display_name: Python 3 (ipykernel)
  language: python
  name: python3
---

# Videos

Videos uploaded to YouTube can be embedded in the TeachBook. There are several ways to do so:

**1.** To embed them in the TeachBook, first obtain the embedding link of the video. In order to do so, go to the *YouTube* page of the video (so not the Brightspace page), then click *share* in the description box. There should be a button *embed*, click that. Copy the HTML code that appears in the panel. Then, to embed the video, use the following 

```
    <iframe
    width="560"   
    height="315"
    src="https://www.youtube.com/embed/UCb-b82tzLo?"
    align="center"
    frameborder="0"
    allowfullscreen
    ></iframe>
```

The src can be used in combination with [](../external/sphinx-iframes/README.md):

````
```{video} https://www.youtube.com/embed/UCb-b82tzLo?
```
````

Or the HTML-iframe code can be directly included in the markdown file.

Resulting in the video below:

```{video} https://www.youtube.com/embed/UCb-b82tzLo?
```

**2.** Another option is to use a python coding cell. As this code cell should be run when the book is made, you have to change the config file and set `execute_notebooks:` to force. This comes with the downside that it takes considerable more time to deploy the book.
````
    ```{code-cell} ipython3
    :tags: [remove-input]
    from IPython.display import YouTubeVideo
    VideoWidth=600
    YouTubeVideo("YDBr1Lof_mI", width=VideoWidth, align='center')
    ```
````

Moreover, it requires one to have this code at the top of your markdown file:
```
    ---
    jupytext:
    text_representation:
        extension: .md
        format_name: myst
        format_version: 0.13
        jupytext_version: 1.10.3
    kernelspec:
    display_name: Python 3 (ipykernel)
    language: python
    name: python3
    ---
```
Note that this is not needed when you use a .ipynb (jupyter notebook) file.
