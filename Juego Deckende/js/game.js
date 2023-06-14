

var clickOn = false;
var adyacente = [];
var idMarcados= [];
var markedClass;
var panelSize;
var intervalId;

/*
 * Generar numero random 
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


/*
 * rellenar info de user
 */
function fillUserData() {
    document.getElementById("nick").value = nick;
    document.getElementById("avatar").src = avatar;

    panelSize=parseInt(size);
}

/*
 * Tamaño y colores del panel de juego
 */
function gamePad() {

    document.getElementById("game").style.gridTemplateColumns="repeat("+size+", 1fr)";
    document.getElementById("game").style.gridTemplateRows="repeat("+size+", 1fr)";

    let items="";
    let color= ["green", "red"];
    let colorRandom=0;
    for (let i = 0; i < (parseInt(size)*parseInt(size)); i++) 
    {
        colorRandom=getRandomInt(2);
        items+=`<div class="containerItem"><div id="${i}" class="item ${color[colorRandom]}"></div></div>`;
    }

    document.getElementById("game").innerHTML = items;

}


function adyacenteCalculator(idMarcado) {
    adyacente = [];
    // adyacente superior 
    if ((idMarcado-panelSize)>=0) adyacente.push(idMarcado-panelSize);
    //adyacente inferior
    if ((idMarcado+panelSize)<(panelSize*panelSize)) adyacente.push(idMarcado+panelSize);
    //adyacente izquierdo
    if ((idMarcado%panelSize)>0) adyacente.push(idMarcado-1);
    //adyacente derecho 
    if (((idMarcado+1)%panelSize)>0) adyacente.push(idMarcado+1);
}

function countDown() {
    let time = parseInt(document.getElementById("time").value)-1;
    document.getElementById("time").value=time
}

/*
 * Eventos del juego */
function programGameEvents() {
    const items = document.getElementsByClassName("item");
    for (let item of items) 
    {
        item.addEventListener("mousedown", startTick);
        item.addEventListener("mouseover", keepTicking);   
    }

    document.addEventListener("mouseup",endTick);

    intervalId = setInterval(countDown,1000);
}

/*
 *  Funciones del juego 
 */
/**
 * Marcado de los circulos clickeados
 * @date 2023-06-12
 * @param {} event
 */
function startTick(event) {
    let item = event.target;
    let containerItem = event.target.parentElement;
    if (item.classList.contains("red")) 
    {
        markedClass="red";
        containerItem.classList.add("red");
    }
    else
    {
        markedClass="green";
        containerItem.classList.add("green");
    }
    if (!clickOn) clickOn= true;
    idMarcados.push(item.id);
    adyacenteCalculator(parseInt(item.id));
}

/**
 * Continuar marcado over
 * @date 2023-06-12
 * @param {} event
 */
function keepTicking(event) {
    if (clickOn) 
    {
        let item = event.target;
        let idNuevo = parseInt(item.id);
        // es adyacente? 
        if (adyacente.includes(idNuevo)&&item.classList.contains(markedClass))
        {
            let containerItem = event.target.parentElement;
            if (item.classList.contains("red")) containerItem.classList.add("red");
            else containerItem.classList.add("green");
            if (!(idMarcados.includes(item.id))) idMarcados.push(item.id);
            else
                adyacenteCalculator(parseInt(item.id));   
        }
    }
}

/**
 * final marcado
 * @date 2023-06-12
 * @param {} event
 */
function endTick(event) {
    clickOn= false;
    const score = document.getElementById("score");
    if ((idMarcados.length)>1)
    {
        score.value=parseInt(score.value)+(idMarcados.length*5);
    }
    for (let item of idMarcados) 
    {
        let itemMarcado= document.getElementById(item);
        itemMarcado.parentElement.classList.remove(markedClass);
        if (itemMarcado.classList.value.includes("green")) 
        {
            itemMarcado.classList.remove(markedClass);
            itemMarcado.classList.add("red");
        }
        else 
        {
            itemMarcado.classList.remove("red");
            itemMarcado.classList.add("green");
        }
    }
    idMarcados=[];
    itemMarcado=[];
}


showUserData();

if (!checkUserData()) location="index.html";


fillUserData();
gamePad();
programGameEvents()