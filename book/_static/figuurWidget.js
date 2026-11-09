/*  Note that ipywidgets tend to behave differently from other interactive visualization libraries. 
*   They interact both with Javascript, and with Python. Some functionality in ipywidgets may not work in default Jupyter Book pages 
*   (because no Python kernel is running). You may be able to get around this with tools for remote kernels, like thebe.
*
*   Javascript is het makkelijkst voor nu omdat sommige functionaliteiten in python niet beschikbaar zijn. 
*/

const addFigureForm = () => {

    // Dynamically create and append the form
    var form = document.createElement('form');

    // Name input label + form
    var nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.textContent = 'Label:'; //site tekst
    form.appendChild(nameLabel);    
    form.appendChild(document.createElement('br'));

    // Referentienaam
    var nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('id', 'name');
    nameInput.setAttribute('name', 'name');
    nameInput.setAttribute('required', 'true');
    form.appendChild(nameInput);
    form.appendChild(document.createElement('br'));

    // Image location input label + form
    var imageLabel = document.createElement('label');
    imageLabel.setAttribute('for', 'imageLocation');
    imageLabel.textContent = 'Image Location + name + extension:'; //site tekst
    form.appendChild(imageLabel);
    form.appendChild(document.createElement('br'));

    var imageInput = document.createElement('input');
    imageInput.setAttribute('type', 'text');
    imageInput.setAttribute('id', 'imageLocation');
    imageInput.setAttribute('name', 'imageLocation');
    imageInput.setAttribute('required', 'true');
    form.appendChild(imageInput);
    form.appendChild(document.createElement('br'));

    // Caption input label + form
    var captionLabel = document.createElement('label');
    captionLabel.setAttribute('for', 'caption');
    captionLabel.textContent = 'Caption:';
    form.appendChild(captionLabel);
    form.appendChild(document.createElement('br'));


    var captionInput = document.createElement('input');
    captionInput.setAttribute('type', 'text');
    captionInput.setAttribute('id', 'caption');
    captionInput.setAttribute('name', 'caption');
    captionInput.setAttribute('required', 'true');
    form.appendChild(captionInput);
    form.appendChild(document.createElement('br'));

    // Radio buttons
    var radioLabel = document.createElement('label');
    radioLabel.textContent = 'Select type:';
    form.appendChild(radioLabel);
    form.appendChild(document.createElement('br'));

    var types = ['figure', 'table'];
    for (var i = 0; i < types.length; i++) {
        var radioInput = document.createElement('input');
        radioInput.setAttribute('type', 'radio');
        radioInput.setAttribute('id', types[i]);
        radioInput.setAttribute('name', 'type');
        radioInput.setAttribute('value', types[i]);
        form.appendChild(radioInput);

        var radioInputLabel = document.createElement('label');
        radioInputLabel.setAttribute('for', types[i]);
        radioInputLabel.textContent = types[i].charAt(0).toUpperCase() + types[i].slice(1);
        form.appendChild(radioInputLabel);

        form.appendChild(document.createElement('br'));
    }

    // Submit button
    var submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'button');
    submitButton.textContent = 'Submit';

    // Function to handle form submission
    function submitForm() {
        // Get input values
        var name = document.getElementById('name').value;
        var imageLocation = document.getElementById('imageLocation').value;
        var caption = document.getElementById('caption').value;

        // Get selected radio button value
        var selectedType = document.querySelector('input[name="type"]:checked');
        var type = selectedType ? selectedType.value : null;
        
        if(type == "figure"){
            addItem(createFigureReference(imageLocation, name, caption))
        } else if(type == "table") {
            addItem(createTableReference(caption, name))
        }
    }

    submitButton.addEventListener('click', submitForm);
    form.appendChild(document.createElement('br'));
    form.appendChild(submitButton);

    // Append the form to the body
    document.getElementById("figuur_formulier").appendChild(form);
}

/* LOCAL STORAGE TO SAVE REFERENCES */

let exerciseTarget = "listContainerex";
let figureTarget = "listContainer";

// Function to save the array to localStorage
function saveArray(arr, location = 'savedReferences') {
    localStorage.setItem(location, JSON.stringify(arr));
}

// Function to display the array on the page
function displayArray(location = 'savedReferences', target = figureTarget) {
    var storedArray = JSON.parse(localStorage.getItem(location)) || [];
    var listContainer = document.getElementById(target);
    listContainer.innerHTML = '<p><strong>Stored Array:</strong></p>';

    if (storedArray.length === 0) {
        listContainer.innerHTML += '<p>No items in the array.</p>';
    } else {
        var ul = document.createElement('ul');

        storedArray.forEach(function(item, index) {
            var li = document.createElement('li');
            let btn = document.createElement('button');
            btn.onclick = function() {removeItem(index, location, target)};
            li.innerHTML = item;
            btn.innerHTML = "Remove";
            li.appendChild(btn);
            ul.appendChild(li);
        });

        listContainer.appendChild(ul);
    }
}

// Function to retrieve the array from localStorage
function getArray(location = 'savedReferences') {
    return JSON.parse(localStorage.getItem(location)) || [];
}

// Function to add a new item to the array and save it
function addItem(newItem, location = 'savedReferences', target = figureTarget) {
    var storedArray = JSON.parse(localStorage.getItem(location)) || [];
    storedArray.push(newItem);
    saveArray(storedArray, location);
    displayArray(location, target);
}

// Function to remove an item from the array and save it
function removeItem(index, location = 'savedReferences', target = figureTarget) {
    var storedArray = JSON.parse(localStorage.getItem(location)) || [];
    storedArray.splice(index, 1);
    saveArray(storedArray, location);
    displayArray(location, target);
}

function addExerciseForm(){
    // Create and append form elements
    var form = document.createElement('form');

    // Exercise Name input
    var exerciseNameLabel = document.createElement('label');
    exerciseNameLabel.textContent = 'Exercise Name:';
    form.appendChild(exerciseNameLabel);
    form.appendChild(document.createElement('br'));


    var exerciseNameInput = document.createElement('input');
    exerciseNameInput.setAttribute('type', 'text');
    exerciseNameInput.setAttribute('id', 'exerciseName');
    form.appendChild(exerciseNameInput);
    form.appendChild(document.createElement('br'));

    // Solution Name input
    var solutionNameLabel = document.createElement('label');
    solutionNameLabel.textContent = 'Solution Name:';
    form.appendChild(solutionNameLabel);
    form.appendChild(document.createElement('br'));


    var solutionNameInput = document.createElement('input');
    solutionNameInput.setAttribute('type', 'text');
    solutionNameInput.setAttribute('id', 'solutionName');
    form.appendChild(solutionNameInput);
    form.appendChild(document.createElement('br'));

    // Exercise Text input (larger textarea)
    var exerciseTextLabel = document.createElement('label');
    exerciseTextLabel.textContent = 'Exercise Text:';
    form.appendChild(exerciseTextLabel);
    form.appendChild(document.createElement('br'));


    var exerciseTextInput = document.createElement('textarea');
    exerciseTextInput.setAttribute('id', 'exerciseText');
    form.appendChild(exerciseTextInput);
    form.appendChild(document.createElement('br'));

    // Solution Text input (larger textarea)
    var solutionTextLabel = document.createElement('label');
    solutionTextLabel.textContent = 'Solution Text:';
    form.appendChild(solutionTextLabel);
    form.appendChild(document.createElement('br'));


    var solutionTextInput = document.createElement('textarea');
    solutionTextInput.setAttribute('id', 'solutionText');
    form.appendChild(solutionTextInput);
    form.appendChild(document.createElement('br'));

    // Function to handle form submission
    function submitForm() {
        // Get input values
        var exerciseName = document.getElementById('exerciseName').value;
        var solutionName = document.getElementById('solutionName').value;
        var exerciseText = document.getElementById('exerciseText').value;
        var solutionText = document.getElementById('solutionText').value;

        addItem(createExercise(exerciseName,solutionName,exerciseText,solutionText), 'savedExercises', exerciseTarget);
    }

    // Submit button
    var submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'button');
    submitButton.textContent = 'Submit';
    submitButton.addEventListener('click', submitForm);
    form.appendChild(submitButton);

    // Append the form to the body
    document.getElementById("exform").appendChild(form);
}

//Via voorbeeld boltzmann
const createFigureReference = (path, name, caption) => {
    return "<b>Figuur code: </b><br/>"
        +"```{figure} " + path + "<br/>" 
        + "--- <br/>"
        +  "name: " + name + "<br/>"
        + "---<br/>"
        + caption + "<br/> ```<br/>" 
        + "<b>Figuur referentie: </b><br/>" 
        + "{numref}`{number} &lt" + name + "&gt`";
}

//Via https://jupyterbook.org/v1/content/references.html#reference-tables
const createTableReference = (caption, name) => {
    return "<b> tabel code: </b><br/>"
    +"```{table} " + caption + "<br/>"
    +":name: " + name + "<br/>"
    +"hier de code van de tabel </br>"
    +"``` <br/>"
    +"<b> tabel referentie: </b><br/>"
    + "{numref}`" + name + "`";
}


const createExercise = (exerciseName,solutionName,exerciseText,solutionText) => {
    return "<b> Exercise code: </b> <br/>"
    + "```{exercise} <br/>"
    +":label:" + exerciseName + "<br/>"
    + exerciseText + "<br/>"
    + "``` <br/>"
    + "<b> Solution code: </b> <br/>"
    + "````{solution}" + exerciseName + " <br/>"
    +":label:" + solutionName + "<br/>"
    + solutionText + "<br/>"
    + "```` <br/>";
}


document.addEventListener("DOMContentLoaded", () => {
    addExerciseForm();
    displayArray('savedExercises', exerciseTarget);
});

document.addEventListener("DOMContentLoaded", () => {
    addFigureForm();
    displayArray();
});