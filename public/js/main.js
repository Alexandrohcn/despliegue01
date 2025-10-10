document.addEventListener("DOMContentLoaded", () => {
  console.log("👻 Página de Halloween cargada con éxito");
  const audio = new Audio("https://www.soundjay.com/halloween/halloween-scream-01.mp3");
  
  setTimeout(() => {
    audio.play().catch(() => console.log("El navegador bloqueó la reproducción automática"));
  }, 3000);
});
