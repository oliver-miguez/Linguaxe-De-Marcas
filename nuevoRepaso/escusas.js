let boton = document.querySelector(".boton")
let almacen = document.querySelector(".almacen")

let intro = ["no puede porque","no lo hice porque"]
let medio = ["Jonh Cena Chino", "tralalero tralala"]
let fin = ["dropeo una bomba", "hizo waterdrop"]

function generarEscusa(){
    let introRamdon = Math.floor(Math.random()* intro.length)
    let medioRamdon = Math.floor(Math.random()* medio.length)
    let finRamdon = Math.floor(Math.random()* fin.length)


    let frase = intro[introRamdon] + " " + medio[medioRamdon] + " " + fin[finRamdon]

    almacen.textContent = frase

}

boton.addEventListener("click",generarEscusa)