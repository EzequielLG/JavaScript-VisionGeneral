// Autor: LozanoSoft

// Variables de sesión

// Almacenamiento de datos web / API WebStorage
// Datos solo disponibles desde el lado del cliente: navegador web

// sessionStorage:

  // Almacena datos de un sitio web mientras la sesión esté abierta
  // Sesión se refiere a mientras el navegador se encuentre abierto,
  // teniendo incluso recargas de página.
  // Permanece si la pestaña no se cierra.
  // Se puede usar en un carrito de compras.

// localStorage:

  // Actúa igual a sessionStorage, a diferencia de que este logra
  // que los datos persistan aun cuando el navegador se cierre y
  // se reabra (si el almacenamiento en memoria caché está activado).
  // Se puede usar para el login de algún sistema (en algunos casos)

// -----------------------------------------------------------------

// Guardar información
sessionStorage.setItem("nombre", "LozanoSoft"); // ('clave', 'valor')
sessionStorage["edad"] = 20;

// Acceder a información
sessionStorage.getItem("nombre"); // ('clave')
sessionStorage.getItem("edad");
sessionStorage["edad"];

// Número de items/variables guardadas por el objeto sessionStorage
sessionStorage.length;

// Obtener clave de item guardado, a través del índice del mismo
// El index empieza en cero y aumenta linealmente, de uno en uno
sessionStorage.key(0); // (noIndex);

// Elimina un item almacenado
sessionStorage.removeItem("edad"); // ('clave');

// -----------------------------------------------------------------

// Ejemplo:

sessionStorage["mes"] = "Marzo";
sessionStorage["numeroMes"] = 3;

console.log(sessionStorage["numeroMes"]);
console.log(sessionStorage.length);

Object.keys(sessionStorage).forEach(
  variable => console.log(variable)
);

// Elimina todos los items almacenados
// Queda vacío el espacio de almacenamiento.
// sessionStorage.clear();

// console.log(sessionStorage.length);