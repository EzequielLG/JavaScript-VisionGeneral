// Autor: LozanoSoft

// Alerts y prompts

// Sirven para mostrar mensajes de alerta:
  // -------------------------------------------------------------
  // alert(): Muestra texto plano; solo existe opción de 'Aceptar'
  // confirm(): Usuario elige entre en ‘Aceptar’ o ‘Cancelar’
  // prompt(): Se le permite la entrada de datos al usuario
  // -------------------------------------------------------------
// No pueden personalizarse con CSS
// No pueden cambiarse las opciones que muestran

// Alert

window.alert("Texto a mostrar");
alert("Texto a mostrar");

// Confirm

var opcion = confirm("Elige 'Aceptar' o 'Cancelar'");

if(opcion == true){
  alert("Has elegido 'Aceptar'");
}
else{
  alert("Has elegido 'Cancelar'");
}

// Prompt

// Da opción de 'Aceptar' y 'Cancelar'
// Si se acepta devuelve el valor introducido
// Si se cancela devuelve 'null'

var entradaUsuario = prompt("Escribe tu nombre");

if(entradaUsuario == null || entradaUsuario == ""){
  alert("Elegiste 'Cancelar' o no fue introducido un valor");
}
else{
  alert("Escribiste '" + entradaUsuario + "'");
}