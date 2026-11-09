````{margin}
{bdg-danger}`iframe`
```` 

# Adding interactive HTML/JavaScript elements

In this section, we will discuss how to embed interactive elements created in HTML/JavaScript in a TeachBook. If you are interested in learning how to create these elements yourself, we will discuss an example in the [next article](creating_basic_HTML_elements.md). As an example, let us discuss how to embed an interactive 3D model of a subsurface environment I created:

```{iframe} ../_static/element_render_box.html
:width: 600px
:height: 400px
```

## Storing the HTML file
TeachBooks like this one are built from a Git project, comprising of different files and folders that are assembled into a webpage. It is generally not possible to paste the code of your HTML element directly into one of the project's Markdown files. Instead, you will have to store the files separately somewhere in the folder structure, then embed them later on. For this project, the book's root folder contains a ´_static´ folder which we can use to store our HTML/JS file. Some elemenets - such as the one above - may require additional files. The HTML element above, for instance, specifies a renderer using [THREE.js](https://threejs.org/) that displays a digital model. This model is specified as an .obj file (which defines its geometry) and a .mtl file (which defines its materials - its colors, reflectivity, transparency, and so on). We can store these files in the same ´_static´ folder.

## Embedding HTML files via iframes
If we want to embed our HTML/JS element in a Markdown page, we must use an inline frame, also known as an iframe. In a book, an iframe can be added using [](../external/sphinx-iframes/README.md):

````
```{iframe} ../_static/element_render_box.html
:width: 600px
:height: 300px
```
````

or alternatively using raw HTML:

```html
<iframe src="../_static/element_render box.html" width="600" height="300" frameborder="0"></iframe>
```

What does this code do? In HTML, certain active parts of the code are defined as tags surrounded by `<` and `>` symbols. The tag `<iframe>` opens the iframe environment, the `<iframe/>` tag closes it again. Inside the opening tag, we can further specify properties of the iframe. These properties are usually defined as strings, that is to say, surrounded by quotation marks. Some of the more common iframe properties are:
 - `src`: This specifies the **source** of the iframe, the HTML file it will display. 
 - `width`: This specifies the **width** of the iframe in pixels.
 - `height`: This specifies the **height** of the iframe in pixels.
 - `frameborder`: This flag specifies whether a border should be drawn around the iframe (`"1"`) or not (`"0"`).
 - `scrolling`: Specifies whether or not to display scrollbars for the iframe, in case the embedded content is larger than the iframe. Possible values are `"yes"`, `"no"`, and `"auto"`. I recommend either creating HTML elements of the same size, or adjusting their size dynamically to their contained - in this case, the iframe.
 - `allowfullscreen`: Specifies whether or not to allow the iframe to be displayed in fullscreen mode.
 - `loading`: Specifies how the browser should handle the loading of the iframe content. Possible values are eager (load immediately) and lazy (load on demand).

Let's take a closer look at the source. Since this project uses a local file structure, we can make use of relative paths such as `../_static/element_render box.html`. What does this path do? In this project, the markdown file for this article is located in the directory `book/features/adding_HTML_elements.md`. The HTML element we want to embed is located in the directory `book/_static/element_render_box.html`. The relative path thus works as follows: 
 - We start in the markdown file's directory `book/features/adding_HTML_elements.md`
 - The string `"../"` tells the iframe to move up one folder to `book`. If you need to move up more subdirectories, use it recursively, eg. `../../` moves up two directories.
 - The following string `"_static/"` tells the iframe to navigate into the `_static` folder. We are now in `book/_static/`.
 - Finally, the string `"element_render_box.html"` selects the HTML file we want to embed. We are now in `book/_static/element_render_box.html`.

## Viewing result at local build
To view the final result locally, it's required to setup a {ref}`local Python webserver <setup-local-server>`.

## HTML code for the 3D render element

To conclude, I provide the HTML/JavaScript code for the 3D render element above. To understand what the code below does in more detail, please refer to the [next article](creating_basic_HTML_elements.md). One thing I want to direct your attention to are the paths specified in the first few lines of the `<script>` environment. Here, we do not have to navigate to a different local folder because we initially stored our `.obj` and `.mtl` files in the same folder as the `element_render_box.html` file. If they would be stored in a different folder, we have to specify either an absolute path (e.g., via a URL) or a relative path, as explained above.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Subsurface</title>
  <style>
    html, body {
      margin: 0;
      height: 100%;
    }
    #c {
      width: 100%;
      height: 100%;
      display: block;
    }
  </style>
</head>
<body>
  <canvas id="c"></canvas>

  <script type="module">
  
  	// Path to object
    var path_obj = "bimodal_field.obj";
    var path_mtl = "bimodal_field.mtl";
  
  
    // Three.js - Load .OBJ and .MTL file - Windmill2
    // from https://threejsfundamentals.org/threejs/threejs-load-obj-materials-windmill2.html

    import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/build/three.module.js';
    import { OrbitControls } from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/examples/jsm/controls/OrbitControls.js';
    import { OBJLoader } from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/examples/jsm/loaders/OBJLoader.js';
    import { MTLLoader } from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/examples/jsm/loaders/MTLLoader.js';

    function main() {
      const canvas = document.querySelector('#c');
      const renderer = new THREE.WebGLRenderer({ canvas });

      const fov = 45;
      const aspect = 2; // the canvas default
      const near = 0.1;
      const far = 100;
      const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
      camera.position.set(0, 10, 20);

      const controls = new OrbitControls(camera, canvas);
      controls.target.set(0, 5, 0);
      controls.update();

      const scene = new THREE.Scene();
      scene.background = new THREE.Color('white');

      {
        const skyColor = 0xB1E1FF; // light blue
        const groundColor = 0xB97A20; // brownish orange
        const intensity = 1;
        const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
        scene.add(light);
      }

      {
        const color = 0xFFFFFF;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(5, 10, 2);
        scene.add(light);
        scene.add(light.target);
      }

      function frameArea(sizeToFitOnScreen, boxSize, boxCenter, camera) {
        const halfSizeToFitOnScreen = sizeToFitOnScreen * 0.5;
        const halfFovY = THREE.MathUtils.degToRad(camera.fov * .5);
        const distance = halfSizeToFitOnScreen / Math.tan(halfFovY);
        // compute a unit vector that points in the direction the camera is now
        // in the xz plane from the center of the box
        const direction = (new THREE.Vector3())
          .subVectors(camera.position, boxCenter)
          .multiply(new THREE.Vector3(1, 0, 1))
          .normalize();

        // move the camera to a position distance units way from the center
        // in whatever direction the camera was from the center already
        camera.position.copy(direction.multiplyScalar(distance).add(boxCenter));

        // pick some near and far values for the frustum that
        // will contain the box.
        camera.near = boxSize / 100;
        camera.far = boxSize * 100;

        camera.updateProjectionMatrix();

        // point the camera to look at the center of the box
        camera.lookAt(boxCenter.x, boxCenter.y, boxCenter.z);
      }

      {
        const mtlLoader = new MTLLoader();
        mtlLoader.load(path_mtl, (mtl) => {
          mtl.preload();
          const objLoader = new OBJLoader();
          objLoader.setMaterials(mtl);
          objLoader.load(path_obj, (root) => {
            scene.add(root);

            // compute the box that contains all the stuff
            // from root and below
            const box = new THREE.Box3().setFromObject(root);

            const boxSize = box.getSize(new THREE.Vector3()).length();
            const boxCenter = box.getCenter(new THREE.Vector3());

            // set the camera to frame the box
            frameArea(boxSize * 1.2, boxSize, boxCenter, camera);

            // update the Trackball controls to handle the new size
            controls.maxDistance = boxSize * 10;
            controls.target.copy(boxCenter);
            controls.update();
          });
        });
      }

      function resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
          renderer.setSize(width, height, false);
        }
        return needResize;
      }

      function render() {

        if (resizeRendererToDisplaySize(renderer)) {
          const canvas = renderer.domElement;
          camera.aspect = canvas.clientWidth / canvas.clientHeight;
          camera.updateProjectionMatrix();
        }

        renderer.render(scene, camera);

        requestAnimationFrame(render);
      }

      requestAnimationFrame(render);
    }

    main();
  </script>
</body>
</html>


```
