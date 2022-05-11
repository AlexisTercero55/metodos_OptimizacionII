// agregar titulo a la pagina usando h1 id="titulo"
let titulo = document.getElementById("titulo");
// agregar una imagen svg al titulo
titulo.innerHTML = '<img src="imgs/Escudo-UNAM-escalable.svg" alt="logo" width="100">';
// agregar texto al titulo como un span, titulo: "Optimización II - Alexis Tercero"
// la etiqueta span debe renderizarse como bloque
titulo.innerHTML += '<h1>Optimización II - Alexis Tercero</h1>';
// agregar un sunto al titulo con una etiqueta p
titulo.innerHTML += '<p>[en desarrollo uwu]</p>';




let encabezados = ["col1", "col2", "col3"];
let rows = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["10", "11", "12"],
    ["13", "14", "15"]];
let tabla = new Tabla(rows, encabezados);
