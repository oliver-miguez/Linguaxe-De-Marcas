// Array con las imágenes de los dados
let dados = [
    { id: 1, ruta: "DICE/diceGreen1.png" },
    { id: 2, ruta: "DICE/diceGreen2.png" },
    { id: 3, ruta: "DICE/diceGreen3.png" },
    { id: 4, ruta: "DICE/diceGreen4.png" },
    { id: 5, ruta: "DICE/diceGreen5.png" },
    { id: 6, ruta: "DICE/diceGreen6.png" }
];

// Obtener elementos del html
let boton = document.querySelector(".boton");
let cuantosDados = document.querySelector("#cuantosDados");
let contenedorDados = document.getElementById("contenedorDados");

// Asignar evento al botón para generar dados
boton.addEventListener("click", generarDados);

function generarDados() {
    let cantidad = parseInt(cuantosDados.value); // Obtener el número ingresado por el usuario

    // Limpiar el contenedor antes de generar nuevos dados
    contenedorDados.innerHTML = "";

    // Validar entrada de usuario
    if (cantidad < 1 || cantidad > 3) {
        console.log("Número inválido. Introduce un número entre 1 y 3.");
        return;
    }

    // Generar la cantidad deseada de dados
    for (let i = 0; i < cantidad; i++) {
        let dadoAleatorio = Math.floor(Math.random() * 6); // Selecciona un dado aleatorio
        let dadoSeleccionado = dados[dadoAleatorio]; // Obtiene la imagen del dado

        // Crear un elemento <img> dinámicamente
        let img = document.createElement("img");
        img.src = dadoSeleccionado.ruta;
        img.alt = "Dado " + (dadoAleatorio + 1);
        img.style.width = "60px"; // Tamaño de los dados
        img.style.margin = "5px";

        // Agregar el dado al contenedor
        contenedorDados.appendChild(img);
    }
}
