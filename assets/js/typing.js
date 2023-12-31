document.addEventListener('DOMContentLoaded', function () {
  let words = ["Full Stack Developer", "Mobile App Developer", "Photographer", "Web Designer", "Software Developer", "UI/UX Designer", "Runner"];

  let typingElement = document.querySelector('.typing-text');
  let wordIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < words[wordIndex].length) {
      typingElement.textContent += words[wordIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100); // Ajusta la velocidad de escritura aquí
    } else {
      setTimeout(erase, 1000); // Espera 1 segundo antes de borrar la palabra
    }
  }

  function erase() {
    if (charIndex > 0) {
      typingElement.textContent = words[wordIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 50); // Ajusta la velocidad de borrado aquí
    } else {
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 500); // Espera 0.5 segundos antes de escribir la siguiente palabra
    }
  }

  type(); // Comienza la animación al cargar la página
});
