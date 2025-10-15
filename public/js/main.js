document.addEventListener("DOMContentLoaded", () => {
  console.log("🌊 Invitación cargada correctamente");

  const form = document.getElementById("formRSVP");
  const mensaje = document.querySelector(".mensaje");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    mensaje.textContent = "🎉 ¡Gracias por confirmar tu asistencia!";
    form.reset();
  });
});
