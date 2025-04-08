let dadosIntroducidos = document.querySelector(".dadosIntroducidos")
let boton = document.querySelector(".boton")
let almacenDeDados= document.querySelector(".almacenDeDados")

dados = [
    {id:1, ruta:"DICE/diceGreen1.png "},
    {id:2, ruta:"DICE/diceGreen2.png "},
    {id:3, ruta:"DICE/diceGreen3.png "},
    {id:4, ruta:"DICE/diceGreen4.png "},
    {id:5, ruta:"DICE/diceGreen5.png "},
    {id:6, ruta:"DICE/diceGreen6.png "},
]

function generarDados(){
    let cantidad = parseInt(dadosIntroducidos.value)
    if(cantidad < 1 || cantidad > 3){
        console.log("Error")
        return;
    }else{
        for(i = 0; i < cantidad ;i ++){
            let numAleatorio = Math.floor(Math.random()* dados.length)
            let dadoAleatorio = dados[numAleatorio]

            let img = document.createElement("img")
            img.src = dadoAleatorio.ruta
            img.alt = "imagen"

            almacenDeDados.appendChild(img)
        }
    }

}

boton.addEventListener("click",generarDados)