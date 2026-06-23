const { Pool } = require('pg');

// Configuración de la conexión a la base de datos
const pool = require('./conn.js');
const express = require('express');
const app = express();
app.use(express.json());
app.post ('/tareas', async (req, res) => {
    const { titulo } = req.body;
    try {

        const query = "CALL insertar_tarea($1)";
        const result = await pool.query(query, [titulo]);
        res.status(200).json({ message: 'Tarea insertada correctamente' });
    }  catch (err) {
console.error("DEBUG - ERROR:", err);
        res.status(500).json({ error: + err.message + " " + err.stack    });
}
});
app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});