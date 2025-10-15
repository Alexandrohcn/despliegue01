require('dotenv').config();                   // ✅ Carga variables del archivo .env (opcional)
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// ✅ Sirve todos los archivos dentro de /public (HTML, CSS, JS, imágenes, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Render mostrará automáticamente index.html al acceder a la raíz del sitio
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ✅ Inicia el servidor (Render usa el puerto asignado en PORT)
app.listen(port, () => {
  console.log(`Servidor ejecutándose en puerto ${port}`);
});
