let blanco = document.querySelector(".blanco")
let azul = document.querySelector(".azul")
let amarillo = document.querySelector(".amarillo")
let rojo = document.querySelector(".rojo")

let boton = document.querySelector(".boton")

boton.addEventListener("click",lanzarDados)


let madera = [9,11,3,8]
let piedra = [10,8,3]
let barro = [10,6,5]
let trigo = [12,9,4,6]
let obejas = [2,4,5,11]


let cartasBlanco = {
    barro: 0,
    piedra: 0,
    madera: 0,
    trigo:0,
    obeja:0,
};
let cartasAzul = {
    barro: 0,
    piedra: 0,
    madera: 0,
    trigo:0,
    obeja:0,
};
let cartasAmarillo = {
    barro: 0,
    piedra: 0,
    madera: 0,
    trigo:0,
    obeja:0,
};
let cartasRojo = {
    barro: 0,
    piedra: 0,
    madera: 0,
    trigo:0,
    obeja:0,
};



function lanzarDados(){
    
         dado1 = Math.floor(Math.random()*6)+1
         dado2 = Math.floor(Math.random()*6)+1
    
    sumarDados()
}

function sumarDados(){
    let resultadoDados = dado1 + dado2
    console.log(resultadoDados)
}