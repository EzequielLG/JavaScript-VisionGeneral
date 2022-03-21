// Autor: LozanoSoft

// Bucles/Ciclos anidados

// for anidado - tablas de mutiplicar

for(let i = 1; i <= 10; i++){

  for(let j = 1; j <= 10; j++){
    console.log("FOR_ANIDADO -> " + i + " x " + j + " = " + (i * j));
  }

}

// while anidado - tablas de multiplicar

var i = 1;
var j = 1;

while(i <= 10){

  while(j <= 10){

    console.log("WHILE_ANIDADO -> " + i + " x " + j + " = " + (i * j));
    j++;

  }

  j = 1;
  i++;

}

// foreach anidado

var materias = [
            ["Progra 1", "Progra 2", "Progra 3"],
            ["Mate 1", "Mate 2"],
            ["Historia 1", "Historia 2", "Historia 3", "Historia 4"]
          ];

materias.forEach(

  materia => materia.forEach(
    tema => console.log(tema)
  )

);

console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");