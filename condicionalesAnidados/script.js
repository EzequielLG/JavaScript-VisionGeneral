// Autor: LozanoSoft

// Condicionales anidados

var num_1 = 9;
var num_2 = 20;
var num_3 = 30.01;

if(num_1 < 10 || num_2 == 20){

  if(num_1 < 10 && num_2 == 20){

    console.log("La variable 'num_1' es menor a 10 y la variable 'num_2' es igual a 20'");

    if(num_3 > 30){
      console.log("Además, la variable 'num_3' es mayor a 30");
    }
    else{
      console.log("Además, la variable 'num_3' no es mayor a 30");
    }

  }
  else{

    // Pueden haber más else if o ejecutar la instrucción deseada
    console.log("La variable 'num_1' no es menor a 10 o la variable 'num_2' no es igual a 20'");

  }

}
else{
  console.log("La variable 'num_1' no es menor a 10 y la variable 'num_2' no es igual a 20'");
}

// TIP

if(num_3 > 30){

  if(num_2 < 25){

    if(num_1 > 8.8){
      console.log("1_Cumple las condiciones");
    }

  }

}

if(num_3 > 30 && num_2 < 25 && num_1 > 8.8){
  console.log("2_Cumple las condiciones");
}

console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
