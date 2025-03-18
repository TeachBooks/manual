# Interactive SVG images

```{admonition} User types
:class: tip
This section is useful for user type 3-5.
```

{bdg-success}`External software`

SVG images can be made interactive by adding 'slides' to the SVG. This allows users to click through a set of images, showing dynamic processes. To make these kind of images, you can make use of Inkscape with JessyInk:

```{iframe-figure} ../_static/my_first_svg_presentation.svg
:name: svg_presentation

Click through this interactive SVG image!
```

[Inkscape](https://inkscape.org/) is a drawing program with which you can create SVG files.

[JessyInk](https://code.google.com/archive/p/jessyink/) is an extension to Inkscape that lets you create 
svg slides that can be integrated in Jupyter notebooks and in Jupyter books.

This document briefly explains how. You are assumed to be familiar with Inkscape. It applies to Inkscape 1.2 or later. 

For more help on Inkscape and JessyInk:

- [Inkscape tutorials](https://inkscape.org/learn/)
- [Inkscape manual](https://inkscape-manuals.readthedocs.io/en/latest/index.html)
- [JessyInk wikis](https://code.google.com/archive/p/jessyink/wikis)

## Create SVG slides for Jupyter notebooks and Jupyter books

1. Start Inkscape

2. Activate the JessyInk extension. From the main menu select: "Extensions" --> "JessyInk" --> "install/update..." and click "Apply".
   
3. Display the layers tab: From the main menu select: "Layer"  --> "Layers And Objects..."
   
4. Create a master slide: the information on this slide will be displayed on all slides

   1. On the layers tab right-click the layer name and select: "Rename Layer...".  This will bring up the "Rename Layer" dialog box. Enter the layer name e.g. "master slide" and click "Rename". 
      
   2. From the main menu select: "Extensions" --> "JessyInk" --> "Master slide...". This will bring up the "Maste slide" dialog box. Enter the name of your master slide and click "Apply".
      
5. Put some stuff on this master slide. Later you can adjust it or move it to a better location. In this example, will put the following information on each slide:

   1. The title of the presentation. Place a text object with the title of the presentation somewhere on this master slide
         
   2. The name of the slide (using a placeholder)
   
      1. Place a text placeholder like "#" somewhere on this master slide
      2. Select this placeholder
      3. From the main menu select: "Extensions" --> "JessyInk" --> "Auto-texts..."
      4. This brings up the "Auto-texts" dialog box. Select "Slide title" and click "Apply".
      
   3. The slide number (using a placeholder)
   
      1. Place a text placeholder like "##" somewhere on this master slide
      2. Select this placeholder
      3. From the main menu select: "Extensions" --> "JessyInk" --> "Auto-texts..."
      4. This brings up the "Auto-texts" dialog box. Select "Slide number" and click "Apply".

6. Create your slides. Each layer is a slide. The information on the master slide is added to each layer.

    - For each slide click "+" on the layers tab or copy and rename an existing slide.
    - Moving your mouse across a layer or an object displays a few icons. You can view/hide the layer/object by toggling the *eye* icon. You can enable/disable editing by toggling the *key* icon.
    - Create or modify the contents of the slide

7. Adjust the position of the master sheet objects such that they nicely line-up with your slides.. Adjust the width, height, and scale of the presentation.

    1. From the main menu select: "Document properties". **DO NOT SELECT "Resize to content:"**
    
    2. Adjust "Width:", "Height:" and "Scale:".
    
8. Save the presentation

   1. From the main menu select: "File" --> "Save As..."
   2. Select a folder, enter a file name, and press "Save".
   
9. Show the presentation. Open the presentation in a webbrowser. Use the mouse scroll wheel, "PgUp", "PgDn", "^", "⌄", "<", or ">" to go through the slides. If necessary, fix the position of the presentation in the browser by pressing the "Shift" key while scrolling through it.

10. Include the slides in a Jupyter Book: Copy your presentation to the `_static` folder. This will make sure it's available after the build. Reference to the file using relative links using [](../external/sphinx-iframes/README.md). Use `../` to go to the directory above or `./` to open the current directory, i.e. the following syntax will give you the [figure as shown above](svg_presentation):

````md
```{iframe} ../_static/my_first_svg_presentation.svg
```
````   
