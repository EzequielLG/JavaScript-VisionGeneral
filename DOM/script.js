// Autor: LozanoSoft

// DOM - Document Object Model (Modelo de Objeto de Documento)
// Define acceso desde JS a la estructura, estilo y contenido del HTML

// JavaScript puede:

  // Cambiar todos los elementos HTML de la página.
  // Cambiar todos los atributos HTML de la página.
  // Cambiar todos los estilos CSS de la página.
  // Eliminar elementos y atributos HTML existentes
  // Agregar nuevos elementos y atributos HTML
  // Reaccionar a todos los eventos HTML existentes en la página.
  // Crear nuevos eventos HTML en la página.

// Métodos más usados

// Obtiene elemento por 'ID'
document.getElementById("parrafoBienvenida"); // Si no, devuelve null.

// Obtiene elementos por 'clase'
document.getElementsByClassName("class");	// Si no, devuelve [].

// Busca elementos por atributo 'nombre'
document.getElementsByName("name");	// Si no, devuelve [].

// Busca elementos por etiqueta
document.getElementsByTagName("p"); // Si no encuentra ninguno, devuelve [].

// Busca elemento por selector de CSS
document.querySelector("#numero10"); // Si no, devuelve null.

// Busca elementos por selector de CSS
document.querySelectorAll(".main .info"); // Si no, devuelve [].

// Creación de elementos
// https://lenguajejs.com/javascript/dom/crear-elementos-dom/

// Modificar y eliminar elementos
// https://lenguajejs.com/javascript/dom/insertar-elementos-dom/

// Manipulación de CSS
// https://lenguajejs.com/javascript/dom/manipular-clases-css/

// Navegación entre elementos
// https://lenguajejs.com/javascript/dom/navegar-elementos-dom/