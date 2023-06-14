/*
*    USER DATA JS FILE
*
*    @author Augusto Adeff <augusto.2002@hotmail.com>  
*
*   @link https://github.com/augustoadeff/ GitHub
*/


var nick;
var size;
var avatar;

var geoLocationTxt;


// session storage


/**
 * User data saved at sessionStorage
 * @date 2023-05-30
 * 
 * @param {HTMLElement} nick user nick
 * @param {HTMLElement} size game panel size
 */
function userData(nick, size, avatar) {
    sessionStorage.setItem("nick", nick.value);
    sessionStorage.setItem("size", size.value);
    sessionStorage.setItem("avatar",avatar.src);
    sessionStorage.setItem("location", geoLocationTxt);
}

/**
 * Show user data from sessionStorage
 * @date 2023-05-30
 */
function showUserData() {
    nick = sessionStorage.getItem("nick");
    size = sessionStorage.getItem("size");
    avatar = sessionStorage.getItem("avatar");
    console.log(nick);
    console.log(size);
    console.log(avatar);
}

function checkUserData() {
    if (nick==null) 
    {
        sessionStorage.setItem("error","No existe un Nick");
        return false;
    }
    else if (!size || size=="none") 
    {
        sessionStorage.setItem("error","No hay tamaño seleccionado");
        return false;
    }
    return true;
}

function geoLocation() {
    if (!navigator.geolocation) 
    {
        geoLocationTxt="Su navegador no es compatible con la API Location";
    }
    else 
    {
        navigator.geolocation.getCurrentPosition(
            //success 
            (position)=>{geoLocationTxt="latitud= "+position.coords.latitude + " y longitud= "+position.coords.longitude},
            //error 
            ()=>{geoLocationTxt="La geo localizacion ha fallado"}
        )
    }
}


// local storage 

function storyUsers(nick) {
    let historyStorage=localStorage.getItem("historyLogin");
    let historyLogin;
    if (historyStorage==null) 
    {
        historyLogin=[];
    }
    else 
    {
        historyLogin=JSON.parse(historyStorage);
    }
    let userRegister={
        user:nick.value,
        date:Date.now()
    }
    historyLogin.push(userRegister);
    localStorage.setItem("historyLogin",JSON.stringify(historyLogin));
}