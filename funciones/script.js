// Autor: LozanoSoft

// Funciones

// -----------------------
// 1. Función declarativa
// -----------------------

// Declaración: function nombreFuncion(parametro_1, parametro_2, ...)

function imprimeSuma(numero_1, numero_2){

  // Inicio del cuerpo de la función

  let suma = numero_1 + numero_2;
  console.log("Función 'imprimeSuma': " + suma);

  // Fin del cuerpo de la función
  // No retorna valor alguno: undefined
  
}

function suma(numero_1, numero_2){
  
  let suma = numero_1 + numero_2;
  return suma; // Retorna la variable 'suma', la cual es un número entero

  // NOTA: Para que una función modifique múltiples valores se deben
  // usar variables globales.

}

var num_1, num_2;

num_1 = 5;
num_2 = 3;

imprimeSuma(num_1, num_2); // Llamada a la función -> nombreFuncion(argumento_1, argumento_2, ...)
console.log("Función 'suma': " + suma(num_1, num_2));

function imprimeMensaje(){
  console.log("Función 'imprimeMensaje': Hola mundo"); // No retorna valor alguno
}

function tomarMensaje(){

  let mensaje = "Hola mundo";
  return mensaje; // Retorna la variable 'mensaje', la cual es un string

}

imprimeMensaje();

var miMensaje = tomarMensaje();
console.log("Este es mi mensaje: " + miMensaje);

// -----------------------
// 2. Expresión de función
// -----------------------

// Función almacenada en una variable
// Principal uso: crear métodos de un objeto (POO)

var sumaDos_1 = function sumaDos(valor){
  return valor + 2;
}

var sumaDos_2 = function(valor){
  return valor + 2;
}

console.log(sumaDos_1(5));
console.log(sumaDos_2(5));

var mensaje = function(){
  console.log("Hola mundo");
}

mensaje();

// POO

var persona = {

  nombre: "Ezequiel",
  apellido: "Lozano",
  edad: 21,
  comer: function(){ console.log("La persona está comiendo"); } // Función inline

};

persona.comer();

// -----------------------
// 3. Función lambda
// -----------------------

// Es una función anónima
// Intención: hacer el código más compacto

var mensaje = (palabra) => {
   return `Hola ${palabra}`;
}

var mensaje_2 = (nombre) => `Hola ${nombre}`; // Función inline

console.log(mensaje("mundo"));
console.log(mensaje_2("mundo"));

// ¿Cuál es la mejor forma de declarar y usar funciones?
// Depende de lo que se quiera hacer, con base en la descripción de cada función