const express = require('express');
const path = require('path');
const app = express();

// Define ruta para servir el archivo JSON
app.get('/quizzes', (req, res) => {
  res.sendFile(path.join(__dirname, 'quizzes.json'));
});

// Escucha en el puerto proporcionado por Render o el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
