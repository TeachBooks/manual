````{margin}
```{admonition} User types
:class: tip
This section is useful for user type 3-5.
```

{bdg-danger}`iframe`
````

# H5p interactive elements

## Instruction
H5p elements are interactive HTML-blocks which can be embedded in a TeachBook using an iframe. H5p requires a server to host those elements. For TU Delft employees, this is arranged for on a [TU Delft portal on the H5p website](https://tudelft.h5p.com/content) (sign in via Brightspace to H5p required first as described [here](https://www.tudelft.nl/teaching-support/educational-tools/h5p)).

After creating an H5p element, the iframe code can be copied at Edit - Publish - Public - Embed code. This html link of that embed can be directly added to your markdown file using [](../external/sphinx-iframes/README.md):

````
```{h5p} https://....h5p.com/content/.../embed
```
````

Alternative, you can use raw html (lacking proper dark mode conversion):
```html
<iframe src="https://....h5p.com/content/.../embed" aria-label="..." width="1088" height="200" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe><script src="https://tudelft.h5p.com/js/h5p-resizer.js" charset="UTF-8"></script>
```

A full list of all available interactive elements is available on the website of [H5p](https://h5p.org/content-types-and-applications), these include among others:
- Multiple choice questions
- Fill in the blanks
- Drag and drop
- Interactive video
- Image hotspot

Some best-practices on the use of H5p:
- H5p requires its own hosting. TU Delft provides this for TU Delft employees.
- To startup your H5p-account, first login to H5p via Brightspace. You can follow instructions as under [https://www.tudelft.nl/teaching-support/educational-tools/h5p](https://www.tudelft.nl/teaching-support/educational-tools/h5p). 
- After that, direct login is possible via [tudelft.h5p.com](https://tudelft.h5p.com)
- Place your H5p-elements in a shared folder in H5p.
- Disable the display options "Toolbar Below Content" and "Display author's name to public (anonymous users) (only relevant when content's status is set to Public )" for each element for a smooth experience. On the other hand, the options 'Toolbar below content' in combination with 'Allow users to download content' allow people to reuse your questions, making them more open.
- Use it in combination with [](../external/sphinx-iframes/README.md) to allow for a proper dark mode, dynamic scaling and a transparent background.

In the next subpage, these exampled are shown.

More information on H5p using the TU Delft provided hosting: [Teaching Support - Educational Tools - H5P](https://www.tudelft.nl/teaching-support/educational-tools/h5p)
