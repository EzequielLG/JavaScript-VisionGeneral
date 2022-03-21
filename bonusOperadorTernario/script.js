// Autor: LozanoSoft

// Operador ternario - ¡SOLO PUEDE UTILIZARSE SI EJECUTA UNA SOLA INSTRUCCIÓN AL CUMPLIR O NO LA CONDICIÓN!

// (condición(es)) ? si_se_cumple : si_no_se_cumple
// Sirve como asignación, impresión o retorno de función

var num_1 = 8.9;
var num_2 = 26;
var num_3 = 31;

console.log(((num_3 > 30) ? "'num_3' es mayor a 30" : "'num_3' no es mayor a 30")); // Impresión
console.log(((num_3 > 30 && num_2 < 25 && num_1 > 8.8) ? "3_Cumple las condiciones" : "3_No cumple las condiciones")); // Impresión

var mensaje = ((num_3 > 30 && num_2 < 25 && num_1 > 8.8) ? "3_Cumple las condiciones" : "2_Cumple las condiciones"); // Asignación
console.log("Mensaje: " + mensaje);

console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
