/* El evento se ejecutará solo después de que todo el contenido de la página se haya cargado */
document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todos los enlaces dentro del <nav>
  let opciones = document.querySelectorAll("nav ul li a");

  // Función que desmarcará el checkbox
  function cerrarMenuHamburguer() {
    document.getElementById("click-menu-hamburguer").checked = false;
  }

  // Añade el evento 'click' a cada enlace
  opciones.forEach(function (opcion) {
    opcion.addEventListener("click", cerrarMenuHamburguer);
  });
});
