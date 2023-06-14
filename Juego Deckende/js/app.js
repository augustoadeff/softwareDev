/*
*   Check main form data
*
*   @author Augusto Adeff <augusto.2002@hotmail.com>
*   @link https://github.com/augustoadeff GitHub
*/


// valores de var

var nickInput;
var sizeInput;

var mainForm;
var error;

var avatarItems;
var selectedImg;
var avatarContainer;


// funciones de evento 

/**
 * Check main form
 * @date 2023-05-30
 * @param {EventObject} event event from submit
 */
function comprobarForm(event) {
    console.log(avatarContainer);
    if (nickInput.value.match(/(?<!\S)[0-9]/)) 
    {
        nickInput.focus();
        error.innerText="El nick no puede comenzar con un numero";
        event.preventDefault();
        return false;
    }

    else if (sizeInput.value== "none")
    {
        error.innerText="No hay tamaño seleccionado";
        sizeInput.focus();
        event.preventDefault();
        return false;
    }

    userData(nickInput, sizeInput, avatarContainer);
    storyUsers(nickInput);
    
    return true;
}

function movingImg(event) {
    selectedImg = event.target;
}

function cambiarImg(event) {
    avatarContainer.src = selectedImg.src;
}

/**
 * Load objects from DOM and form events
 * @date 2023-05-30
 */
function loadedDOM() {

    // capture necessary element 
    nickInput = document.getElementById("nick");
    sizeInput = document.getElementById("size");
    mainForm = document.getElementById("mainForm");
    error = document.getElementById("error");

    // Comprobar error 
    if (sessionStorage.getItem("error")!=null) 
    {
        error.innerText=sessionStorage.getItem("error");
        sessionStorage.removeItem("error");
    }

    // D&D Events

    // Select Avatar
    avatarItems = document.getElementsByClassName("avatarImg");
    
    
    for (let item of avatarItems) 
    {
        item.addEventListener("dragstart",movingImg);
    }

    // Drop selected avatar and change it

    avatarContainer = document.getElementById("avatarSeleccionado");
    avatarContainer.addEventListener("dragover",event=>{event.preventDefault()});
    avatarContainer.addEventListener("drop",cambiarImg);

    // launch 

    mainForm.addEventListener("submit",comprobarForm);
}


// Event init
document.addEventListener("DOMContentLoaded",loadedDOM);
geoLocation();