# Figures 

To add a figure, just copy the figure to the correct directory. Then, in your markdown file, include the figure as follows:

````md
```{figure} <figurename>.png/.jpg
---
height/width: <height or width in pixels>
name: <name of the figure>
align: left / center / right
figclass: left blank or "margin"
---
<Figure caption>
```
````

For example: 

````md
```{figure} ../images/TUDelft_logo_rgb.png
---
width: 70%
name: demoexample1
align: center
---
example 1: width (70%) as percentage, align center
```
````

provides this output, which looks nice.
```{figure} ../images/TUDelft_logo_rgb.png
---
width: 70%
name: demoexample1
align: center
---
example 1: width (70%) as percentage, align center
```

Using the name label, you can refer to the figure as done with {numref}`Figure {number} <demoexample1>`.

You can find more documentation on including figures [here](https://jupyterbook.org/v1/content/figures.html).<br> 

There are many settings, for instance aligning right: 

````md
```{figure} ../images/TUDelft_logo_rgb.png
---
width: 50%
name: demoexample2
align: right
---
example 2: width (50%) as percentage, align right
```
````

with the result:

```{figure} ../images/TUDelft_logo_rgb.png
---
width: 50%
name: demoexample2
align: right
---
example 2: width (50%) as percentage, align right
```

Aligning right can come with the potential downside (not always wanted) that text is wrapped around the figure. To avoid this one can use `<div>` elements, both before and after the text (make sure to leave an empty line after the `<div>`!):

````html
<div style="clear: both;">
and the output
</div>
<div style="clear: both;">

```{figure} ../images/TUDelft_logo_rgb.png
---
width: 50%
name: demoexample3
align: right
---
example 3: width (50%) as percentage, align right with additional div style
```

</div>
````

<div style="clear: both;">
with the result:
</div>

<div style="clear: both;">

```{figure} ../images/TUDelft_logo_rgb.png
---
width: 50%
name: demoexample3
align: right
---
example 3: width (50%) as percentage, align right with additional div style
```

</div>

<div style="clear: both;">

including `figclass: margin` sets the figure to the column at the right.

</div>

````md
```{figure} demo97/demo97_figure1.jpg
---
figclass: margin
width: 50%
name: demoexample2

---
example 2:including figclass: margin
```
````

<br>

```{figure} ../images/TUDelft_logo_rgb.png
---
figclass: margin
width: 50%
name: demoexample4
---
example 4:including figclass: margin
```

