document.addEventListener("DOMContentLoaded", () => {
  console.log("🌊 Invitación cargada con éxito");

  const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
  audio.volume = 0.3;
  audio.loop = true;

  // Intentar reproducir música de fondo
  audio.play().catch(() => {
    console.log("🎵 Reproducción bloqueada. Reproducir manualmente si se desea.");
  });
});
