let boton = document.querySelector(".boton");
let colorBox = document.getElementById("colorBox");
let colorText = document.getElementById("colorText");

boton.addEventListener("click", generarColorAleatorio);

function generarColorAleatorio() {
    // Genera un color RGB aleatorio
    let rojo = Math.floor(Math.random() * 256);
    let verde = Math.floor(Math.random() * 256);
    let azul = Math.floor(Math.random() * 256);

    let colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;

    // Cambia el fondo del contenedor y muestra el color generado
    colorBox.style.backgroundColor = colorRGB;
    colorText.textContent = colorRGB;
}
