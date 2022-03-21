// Autor: LozanoSoft

// Recursión

// Invocación de una función a sí misma
// Puede verse como un ciclo/bucle
// Debe existir una condición de paro
// Sirve para optimizar la complejidad computacional

function factorialNumero(numero){

  if(numero == 1){ // Condición de paro
    return 1; // Ya no vuelve a llamar a la función misma
  }
  else{

    return numero * factorialNumero(numero - 1);

    // 4 * factorialNumero(3)
    // 3 * factorialNumero(2)
    // 2 * factorialNumero(1)
    // 1

    // 4 * 6
    // 3 * 2
    // 2 * 1
    // 1

  }

  // return ((numero <= 1) ? 1 : numero * factorialNumero(numero - 1));

}

console.log(factorialNumero(4));

// En este caso, la recursividad actúa como una pila, que en
// estructura de datos se denomida como LIFO (Last In First Out)
