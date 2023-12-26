document.addEventListener("DOMContentLoaded", function() {
  const snowContainer = document.getElementById("snow-container");

  function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    snowflake.style.left = Math.random() * window.innerWidth + "px";
    snowContainer.appendChild(snowflake);

    // Añadir un retraso aleatorio para que no todos los copos de nieve comiencen al mismo tiempo
    setTimeout(() => {
      snowflake.style.animationDuration = Math.random() * 2 + 2 + "s";
      snowflake.style.opacity = Math.random();
    }, Math.random() * 2000);

    // Eliminar el copo de nieve después de llegar al fondo
    snowflake.addEventListener("animationiteration", () => {
      snowContainer.removeChild(snowflake);
      createSnowflake();
    });
  }

  // Crear copos de nieve
  for (let i = 0; i < 30; i++) {
    createSnowflake();
  }
});
