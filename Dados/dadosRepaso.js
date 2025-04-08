let dadosIntroducidos = document.querySelector(".dadosIntroducir")
let boton = document.querySelector(".boton")
let contenedorDados = document.querySelector(".contenedorDados")
let dados = [
    { id: 1, ruta: "DICE/diceGreen1.png" },
    { id: 2, ruta: "DICE/diceGreen2.png" },
    { id: 3, ruta: "DICE/diceGreen3.png" },
    { id: 4, ruta: "DICE/diceGreen4.png" },
    { id: 5, ruta: "DICE/diceGreen5.png" },
    { id: 6, ruta: "DICE/diceGreen6.png" }
]

function dadoAleatorio(){
    
    let cantidad = parseInt(dadosIntroducidos.value); 
    if (cantidad < 1 ||cantidad > 3){
        console.log("no valido")
        return;
    }
    for(i = 0; i < cantidad; i++){
        let numAleatorio = Math.floor(Math.random()*dados.length)
        let dadAleatorio = dados[numAleatorio]
        
        let img = document.createElement("img")
        img.src = dadAleatorio.ruta
        img.alt = "dado generado"
        contenedorDados.appendChild(img);
    }
}

boton.addEventListener("click", dadoAleatorio)
