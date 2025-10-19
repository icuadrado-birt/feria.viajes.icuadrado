/*
 * Archivo: funciones/funciones.js
 * Contiene una función JavaScript para cada una de las 5 páginas HTML.
 */


// 1. Función para index.html 
// Muestro una alerta simple de bienvenida.
function saludarBienvenida() {
    alert("¡Bienvenido a la Feria Internacional de Viajes 2025!");
    console.log("Función de index.html ejecutada: Saludo de Bienvenida.");
}


// 2. Función para destinos.html (Se llama con onload en el <body>)
// Cuenta el número de filas en la tabla y lo muestra en un elemento <p id="conteoDestinos">
function contarDestinos() {
    let tabla = document.querySelector('table');
    if (tabla) {
        // Obtenemos todas las filas (<tr>) excepto la de cabecera (<th>)
        let filasDestinos = tabla.querySelectorAll('tr:not(:first-child)');
        let numeroDestinos = filasDestinos.length;

        // Muestra el resultado en el párrafo con id="conteoDestinos"
        let pConteo = document.getElementById('conteoDestinos');
        if (pConteo) {
            pConteo.innerHTML = "¡Tenemos **" + numeroDestinos + " países** y continentes confirmados para este año! :) ";
        }
        console.log("Función de destinos.html ejecutada: Total de " + numeroDestinos + " destinos.");
    }
}


// 3. Función para actividades.html, cambia color del título
function colorearTituloActividades() {
    let titulo = document.querySelector('h1');
    if (titulo) {
        titulo.style.color = 'red'; // Color rojo
        console.log("Función de actividades.html ejecutada: Título cambiado de color.");
    }
}


// 4. Función para alojamientos.html
// Le pide al usuario que indique cuántas noches se va a quedar 
function preguntarNoches() {
    let noches = prompt("Indica el número de noches que deseas quedarte cerca de la Feria:");
    if (noches !== null && noches !== "") {
        alert("Gracias. Has indicado " + noches + " noches.");
        console.log("Función de alojamientos.html ejecutada: Noches indicadas: " + noches);
    } else {
        console.log("Función de alojamientos.html ejecutada: Usuario canceló o no introdujo valor.");
    }
}


// 5. Función para contacto.html (Se llama con onsubmit en el <form>)
// Valida que los campos de nombre, email y mensaje no estén vacíos.
function validarFormularioContacto() {
    let nombre = document.querySelector('input[name="nombre"]').value;
    let email = document.querySelector('input[name="email"]').value;
    let mensaje = document.querySelector('textarea[name="mensaje"]').value;

    if (nombre === "" || email === "" || mensaje === "") {
        alert("Por favor, rellena todos los campos del formulario para enviar tu mensaje.");
        return false; // NO permite el envío
    }

    alert("¡Formulario enviado correctamente! Pronto te contactaremos.");
    console.log("Función de contacto.html ejecutada: Formulario validado y enviado.");
    return true; // SÍ permite el envío
}