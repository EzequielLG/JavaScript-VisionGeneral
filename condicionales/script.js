// Autor: LozanoSoft

// Condicionales
//
// if
// if/else
// if/elif -> if/else/if
// switch

var palabra = "Hola mundo";
var numero = 45;
var caracter = 'd';
var numF = 3.1416;

// if simple

if(palabra == "Hola mundo"){
  console.log("IF - La variable 'palabra' es igual a: Hola mundo");
}

// if/else

if(caracter != 'd'){
  console.log("La variable 'caracter' no es igual a: 'd'");
}
else{
  console.log("ELSE - La variable 'caracter' es igual a: 'd'");
}

// if/else/if - FORMA 1

if(numero > 45){
  console.log("La variable 'numero' es mayor a: 45");
}
else
if(numero < 45){
  console.log("ELSE IF - La variable 'numero' es menor a: 45");
}
else{
  console.log("ELSE - La variable 'numero' es igual a: 45");
}

// if/else/if - FORMA 2

if(numF > 4){
  console.log("La variable 'numF' es mayor a: 4");
}
else{ // No es mayor a 4

  if(numF < 3){
    console.log("ELSE IF - La variable 'numF' es menor a: 3");
  }
  else{
    console.log("2_ELSE IF - La variable 'numF' es igual o mayor a 3 y menor o igual a 4");
  }

}

// switch

var numS = 100;

switch(numS){

  case 57:
    console.log("La variable 'numS' es igual a: 57");
  break;

  case 65:
    console.log("La variable 'numS' es igual a: 65");
  break;

  case 79:
    console.log("La variable 'numS' es igual a: 79");
  break;

  case 100:
    console.log("La variable 'numS' es igual a: 100");
  break;

  default:
    console.log("La variable 'numS' no es igual a: 57, 65, 79 ni 100");
  break;

}

console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
