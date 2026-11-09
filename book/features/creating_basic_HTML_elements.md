# Creating basic interactive HTML/JavaScript elements

```{iframe} ../_static/element_pdf_and_cdf.html
:width: 600px
:height: 300px
```

At the bottom of this page, I will provide the full code for the interactive element above. In this section, let us go through the code one piece at a time. Let us begin from the top.

In the first line, we specify that this file is a HTML file. In the header (`<head>`), we can load packages we need later on. Within the `<script>` tags, we are loading three different libraries from web servers: `math.js`, which provides functions for basic mathematical operations (similar to Python's `numpy` library), as well as two versions of the library `d3.js`, which contains many extremely useful functions for web interactivity.

The `<style>` tag below defines [CSS](https://en.wikipedia.org/wiki/CSS) properties that, unsurprisingly, style the element. Two common settings for the `body` are `margin: 0`, which makes sure that the useable space extends all the way to the edges, and `overflow: hidden`, which effectively clips content that extends outside the element's borders by removing the scrollbars.

```html
<!DOCTYPE html>
<html>
   <head>
      <script src="https://unpkg.com/mathjs/lib/browser/math.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min.js"></script>  
      <script src="https://d3js.org/d3.v4.min.js"></script>
      <style>
         body{
         margin: 0; overflow: hidden;
         font-family: Helvetica, sans-serif;
         }
      </style>
   </head>
```

Next, we create a `<div>`. This is an HTML element that groups other HTML elements. In our case, it only contains a [SVG](https://en.wikipedia.org/wiki/SVG) named `"click"`. This SVG will serve as the canvas on which we will later place the interactive content.

```html
   <!-- Create a div where the graph will take place -->
   <div id="my_datavisualization">
      <svg id="click" xmlns="http://www.w3.org/2000/svg">
      </svg>
   </div>
```

So far, all of this has just been setup. The real magic begins in the HTML's `<body>`, which contains the `<script>` environment. This is where we code the actual content of the interactive element in JavaScript. 

The first few lines of our JavaScript code are simple. To scale our element with the size of its container (the iframe we created above), the code first reads the width `vw` and height `vh` of its container. For this element, we define the interactive element to be twice as wide as tall, so we define the `height` of the canvas as half its `width`. We then select the `"click"` canvas we created before, create a variable for quick access called `svg`, and set its height and width to the new dimensions we just computed.

```html
   <body>
      <script>
         // Get the viewport height and width
         const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
         const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
         
         // Fit to viewport
         var height = vw * 0.5;
         var width = vw;
         
         // Create the canvas. We will use only part of it for the main plot
         var svg = d3.select("#click") // This selects the svg using its id
             .attr("width", width) // This defines the canvas' width
             .attr("height", height) // This defines the canvas' height
```

Next, we may want to define some functions for our element. The first function `linspace` is simply creates `resolution` points between a `start` and `end` value, similar to `numpy.linspace` in Python. The second and third functions evaluate the pdf and cdf of a standard Gaussian distribution for a given `x` value.

```
         function linspace(start, end, resolution) {
             var spacing = [];
             // Go through a for-loop
             var i;
             for (i = 0; i < resolution; i++) {
                 spacing.push(start + (end - start) * i / (resolution - 1))
             }
             return spacing; // The function returns the linspace between p1 and p2
         }
         
         function standard_Gaussian_pdf(x) {
             mean = 0;
             std = 1;
             // Create a dummy variable
             var result = [];
             normalize = math.dotDivide(
                 1,
                 math.sqrt(
                     math.dotMultiply(
                         math.dotMultiply(
                             2,
                             math.PI),
                         math.pow(
                             std,
                             2))));
         
             var i;
             for (i = 0; i < x.length; i++) {
                 // Evaluate the first element of the Gaussian mixture
                 expon = math.exp(
                     -math.dotDivide(
                         math.pow(
                             x[i] - mean,
                             2),
                         math.dotMultiply(
                             2,
                             math.pow(
                                 std,
                                 2))))
                 temp = math.dotMultiply(
                     normalize,
                     expon)
                 result.push(temp)
             }
             return result
         }
         
         function standard_Gaussian_cdf(x) {
             mean = 0;
             std = 1;
             // Create a dummy variable
             var result = [];
             for (i = 0; i < x.length; i++) {
                 // Evaluate the first element of the Gaussian mixture
                 temp = 0.5 * (1 + math.erf(x[i] /math.sqrt(2)))
                 result.push(temp)
             }
             return result
         }
```

Now, let us prepare the two subplots for the pdf (left side) and cdf (right side). First, we define what range of values we want to plot on the x-axis and y-axis. On the x-axis, we want to plot values between -3 and +3. For the pdf subplot's yaxis, we want to see everything from `0` to the pdf*s maximum at `x=0`, plus 20% padding. In JavaScript, we have significant control on how we want to create our plot. This means that we must define where exactly we want to place our subplots on the canvas. Let us start by defining the horizontal width of the left subplot from 10% of the canvas's width to 50% of the canvas's width, and its height from 10% of the canvas's height to 89% of the canvas's height (recall that our canvas is twice as wide as it is tall). Mind that in Javascript, the point at 0% width and 0% height is located in the top-left corner.

Next, we create three helper functions. If we want to add an element to the canvas, we must define its position and size in pixel values. For plotting, this is inconvenient, so here we define three functions that 
- convert x-values to horizontal pixels (`xScale_pdf`), 
- convert horizontal pixels to x-values (`xScale_pdf_inverse`), and 
- convert pdf-values to vertical pixels (`yScale_pdf`).

```html
         // Define a subplot for the standard normal
         const x_limits = [-3, 3];
         const y_limits_pdf = [0, 1 / math.sqrt(2 * math.pi) * 1.2];
         
         const window_x_pdf = [width * 0.1, width * 0.5];
         const window_y_pdf = [height * 0.1, height * 0.89];
         
         // Get scaling functions for the x scale and the y_scale
         const xScale_pdf = d3.scaleLinear()
             .domain([x_limits[0], x_limits[1]])
             .range(window_x_pdf)
         const xScale_pdf_inverse = d3.scaleLinear()
             .domain(window_x_pdf)
             .range([x_limits[0], x_limits[1]])
         const yScale_pdf = d3.scaleLinear()
             .domain([y_limits_pdf[0], y_limits_pdf[1]])
             .range([window_y_pdf[1], window_y_pdf[0]])
```

With these functions in hand, let us draw the first subplot. We start by drawing the x-axis and its label first, where we define the font-sizes relative to the canvas's width to ensure the font scales with its container's size. Next, we do the same for the y-axis. Finally, we add a label on top.

```html
         // Draw the x axis
         svg
             .append("g")
             .attr("transform", "translate(0," + window_y_pdf[1].toString() + ")")
             .call(d3.axisBottom(xScale_pdf).ticks(5))
             .style("font-size", (12 * width / 600).toString() + "px")
         svg.append("text")
             .attr("transform",
                 "translate(" + (math.mean(window_x_pdf)).toString() + "," + (height * 0.995).toString() + ")")
             .style("text-anchor", "middle")
             .text("x")
             .style("font-size", (12 * width / 600).toString() + "px")
         
         // Draw the y axis
         svg
             .append("g")
             .attr("transform", "translate(" + (window_x_pdf[0]).toString() + ",0)")
             .attr("id", "mainxaxis")
             .call(d3.axisLeft(yScale_pdf))
             .style("font-size", (12 * width / 600).toString() + "px");
         svg.append("text")
             .attr("transform",
                 "translate(" + (width * 0.03).toString() + "," + (math.mean(window_y_pdf)).toString() + ") rotate(270)")
             .style("text-anchor", "middle")
             .text("probability density")
             .style("font-size", (12 * width / 600).toString() + "px")
         
         // Draw the subplot label
         svg.append("text")
             .attr("transform",
                 "translate(" + ((window_x_pdf[1] - window_x_pdf[0])/2 + window_x_pdf[0]).toString() + "," + (window_y_pdf[0]).toString() + ")")
             .style("text-anchor", "middle")
             .text("pdf")
             .style("font-size", (16 * width / 600).toString() + "px")
```

Now, let us add actual content. We start by creating 201 equally-spaced points on the x-axis between -3 and +3 using the `linspace` function we created above, then evaluate the corresponding densities using our `standard_Gaussian_pdf`. The first real feature we add to the subplot is a simple round marker that indicates where we currently are on the pdf. We can add geometric shapes via a syntax like `svg.append("circle)`, then define its attributes via `.attr()`. Defining a circle requires a radius attribute `r`, a horizontal position `cx`, and a vertical position `cy`. We initially place our marker at `x=0`. Note the use of the Scale functions we created earlier to convert subplot coordinates into canvas pixel coordinates. The `fill` and `stroke-width` properties define the style of the marker. An important property is the `id`, which we can use later to select and update this marker.

Next, we concatenate our `x` and `pdf` vectors into a list of dictionaries, which we then convert into pixel coordinates with a `valueline_pdf` function we create. Finally, we add it to the subplot as a `path` via the `svg.append("path")` function. In addition, we want to represent the fact that the cdf (which we will later plot on the right) represents the integral of all pdf values to the left of the current x-value. To this end, we want to create a filled shape that highlights this area. We can do so by creating another path that follows the pdf from the left border to the currently selected value (initially: `x=0`), then moves back to the subplot origin along the x-axis. The path-information `data_fill` is created the same way as before, but now we add it as a `svg.append("path")` that has the `fill` attribute, which - as the name implies - fills the region inside it with a solid color.

```
         // Evaluate the normal pdf
         var x = linspace(-3, 3, 201);
         var pdf = standard_Gaussian_pdf(x);
         
         svg.append("circle")
             .attr("r", 10 * height / 600)
             .attr("cx", xScale_pdf(0))
             .attr("cy", yScale_pdf(standard_Gaussian_pdf([0])))
             .attr("fill", "#666666") // "#c3e7f9"
             .attr("stroke-width", 5 * height / 600)
             .attr("id", "marker_pdf");
         
         // Get the data for the path
         var data_pdf = [];
         for (i = 0; i < x.length; i++) {
             data_pdf.push({
                 x: x[i],
                 y: pdf[i]
             })
         }
         
         
         var valueline_pdf = d3.svg.line()
             .x(function(d) {
                 return xScale_pdf(d.x);
             })
             .y(function(d) {
                 return yScale_pdf(d.y);
             });
         
         svg.append("path")
             .attr("d", valueline_pdf(data_pdf))
             .attr("fill", "none")
             .attr("stroke-width", 3 * height / 600)
             .attr("stroke", "#666666")
             .attr("id", "thatline")
         
         var fill_x, fill_pdf
         var xpos = 0;
         fill_x = linspace(x_limits[0], xpos, 201);
         fill_pdf = standard_Gaussian_pdf(fill_x);
         fill_x.push(xpos)
         fill_x.push(x_limits[0])
         fill_pdf.push(0)
         fill_pdf.push(0)
         var data_fill = [];
         for (i = 0; i < fill_x.length; i++) {
             data_fill.push({
                 x: fill_x[i],
                 y: fill_pdf[i]
             })
         }
         svg.append("path")
             .attr("d", valueline_pdf(data_fill))
             .attr("fill", "#999999")
             .attr("stroke", "None")
             .attr("id", "fill")
             .lower()
```

The next block essentially repeats the same procedure for the right subplot, but replaces the pdf evaluation with a cdf evaluation. We also add a dashed horizontal line that marks the integral value on the y-axis. Go through the code and see if you recognize parallels to the code above.

```
         // Define a subplot for the standard normal
         const y_limits_cdf = [0, 1];
         const window_x_cdf = [width * 0.585, width * 0.985];
         const window_y_cdf = [height * 0.1, height * 0.89];
         
         // Get scaling functions for the x scale and the y_scale
         const xScale_cdf = d3.scaleLinear()
             .domain([x_limits[0], x_limits[1]])
             .range(window_x_cdf)
         const xScale_cdf_inverse = d3.scaleLinear()
             .domain(window_x_cdf)
             .range([x_limits[0], x_limits[1]])
         const yScale_cdf = d3.scaleLinear()
             .domain([y_limits_cdf[0], y_limits_cdf[1]])
             .range([window_y_cdf[1], window_y_cdf[0]])
         
         // Draw the x axis
         svg
             .append("g")
             .attr("transform", "translate(0," + window_y_cdf[1].toString() + ")")
             .call(d3.axisBottom(xScale_cdf).ticks(5))
             .style("font-size", (12 * width / 600).toString() + "px")
         svg.append("text")
             .attr("transform",
                 "translate(" + (math.mean(window_x_cdf)).toString() + "," + (height * 0.995).toString() + ")")
             .style("text-anchor", "middle")
             .text("x")
             .style("font-family", "arial")
             .style("font-size", (12 * width / 600).toString() + "px")
         
         // Draw the y axis
         svg
             .append("g")
             .attr("transform", "translate(" + (window_x_cdf[0]).toString() + ",0)")
             .attr("id", "mainxaxis")
             .call(d3.axisLeft(yScale_cdf))
             .style("font-size", (12 * width / 600).toString() + "px");
         //.call(d3.axisLeft(yScale).tickFormat(""));
         svg.append("text")
             .attr("transform",
                 "translate(" + (width * 0.525).toString() + "," + (math.mean(window_y_cdf)).toString() + ") rotate(270)")
             .style("text-anchor", "middle")
             .text("cumulative probability")
             .style("font-size", (12 * width / 600).toString() + "px")
         
         // Draw the subplot label
         svg.append("text")
             .attr("transform",
                 "translate(" + ((window_x_cdf[1] - window_x_cdf[0])/2 + window_x_cdf[0]).toString() + "," + (window_y_cdf[0]).toString() + ")")
             .style("text-anchor", "middle")
             .text("cdf")
             .style("font-size", (16 * width / 600).toString() + "px")
         
         // Evaluate the normal pdf
         var cdf = standard_Gaussian_cdf(x);
         
         svg.append("circle")
             .attr("r", 10 * height / 600)
             .attr("cx", xScale_cdf(0))
             .attr("cy", yScale_cdf(standard_Gaussian_cdf([0])))
             .attr("fill", "#666666") // "#c3e7f9"
             .attr("stroke-width", 5 * height / 600)
             .attr("id", "marker_cdf");
         
         // Get the data for the path
         var data_cdf = [];
         for (i = 0; i < x.length; i++) {
             data_cdf.push({
                 x: x[i],
                 y: cdf[i]
             })
         }
         
         var valueline_cdf = d3.svg.line()
             .x(function(d) {
                 return xScale_cdf(d.x);
             })
             .y(function(d) {
                 return yScale_cdf(d.y);
             });
         
         svg.append("path")
             .attr("d", valueline_cdf(data_cdf))
             .attr("fill", "none")
             .attr("stroke-width", 3 * height / 600)
             .attr("stroke", "#666666") //"#4794c1")
             .attr("id", "thatline")
         
         svg.append('line')
           .attr('x1', window_x_cdf[0])
           .attr('x2', window_x_cdf[1])
           .attr('y1', yScale_cdf(standard_Gaussian_cdf([0])))
           .attr('y2', yScale_cdf(standard_Gaussian_cdf([0])))
           .attr('stroke', '#000000')
           .attr("stroke-width", 3 * height / 600)
           .style("stroke-dasharray", ((10 * height / 600).toString()+","+(5 * height / 600).toString()))
           .attr("id","line_cdf")
           .lower();
```

So far, this element is purely static. It's time to introduce some interactivity! We start by defining three new variables: `movex` (x-position of the mouse), `movey` (y-position of the mouse), and `xpos` (what x-value we currently are looking at).

Make interactive elements with d3 is extremely easy. Here, for instance, we simply use the syntax `svg.on("mousemove")`, which calls a function whenever the mouse moves over the canvas. We then define an unnamed function that reads out the current coordinates of the cursor (`d3.event.x` and `d3.event.y`), then does whatever we want with it. For this element, we choose to only update the figure if the cursor's x-position is within one of the subplots. We can test this with a simple if-clause: 

If the cursor's x-position is within the first subplot (i.e., `(movex >= window_x_pdf[0] && movex <= window_x_pdf[1]) == True`), then we convert the x-position to an x-value using the `xScale_pdf_inverse` function we created before. We then 
- select the circular position markers for the pdf (`d3.select("#marker_pdf")`) and cdf (`d3.select("#marker_cdf")`) we created before via their IDs, and update their positions in both subplots. 
- Likewise, we update the fill path in the pdf plot (`d3.select("#fill")`) with the new `xpos`, and 
- update the horizontal bar in the cdf subplot (`d3.select("#line_cdf")`). 
If our cursor is within the second subplot, the second else-if clause gets activated. This clause basically does the same thing as the one for the first subplot, but uses the helper function `xScale_cdf_inverse` instead, thereby ensuring that we update both subplots by hovering over either one.

One of the nice things about these interactive JavaScript elements is that you can make the updates to your elements as complex as you want, as long as you find a way to code it. The sky is the limit! In this simple example, we really just update the properties of pre-existing elements, but in principle you can also dynamically create new elements, destroy old elements, and so on. 

Finally, we close all open environments, and are done with this simple interactive element!

```
         // Shift the marker around on mouseover; restrict it to the contour
         var movex, movey, xpos
         
         svg
             .on("mousemove", function() {
                 // Get the current mouseover coordinates
                 movex = d3.event.x;
                 movey = d3.event.y;
         
                 
                 if (movex >= window_x_pdf[0] && movex <= window_x_pdf[1]) {
                 	xpos = xScale_pdf_inverse(movex);
                 
                   d3.select("#marker_pdf")
                       .attr("cx", xScale_pdf(xpos))
                       .attr("cy", yScale_pdf(standard_Gaussian_pdf([xpos])));
                   d3.select("#marker_cdf")
                       .attr("cx", xScale_cdf(xpos))
                       .attr("cy", yScale_cdf(standard_Gaussian_cdf([xpos])));
                       
                   fill_x = linspace(x_limits[0], xpos, 201);
                   fill_pdf = standard_Gaussian_pdf(fill_x);
                   fill_x.push(xpos)
                   fill_x.push(x_limits[0])
                   fill_pdf.push(0)
                   fill_pdf.push(0)
                   var data_fill = [];
                   for (i = 0; i < fill_x.length; i++) {
                       data_fill.push({
                           x: fill_x[i],
                           y: fill_pdf[i]
                       })
                   }
                   d3.select("#fill")
                       .attr("d", valueline_pdf(data_fill))
                       .lower();
                       
                       
                   d3.select("#line_cdf")
                     .attr('y1', yScale_cdf(standard_Gaussian_cdf([xpos])))
                     .attr('y2', yScale_cdf(standard_Gaussian_cdf([xpos])))
                     .lower();
                   
                 } else if (movex >= window_x_cdf[0] && movex <= window_x_cdf[1]) {
                 	xpos = xScale_cdf_inverse(movex);
                   d3.select("#marker_pdf")
                       .attr("cx", xScale_pdf(xpos))
                       .attr("cy", yScale_pdf(standard_Gaussian_pdf([xpos])));
                   d3.select("#marker_cdf")
                       .attr("cx", xScale_cdf(xpos))
                       .attr("cy", yScale_cdf(standard_Gaussian_cdf([xpos])));
                       
                   fill_x = linspace(x_limits[0], xpos, 201);
                   fill_pdf = standard_Gaussian_pdf(fill_x);
                   fill_x.push(xpos)
                   fill_x.push(x_limits[0])
                   fill_pdf.push(0)
                   fill_pdf.push(0)
                   var data_fill = [];
                   for (i = 0; i < fill_x.length; i++) {
                       data_fill.push({
                           x: fill_x[i],
                           y: fill_pdf[i]
                       })
                   }
                   d3.select("#fill")
                       .attr("d", valueline_pdf(data_fill))
                   d3.select("#fill_cdf")
                     .attr('y', yScale_cdf(standard_Gaussian_cdf([xpos])))
                     .attr('height', window_y_cdf[1] - yScale_cdf(standard_Gaussian_cdf([xpos])))
                     .lower();
                     
                   d3.select("#line_cdf")
                     .attr('y1', yScale_cdf(standard_Gaussian_cdf([xpos])))
                     .attr('y2', yScale_cdf(standard_Gaussian_cdf([xpos])))
                     .lower();
                       
                 }
         
             });
         
      </script>
   </body>
</html>
```

## HTML code for the pdf/cdf element

Here is the code for the element above in full:

```html
<!DOCTYPE html>
<html>
   <head>
      <script src="https://unpkg.com/mathjs/lib/browser/math.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min.js"></script>  
      <script src="https://d3js.org/d3.v4.min.js"></script>
      <style>
         body{
         margin: 0; overflow: hidden;
         font-family: Helvetica, sans-serif;
         }
      </style>
   </head>
   <!-- Create a div where the graph will take place -->
   <div id="my_datavisualization">
      <svg id="click" xmlns="http://www.w3.org/2000/svg">
      </svg>
   </div>
   <body>
      <script>
         // Get the viewport height and width
         const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
         const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
         
         // Fit to viewport
         var height = vw * 0.5;
         var width = vw;
         
         // Create the canvas. We will use only part of it for the main plot
         var svg = d3.select("#click") // This selects the div
             .attr("width", width) // This defines the canvas' width
             .attr("height", height) // This defines the canvas' height
             
         function linspace(start, end, resolution) {
             var spacing = [];
             // Go through a for-loop
             var i;
             for (i = 0; i < resolution; i++) {
                 spacing.push(start + (end - start) * i / (resolution - 1))
             }
             return spacing; // The function returns the linspace between p1 and p2
         }
         
         function standard_Gaussian_pdf(x) {
             mean = 0;
             std = 1;
             // Create a dummy variable
             var result = [];
             normalize = math.dotDivide(
                 1,
                 math.sqrt(
                     math.dotMultiply(
                         math.dotMultiply(
                             2,
                             math.PI),
                         math.pow(
                             std,
                             2))));
         
             var i;
             for (i = 0; i < x.length; i++) {
                 // Evaluate the first element of the Gaussian mixture
                 expon = math.exp(
                     -math.dotDivide(
                         math.pow(
                             x[i] - mean,
                             2),
                         math.dotMultiply(
                             2,
                             math.pow(
                                 std,
                                 2))))
                 temp = math.dotMultiply(
                     normalize,
                     expon)
                 result.push(temp)
             }
             return result
         }
         
         function standard_Gaussian_cdf(x) {
             mean = 0;
             std = 1;
             // Create a dummy variable
             var result = [];
             for (i = 0; i < x.length; i++) {
                 // Evaluate the first element of the Gaussian mixture
                 temp = 0.5 * (1 + math.erf(x[i] /math.sqrt(2)))
                 result.push(temp)
             }
             return result
         }
             
         // Define a subplot for the standard normal
         const x_limits = [-3, 3];
         const y_limits_pdf = [0, 1 / math.sqrt(2 * math.pi) * 1.2];
         
         const window_x_pdf = [width * 0.1, width * 0.5];
         const window_y_pdf = [height * 0.1, height * 0.89];
         
         // Get scaling functions for the x scale and the y_scale
         const xScale_pdf = d3.scaleLinear()
             .domain([x_limits[0], x_limits[1]])
             .range(window_x_pdf)
         const xScale_pdf_inverse = d3.scaleLinear()
             .domain(window_x_pdf)
             .range([x_limits[0], x_limits[1]])
         const yScale_pdf = d3.scaleLinear()
             .domain([y_limits_pdf[0], y_limits_pdf[1]])
             .range([window_y_pdf[1], window_y_pdf[0]])
         
         // Draw the x axis
         svg
             .append("g")
             .attr("transform", "translate(0," + window_y_pdf[1].toString() + ")")
             .call(d3.axisBottom(xScale_pdf).ticks(5))
             .style("font-size", (12 * width / 600).toString() + "px")
         svg.append("text")
             .attr("transform",
                 "translate(" + (math.mean(window_x_pdf)).toString() + "," + (height * 0.995).toString() + ")")
             .style("text-anchor", "middle")
             .text("x")
             .style("font-size", (12 * width / 600).toString() + "px")
         
         // Draw the y axis
         svg
             .append("g")
             .attr("transform", "translate(" + (window_x_pdf[0]).toString() + ",0)")
             .attr("id", "mainxaxis")
             .call(d3.axisLeft(yScale_pdf))
             .style("font-size", (12 * width / 600).toString() + "px");
         svg.append("text")
             .attr("transform",
                 "translate(" + (width * 0.03).toString() + "," + (math.mean(window_y_pdf)).toString() + ") rotate(270)")
             .style("text-anchor", "middle")
             .text("probability density")
             .style("font-size", (12 * width / 600).toString() + "px")
         
         // Draw the subplot label
         svg.append("text")
             .attr("transform",
                 "translate(" + ((window_x_pdf[1] - window_x_pdf[0])/2 + window_x_pdf[0]).toString() + "," + (window_y_pdf[0]).toString() + ")")
             .style("text-anchor", "middle")
             .text("pdf")
             .style("font-size", (16 * width / 600).toString() + "px")
         
         // Evaluate the normal pdf
         var x = linspace(-3, 3, 201);
         var pdf = standard_Gaussian_pdf(x);
         
         svg.append("circle")
             .attr("r", 10 * height / 600)
             .attr("cx", xScale_pdf(0))
             .attr("cy", yScale_pdf(standard_Gaussian_pdf([0])))
             .attr("fill", "#666666") // "#c3e7f9"
             .attr("stroke-width", 5 * height / 600)
             .attr("id", "marker_pdf");
         
         // Get the data for the path
         var data_pdf = [];
         for (i = 0; i < x.length; i++) {
             data_pdf.push({
                 x: x[i],
                 y: pdf[i]
             })
         }
         
         
         var valueline_pdf = d3.svg.line()
             .x(function(d) {
                 return xScale_pdf(d.x);
             })
             .y(function(d) {
                 return yScale_pdf(d.y);
             });
         
         svg.append("path")
             .attr("d", valueline_pdf(data_pdf))
             .attr("fill", "none")
             .attr("stroke-width", 3 * height / 600)
             .attr("stroke", "#666666") //"#4794c1")
             .attr("id", "thatline")
         
         var fill_x, fill_pdf
         var xpos = 0;
         fill_x = linspace(x_limits[0], xpos, 201);
         fill_pdf = standard_Gaussian_pdf(fill_x);
         fill_x.push(xpos)
         fill_x.push(x_limits[0])
         fill_pdf.push(0)
         fill_pdf.push(0)
         var data_fill = [];
         for (i = 0; i < fill_x.length; i++) {
             data_fill.push({
                 x: fill_x[i],
                 y: fill_pdf[i]
             })
         }
         svg.append("path")
             .attr("d", valueline_pdf(data_fill))
             .attr("fill", "#999999")
             .attr("stroke", "None") //"#4794c1")
             .attr("id", "fill")
             .lower()
             
         // Define a subplot for the standard normal
         const y_limits_cdf = [0, 1];
         const window_x_cdf = [width * 0.585, width * 0.985];
         const window_y_cdf = [height * 0.1, height * 0.89];
         
         // Get scaling functions for the x scale and the y_scale
         const xScale_cdf = d3.scaleLinear()
             .domain([x_limits[0], x_limits[1]])
             .range(window_x_cdf)
         const xScale_cdf_inverse = d3.scaleLinear()
             .domain(window_x_cdf)
             .range([x_limits[0], x_limits[1]])
         const yScale_cdf = d3.scaleLinear()
             .domain([y_limits_cdf[0], y_limits_cdf[1]])
             .range([window_y_cdf[1], window_y_cdf[0]])
         
         // Draw the x axis
         svg
             .append("g")
             .attr("transform", "translate(0," + window_y_cdf[1].toString() + ")")
             .call(d3.axisBottom(xScale_cdf).ticks(5))
             .style("font-size", (12 * width / 600).toString() + "px")
         svg.append("text")
             .attr("transform",
                 "translate(" + (math.mean(window_x_cdf)).toString() + "," + (height * 0.995).toString() + ")")
             .style("text-anchor", "middle")
             .text("x")
             .style("font-family", "arial")
             .style("font-size", (12 * width / 600).toString() + "px")
         
         // Draw the y axis
         svg
             .append("g")
             .attr("transform", "translate(" + (window_x_cdf[0]).toString() + ",0)")
             .attr("id", "mainxaxis")
             .call(d3.axisLeft(yScale_cdf))
             .style("font-size", (12 * width / 600).toString() + "px");
         //.call(d3.axisLeft(yScale).tickFormat(""));
         svg.append("text")
             .attr("transform",
                 "translate(" + (width * 0.525).toString() + "," + (math.mean(window_y_cdf)).toString() + ") rotate(270)")
             .style("text-anchor", "middle")
             .text("cumulative probability")
             .style("font-size", (12 * width / 600).toString() + "px")
         
         // Draw the subplot label
         svg.append("text")
             .attr("transform",
                 "translate(" + ((window_x_cdf[1] - window_x_cdf[0])/2 + window_x_cdf[0]).toString() + "," + (window_y_cdf[0]).toString() + ")")
             .style("text-anchor", "middle")
             .text("cdf")
             .style("font-size", (16 * width / 600).toString() + "px")
         
         // Evaluate the normal pdf
         var cdf = standard_Gaussian_cdf(x);
         
         svg.append("circle")
             .attr("r", 10 * height / 600)
             .attr("cx", xScale_cdf(0))
             .attr("cy", yScale_cdf(standard_Gaussian_cdf([0])))
             .attr("fill", "#666666") // "#c3e7f9"
             .attr("stroke-width", 5 * height / 600)
             .attr("id", "marker_cdf");
         
         // Get the data for the path
         var data_cdf = [];
         for (i = 0; i < x.length; i++) {
             data_cdf.push({
                 x: x[i],
                 y: cdf[i]
             })
         }
         
         var valueline_cdf = d3.svg.line()
             .x(function(d) {
                 return xScale_cdf(d.x);
             })
             .y(function(d) {
                 return yScale_cdf(d.y);
             });
         
         svg.append("path")
             .attr("d", valueline_cdf(data_cdf))
             .attr("fill", "none")
             .attr("stroke-width", 3 * height / 600)
             .attr("stroke", "#666666") //"#4794c1")
             .attr("id", "thatline")
         
         svg.append('line')
           .attr('x1', window_x_cdf[0])
           .attr('x2', window_x_cdf[1])
           .attr('y1', yScale_cdf(standard_Gaussian_cdf([0])))
           .attr('y2', yScale_cdf(standard_Gaussian_cdf([0])))
           .attr('stroke', '#000000')
           .attr("stroke-width", 3 * height / 600)
           .style("stroke-dasharray", ((10 * height / 600).toString()+","+(5 * height / 600).toString()))
           .attr("id","line_cdf")
           .lower();
           
         
         // Shift the marker around on mouseover; restrict it to the contour
         var movex, movey, xpos
         
         svg
             .on("mousemove", function() {
                 // Get the current mouseover coordinates
                 movex = d3.event.x;
                 movey = d3.event.y;
         
                 
                 if (movex >= window_x_pdf[0] && movex <= window_x_pdf[1]) {
                 	xpos = xScale_pdf_inverse(movex);
                 
                   d3.select("#marker_pdf")
                       .attr("cx", xScale_pdf(xpos))
                       .attr("cy", yScale_pdf(standard_Gaussian_pdf([xpos])));
                   d3.select("#marker_cdf")
                       .attr("cx", xScale_cdf(xpos))
                       .attr("cy", yScale_cdf(standard_Gaussian_cdf([xpos])));
                       
                   fill_x = linspace(x_limits[0], xpos, 201);
                   fill_pdf = standard_Gaussian_pdf(fill_x);
                   fill_x.push(xpos)
                   fill_x.push(x_limits[0])
                   fill_pdf.push(0)
                   fill_pdf.push(0)
                   var data_fill = [];
                   for (i = 0; i < fill_x.length; i++) {
                       data_fill.push({
                           x: fill_x[i],
                           y: fill_pdf[i]
                       })
                   }
                   d3.select("#fill")
                       .attr("d", valueline_pdf(data_fill))
                       .lower();
                       
                       
                   d3.select("#line_cdf")
                     .attr('y1', yScale_cdf(standard_Gaussian_cdf([xpos])))
                     .attr('y2', yScale_cdf(standard_Gaussian_cdf([xpos])))
                     .lower();
                   
                 } else if (movex >= window_x_cdf[0] && movex <= window_x_cdf[1]) {
                 	xpos = xScale_cdf_inverse(movex);
                   d3.select("#marker_pdf")
                       .attr("cx", xScale_pdf(xpos))
                       .attr("cy", yScale_pdf(standard_Gaussian_pdf([xpos])));
                   d3.select("#marker_cdf")
                       .attr("cx", xScale_cdf(xpos))
                       .attr("cy", yScale_cdf(standard_Gaussian_cdf([xpos])));
                       
                   fill_x = linspace(x_limits[0], xpos, 201);
                   fill_pdf = standard_Gaussian_pdf(fill_x);
                   fill_x.push(xpos)
                   fill_x.push(x_limits[0])
                   fill_pdf.push(0)
                   fill_pdf.push(0)
                   var data_fill = [];
                   for (i = 0; i < fill_x.length; i++) {
                       data_fill.push({
                           x: fill_x[i],
                           y: fill_pdf[i]
                       })
                   }
                   d3.select("#fill")
                       .attr("d", valueline_pdf(data_fill))
                   d3.select("#fill_cdf")
                     .attr('y', yScale_cdf(standard_Gaussian_cdf([xpos])))
                     .attr('height', window_y_cdf[1] - yScale_cdf(standard_Gaussian_cdf([xpos])))
                     .lower();
                     
                   d3.select("#line_cdf")
                     .attr('y1', yScale_cdf(standard_Gaussian_cdf([xpos])))
                     .attr('y2', yScale_cdf(standard_Gaussian_cdf([xpos])))
                     .lower();
                       
                 }
         
             });
         
      </script>
   </body>
</html>


```
