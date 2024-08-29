// Importa las dependencias
const express = require('express');
const cors = require('cors'); // Asegúrate de haber instalado cors

// Crea una instancia de la aplicación Express
const app = express();
const port = 5000; // O el puerto que prefieras

// Usa el middleware CORS
app.use(cors());

// Usa el middleware para analizar JSON
app.use(express.json());

// Define rutas
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/endpoint', (req, res) => {
  res.json({ message: 'Hello from /endpoint' });
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
