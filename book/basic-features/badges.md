# Badges, Buttons & Icons

<a href="https://jupyterbook.org/v1/"><img  style="display:inline-block; height:1.5em; width:auto; transform:translate(0, -0.15em)" src="../images/logo-wide.svg" alt="Jupyter book v1"></a> provides a range of features which are visually appealing and functional. These elements can enhance the interactivity and visual design of your book, offering additional information or links in a compact and visually engaging way. The badges, buttons and icons are made available through Sphinx and they themselves wrote a [documentation](https://sphinx-design.readthedocs.io/en/latest/badges_buttons.html) about it.

(my_ref)=
## Badges

Badges are small visual indicators often used to convey concise or important information. They can be very useful for categorising or tagging content for the reader like has been done for the subchapters under the [features](../features/overview.md) chapter of this manual. 

There are three types of badges: plain, link and reference (for cross references within book) which are fully customizable and can simply be added with Markdown syntax:

| Type   | Badge                                                    | Code Syntax                                                            |
|--------|----------------------------------------------------------|------------------------------------------------------------------------|
| Plain  | {bdg-primary}`plain_text`                                | ``` {bdg-primary}`plain_text` ``` 
| Link   | {bdg-link-primary}`https://teachbooks.io/`               | ``` {bdg-link-primary}`https://teachbooks.io/` ``` |
| Hidden Link | {bdg-link-primary}`TeachBooks <https://https://teachbooks.io/>` | ``` {bdg-link-primary}`TeachBooks <https://https://teachbooks.io/> ` ``` |
| Reference | {bdg-ref-primary}`my_ref`                             | ``` {bdg-ref-primary}`my_ref` ```                                           |

Here's an overview of all the available colours:

| Full Colour                   | Code Syntax                      | Colour Outline                | Code Syntax                           |
|-------------------------------|----------------------------------|-------------------------------|---------------------------------------|
| {bdg}`my_text`                | ``` {bdg}`my_text` ```           |                               |                                       |
| {bdg-primary}`my_text`        | ``` {bdg-primary}`my_text` ```   | {bdg-primary-line}`my_text`   | ``` {bdg-primary-line}`my_text` ```   |
| {bdg-secondary}`my_text`      | ``` {bdg-secondary}`my_text` ``` | {bdg-secondary-line}`my_text` | ``` {bdg-secondary-line}`my_text` ``` |
| {bdg-success}`my_text`        | ``` {bdg-success}`my_text` ```    | {bdg-success-line}`my_text`   | ``` {bdg-success-line}`my_text` ```   |
| {bdg-info}`my_text`           | ``` {bdg-info}`my_text` ```       | {bdg-info-line}`my_text`      | ``` {bdg-info-line}`my_text` ```      |
| {bdg-warning}`my_text`        | ``` {bdg-warning}`my_text` ```    | {bdg-warning-line}`my_text`   | ``` {bdg-warning-line}`my_text` ```   |
| {bdg-danger}`my_text`         | ``` {bdg-danger}`my_text` ```     | {bdg-danger-line}`my_text`    | ``` {bdg-danger-line}`my_text` ```    |
| {bdg-light}`my_text`          | ``` {bdg-light}`my_text` ```      | {bdg-light-line}`my_text`     | ``` {bdg-light-line}`my_text` ```     |
| {bdg-muted}`my_text`          | ``` {bdg-muted}`my_text` ```      | {bdg-muted-line}`my_text`     | ``` {bdg-muted-line}`my_text` ```     |
| {bdg-dark}`my_text`           | ``` {bdg-dark}`my_text` ```       | {bdg-dark-line}`my_text`      | ``` {bdg-dark-line}`my_text` ```      |
| {bdg-white}`my_text`          | ``` {bdg-white}`my_text` ```      | {bdg-white-line}`my_text`     | ``` {bdg-white-line}`my_text` ```     |
| {bdg-black}`my_text`          | ``` {bdg-black}`my_text` ```      | {bdg-black-line}`my_text`     | ``` {bdg-black-line}`my_text` ```     |


## Buttons

Buttons provide a way to create clickable elements that are more attractive than links, for example, to link to key sections of your book such as downloads or external resources. Jupyter-Book v1 supports buttons using Markdown making them highly customizable. It is possible to link to external websites as well as chapters within your book. To link to an external page, use `{button-link}`. `{button-ref}` must be used when linking to a part within your book.

The basic code syntax for creating a button is as follows:

```{button-link} https://teachbooks.io
:color: primary
``` 

```
    ```{button-link} https://teachbooks.io
    :color: primary
    ``` 
```
[](../features/overview.md)
```{button-ref} feature_overview
:color: secondary
``` 

```
    ```{button-ref} feature_overview
    :color: secondary
    ``` 
```

Buttons can be customized in markdown in a similar way as figures. You can experiment with these styles to create buttons that align with your book's theme. Here are the set of parameters which can be customized:


| Parameter                     | Options                          | Functionality                 |
|-------------------------------|----------------------------------|-------------------------------|
| color | primary, secondary, success, danger, warning, info, light, dark, muted | Set the color of the button (background and font)|
| outline                       | /                                 | white button, coloured outline|
| align                         | left, right, center              | Align the button on the page  |
| expand                        | /                                | Expand to fit parent width    |
| click-parent                  | /                                | Make parent container also clickable |
| tooltip                       | /                                | Add tooltip on hover          |
| shadow                        | /                                | Add shadow CSS          |
| class                         | /                                | Additional CSS classes         |


Finally here are some examples:

```{button-link} https://teachbooks.io
:color: warning
:shadow:

TeachBooks
```

```
    ```{button-link} https://teachbooks.io
    :color: warning
    :shadow:

    TeachBooks
    ```

```

```{button-link} https://teachbooks.io
:color: success
:expand:

TeachBooks
```

```
    ```{button-link} https://teachbooks.io
    :color: success
    :expand:

    TeachBooks
    ```
```


## Icons

Icons can be included to visually represent actions or categories. They can take many shapes, such as an image or button inserted in-line within a text paragraph. Icons can be integrated using HTML syntax. 

To add an icon, use the following syntax:

**1. Image Icons**

Let's have a look at the first sentence of this chapter again: <a href="https://jupyterbook.org/v1/"><img  style="display:inline-block; height:1.5em; width:auto; transform:translate(0, -0.15em)" src="../images/logo-wide.svg" alt="Jupyter book v1"></a> provides a range of features which are visually appealing and functional.

Here the Jupyter-book logo was inserted for a more professional look. It's including a link `href` and and image saved as `../images/logo-wide.svg`

```
<a href="https://jupyterbook.org/v1/"><img  style="display:inline-block; height:1.5em; width:auto; transform:translate(0, -0.15em)" src="../images/logo-wide.svg" alt="Jupyter book v1"></a> provides a range of features which are visually appealing and functional.
```

**2. SVG Icons**

A library of SVG icons can be found in the [Bootstrap](https://icons.getbootstrap.com/#icons) library.

By scrolling through the available icons in the library you can find just about any icon. Once selected, you need to copy the SVG of the icon to include it in the `path` in the HTML code. This paragraph includes a globe: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/> . As you can see in the code cell below, you'll need to specify the width, height as well as fill colour.

```
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
<path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
</svg>
```

If you want to keep your files clean, you won't like these svgs. However, your icons is probably available in one of the following icon providers.

**3. GitHub Octicon Icons**

[GitHub icons](https://primer.style/foundations/icons) like {octicon}`mark-github` can be added using the syntax:
```{octicon}`mark-github` ```

Where `mark-github` can be replaced by any of the name of the icon provided [here](https://primer.style/foundations/icons)

By default the icon will be of height 1em (i.e. the height of the font).

**4. Material Design Icons**

The use of Material Design Icons like {material-regular}`settings` is explained [here](https://sphinx-design.readthedocs.io/en/latest/badges_buttons.html#material-design-icons)

**5. FontAwesome Icons**

The use of FontAwesome Icons like {fas}`spinner` is explained [here](https://sphinx-design.readthedocs.io/en/latest/badges_buttons.html#fontawesome-icons). There's no need to add the FontAwesome CSS.

**6. Combining Buttons and Icons**

Icons can also be included within buttons using the icon font for a modern, professional look. The code can also be downloaded in the [Bootstrap](https://icons.getbootstrap.com/#icons) library.

This button includes a download icon alongside some text: "Download it!".

Loving this book? <a href="https://jupyterbook.org" class="btn btn-primary">
    <i class="fas fa-download"></i> Download it!
</a>

```
Loving this book? <a href="https://jupyterbook.org" class="btn btn-primary">
    <i class="fas fa-download"></i> Download it!
</a>
```



