let cartas = [
    {id:1, num:1, palo:"oro", ruta:"Oro/oro1.png"},
    {id:1, num:1, palo:"oro", ruta:"Oro/oro2.png"},
    {id:1, num:1, palo:"oro", ruta:"Oro/oro3.png"},
    {id:1, num:1, palo:"oro", ruta:"Oro/oro4.png"},
    {id:1, num:1, palo:"oro", ruta:"Oro/oro5.png"},
    {id:1, num:1, palo:"oro", ruta:"Oro/oro6.png"},
    {id:1, num:1, palo:"oro", ruta:"Oro/oro7.png"},
    {id:1, num:1, palo:"oro", ruta:"Oro/oro8.png"},
    {id:1, num:1, palo:"oro", ruta:"Oro/oro9.png"},
    {id:1, num:1, palo:"oro", ruta:"Oro/oro10.png"},
]

let  boton = document.querySelector(".boton")
let imagenes = document.querySelector(".imagenes")

function generarCartas(){
    let numRandom = Math.floor(Math.random()*cartas.length)
    let cartaAleatoria = cartas[numRandom]

    imagenes.src = cartaAleatoria.ruta
}

boton.addEventListener("click", generarCartas)