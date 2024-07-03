const express = require('express');
const cors = require('cors');

const PORT = 3001;

// Middlewares de Express.js
const app = express();
app.use(express.json());
app.use(cors());


// Iniciar base de datos
// Usar: db.iniciar(true) 
// para resetear estructura y datos
const db = require('./app/db/setup')
db.iniciar(true);

// Rutas
const rutasAlbumes = require("./app/routes/albumes.routes");
rutasAlbumes(app);
const rutasGeneros = require("./app/routes/generos.routes");
rutasGeneros(app);

app.listen(PORT, () => {
    console.log(`
    El servidor está corriendo en el puerto ${PORT} 
    `)
});