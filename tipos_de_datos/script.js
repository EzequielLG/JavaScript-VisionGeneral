// Autor: LozanoSoft

// Lenguaje no tipado, lo que significa que no es necesario
// especificar explícitamente qué tipo de valor se almacenará
// en las variables.

// Números enteros

var num_1 = 1234; // número decimal
var num_2 = -123; // un número negativo
var num_3 = 0123; // número octal (equivale a 83 decimal)
var num_4 = 0x1A; // número hexadecimal (equivale a 26 decimal)
var num_5 = 0b11111111; // número binario (equivale al 255 decimal)
var numero_grande = 9223372036854775808; // 16 dígitos

console.log(num_1);
console.log(num_2);
console.log(num_3);
console.log(num_4);
console.log(num_5);
console.log(numero_grande);

console.log(

  num_1 + "\n" +
  num_2 + "\n" +
  num_3 + "\n" +
  num_4 + "\n" +
  num_5 + "\n" +
  numero_grande

);

// Template strings: `texto ${variable}`

console.log(
`
${num_1}
${num_2}
${num_3}
${num_4}
${num_5}
${numero_grande}
`
);

// Números flotantes (con punto decimal)

var numF_1 = 1.234;
var numF_2 = 1.2e3; // 1.2 x 10^3
var numF_3 = 7E-10 * 1E9; // (7 x 10^-10) x (1 x 10^9)

console.log(
`
${numF_1}
${numF_2}
${numF_3}
`
);

// Cadenas de caracteres

var letra = 'A'; // "A" -> Un solo caracter
var mensajeComillasSimples = 'Hola mundo \nSegunda linea'; // Más de un caracter
var mensajeComillasDobles = "Hola mundo \nSegunda linea";

console.log(
`
${letra}
${mensajeComillasSimples}
${mensajeComillasDobles}
`
);

// Booleanos (true / false)

var booleanoT = true; // 1
var booleanoF = false; // 0

console.log(
`
${booleanoT}
${booleanoF}
`
);

// Variable sin valor

var varN = null;
console.log(varN);

// Arreglos

// Colección de valores de diferentes tipos
// Asocia un índice con un valor, comenzando desde cero (0).

var array = ["manzana", 789, 'K', 12.589];

console.log(array);

// Agregar un elemento al arreglo
// arr.push(elemento);

array.push("durazno");
console.log(array);

// Elimina un elemento del array
// arr.splice(numElemento, numElementosEliminar)

array.splice(2, 1);
console.log(array);

console.log(array[1]); // Imprime un elemento

// Objetos

// los atributos se almacenan dentro de llaves {}
// Cada atributo tiene una llave y un valor

var persona = {nombre: "Juan", apellido: "Torres", edad: 25};
console.log("Nombre completo: " + persona.nombre + " " + persona.apellido);

// Es posible almacenar en una variable un tipo de valor diferente
// al almacenado originalmente.

saludos = "Hola mundo";
console.log(saludos);
saludos = 100;
console.log(saludos);
saludos = 3.1416;
console.log(saludos);
saludos = ['Dale Like', "Suscribete", "Comparte en redes sociales"];
console.log(saludos);

console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");