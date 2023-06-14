

// Declaracion de var

var procesador;
var procesadores;
var procesadorPrice;
var precioProce = 0;

var motherboard;
var motherboards;
var motherboardPrice;
var precioMother = 0;

var graphicCard;
var graphicCards;
var graphicCardPrice;
var precioGraphic = 0;

var ram;
var rams;
var ramPrice;
var precioRam = 0;

var powerSupply;
var powerSupplys;
var powerSupplyPrice;
var precioPower = 0;

var storage;
var storages;
var storagePrice;
var precioStorage = 0;


var carritoPrice;
var totalPrice;
var articleList;
var selectedImg;


    // Funciones 

//precio actualizado

function precio() {
    carritoPrice.innerText = totalPrice.innerText = (precioGraphic + precioMother + precioPower + precioProce + precioRam + precioStorage);
}

//inicio drag

function movingImg(event) {
        selectedImg = event.target;
    }

//dragover y cambio de componente

function cambiarComponente(event) {
    switch (selectedImg.classList.value) {
        case "procesadorOption":
            procesador.src = selectedImg.src;
            procesadorPrice.innerText = selectedImg.alt;
            precioProce = parseInt(selectedImg.alt);
            precio();
            break;

        case "motherboardOption":
            motherboard.src = selectedImg.src;
            motherboardPrice.innerText = selectedImg.alt;
            precioMother = parseInt(selectedImg.alt);
            precio();
            break;
        
        case "graphicCardOption":
            graphicCard.src = selectedImg.src;
            graphicCardPrice.innerText = selectedImg.alt;
            precioGraphic = parseInt(selectedImg.alt);
            precio();
            break;

        case "ramOption":
            ram.src = selectedImg.src;
            ramPrice.innerText = selectedImg.alt;
            precioRam = parseInt(selectedImg.alt);
            precio();
            break;

        case "powerSupplyOption":
            powerSupply.src = selectedImg.src;
            powerSupplyPrice.innerText = selectedImg.alt;
            precioPower = parseInt(selectedImg.alt);
            precio();
            break;

        case "storageOption":
            storage.src = selectedImg.src;
            storagePrice.innerText = selectedImg.alt;
            precioStorage = parseInt(selectedImg.alt);
            precio();
            break;

        default:
            break;
    }
}

//funcion principal

function loadedDOM() {

    // captura de elementos necesarios

    procesador = document.getElementById("procesadorSelected");
    procesadorPrice = document.getElementById("procesadorPrice");

    motherboard = document.getElementById("motherboardSelected");
    motherboardPrice = document.getElementById("motherboardPrice");

    graphicCard = document.getElementById("graphicCardSelected");
    graphicCardPrice = document.getElementById("graphicCardPrice");

    ram = document.getElementById("ramSelected");
    ramPrice = document.getElementById("ramPrice");

    powerSupply = document.getElementById("powerSupplySelected");
    powerSupplyPrice = document.getElementById("powerSupplyPrice");

    storage = document.getElementById("storageSelected");
    storagePrice = document.getElementById("storagePrice");

    carritoPrice = document.getElementById("carritoPrice")
    totalPrice = document.getElementById("finalPrice");


    // Select Proce

    procesadores = document.getElementsByClassName("procesadorOption");
    

    for (let item of procesadores) {
        item.addEventListener("dragstart",movingImg);
    }

    procesador.addEventListener("dragover",event=>{event.preventDefault()});
    procesador.addEventListener("drop",cambiarComponente);

    // Select mother

    motherboards = document.getElementsByClassName("motherboardOption");
    for (let item of motherboards) {
        item.addEventListener("dragstart",movingImg);
    }

    motherboard.addEventListener("dragover",event=>{event.preventDefault()});
    motherboard.addEventListener("drop",cambiarComponente);

    // Select graphicCard

    graphicCards = document.getElementsByClassName("graphicCardOption");
    for (let item of graphicCards) {
        item.addEventListener("dragstart",movingImg);
    }

    graphicCard.addEventListener("dragover",event=>{event.preventDefault()});
    graphicCard.addEventListener("drop",cambiarComponente);

    // Select ram

    rams = document.getElementsByClassName("ramOption");
    for (let item of rams) {
        item.addEventListener("dragstart",movingImg);
    }

    ram.addEventListener("dragover",event=>{event.preventDefault()});
    ram.addEventListener("drop",cambiarComponente);

    // Select powerSupply

    powerSupplys = document.getElementsByClassName("powerSupplyOption");
    for (let item of powerSupplys) {
        item.addEventListener("dragstart",movingImg);
    }

    powerSupply.addEventListener("dragover",event=>{event.preventDefault()});
    powerSupply.addEventListener("drop",cambiarComponente);

    // Select storage

    storages = document.getElementsByClassName("storageOption");
    for (let item of storages) {
        item.addEventListener("dragstart",movingImg);
    }

    storage.addEventListener("dragover",event=>{event.preventDefault()});
    storage.addEventListener("drop",cambiarComponente);
}


// inicio programa

document.addEventListener("DOMContentLoaded",loadedDOM);