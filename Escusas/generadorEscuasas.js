let boton = document.querySelector(".boton")
let contenedorRespuesta = document.querySelector(".contenedorRespuesta")


let intro = ["Llegue tarde porque", "No llegue porque"]
let medio = ["mi Jamon de york", "mi pared de pladurn"]
let final = ["se comio mi tejado","mato mi libro del quijote"]


function fraseRandom(){
    let introAleatoria = Math.floor(Math.random()*intro.length)
    let medioAleatoria = Math.floor(Math.random()*medio.length)
    let finalAleatoria = Math.floor(Math.random()*final.length)

    let frase = intro[introAleatoria] + " " + medio[medioAleatoria] + " " + final[finalAleatoria]

    contenedorRespuesta.textContent = frase
}

boton.addEventListener("click", fraseRandom)