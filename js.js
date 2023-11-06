//PARTE 1//
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}



//PARTE 2//
function allowDrop2(ev) {
    ev.preventDefault();
}

function drag2(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop2(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}


//PARTE 3//
function allowDrop3(ev) {
    ev.preventDefault();
}

function drag3(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop3(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

//RANDOMIZER//
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function aleatorio() {
    var num = rand(0, 8);

    return num
}

function ovo() {
    let mudarImg = ["mon1Shadow", "mon2Shadow", "mon3Shadow", "mon4Shadow", "mon5Shadow", "mon6Shadow", "mon7Shadow", "mon8Shadow"];
    document.querySelector("#pocketMonsters").innerHTML = `
    <img src="imgs/${mudarImg[aleatorio()]}.png" draggable="true" alt="pokemon" ondragstart="drag(event)" id="drag" width="300px" height="275px">`

}