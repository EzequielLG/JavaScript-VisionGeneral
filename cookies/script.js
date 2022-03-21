// Autor: LozanoSoft

// Cookies

// Almacenamiento de datos web
// Datos disponibles en el servidor y en el cliente
// Para hacer pruebas sobre cookies se debe trabajar en un entorno real

// -----------------------------------------------------------------

// Creación
// Hora UTC:  Coordinated Universal Time (Tiempo Universal Coordinado)
document.cookie = "nombre=valor puede ser string; expires=Thu, 1 Apr 2021 12:00:00 UTC; path=/";

var expiresdate = new Date(2068, 1, 02, 11, 20);
var cookievalue = "Hola Mundo!";
document.cookie = "testcookie=" + encodeURIComponent(cookievalue) + "; expires=" + expiresdate.toUTCString();

// Lectura
// Devuelve: cookie1 = value; cookie2 = valor; cookie3 = valor;
// El string solo contiene pares de nombre de la cookie y su valor.
// No se puede acceder a otros parámetros a través de document.cookie.
var cookies = document.cookie;
console.log(cookies);

// Modificación
// El nombre, la ruta y el dominio de la cookie debe coincidir
document.cookie = "nombre=Miguel";
document.cookie = "nombre=Juan";

// Eliminación
// El nombre, la ruta y el dominio de la cookie debe coincidir
// Fecha antigua
document.cookie = "nombre=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
document.cookie = "nombre=; max-age=0";
