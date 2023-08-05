let green = document.getElementById("luzUno");
let red = document.getElementById("luzDos");
let ambar = document.getElementById("ambar")
let reloj = document.getElementById("reloj")

function turnIntoRed(){
    if(red.style.backgroundColor !== "black"){
        red.style.backgroundColor = "black";
    } else{
        red.style.backgroundColor= "red";
    }
}

function turnIntoGreen(){
    if(green.style.backgroundColor !== "green"){
        green.style.backgroundColor = "green";
    } else {
        green.style.backgroundColor = "black";
    } 
}


reloj.style.color = "red"
function colorNumber(){
    if(reloj.style.color !== "green"){
        reloj.style.color = "green"
    } else{
        reloj.style.color="red"
    }
}

setInterval(turnIntoGreen, 10000)
setInterval(turnIntoRed, 10000)
setInterval(colorNumber, 10000)


let segundos = -1;
cargarSegundo();

function cargarSegundo(){
    let txtsegundos;

    if(segundos < 0){
        segundos = 9;
    }
    //Mostrar en pantalla
    if(segundos < 10){
        txtsegundos = `0${segundos}`;
    } else{
        txtsegundos = segundos;
    }
    reloj.innerHTML = txtsegundos;
    segundos --;
}

setInterval(cargarSegundo, 1000);


