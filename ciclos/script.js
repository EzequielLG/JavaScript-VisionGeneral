// Autor: LozanoSoft

// Bucles/Ciclos
//
// for
// foreach
// while

// for

for(var i = 0; i < 10; i++){
  console.log("FOR_1 - Esta es la iteración: " + (i + 1) + " -> Hola mundo");
}

for(var i = 1; i <= 10; i++){
  console.log("FOR_2 - Esta es la iteración: " + i + " -> Hola mundo");
}

var inicioIteraciones = 1;
var maxIteraciones = 10;

for(var i = inicioIteraciones; i <= maxIteraciones; i++){
  console.log("FOR_3 - Esta es la iteración: " + i + " -> Hola mundo");
}

// foreach

var animales = ["perro", "gato", "pez"];

animales.forEach(
  animal => console.log(animal)
);

var numeros = [5, 4, 3, 2, 1];

numeros.forEach(
  numero => console.log(numero)
);

// while

var numW = 5;

while(numW > 0){ // Va de 5 a 1

  console.log("WHILE_1 - Esta es la iteración: " + (6 - numW) + " -> Hola mundo");
  numW--; // Es igual a numW = numW - 1;

}

var numW_2 = 1;

while(numW_2 < 6){ // Va de 1 a 5

  console.log("WHILE_2 - Esta es la iteración: " + (0 + numW_2) + " -> Hola mundo");
  numW_2++; // Es igual a numW = numW + 1;

}

// do while

var numW_2;

do{
  numW_2 = Number(window.prompt("Escribe el valor de la variable 'numW_2': ", ""));
} while(numW_2 != 5);

// ¿Por qué usar el 'do while'?

// cin >> numW_2;
//
// while(numW_2 != 5) {
//
//   console.log("Escribe el valor de la variable 'numW_2': ");
//   cin >> numW_2;
//
// }

console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");