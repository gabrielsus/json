require("dotenv").config();
const  { Pool } = require("pg");
const pool = require('./conn.js');
express = require('express');
const app= new express();
app.use(express.json());
app.get("/listado", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM listar_tarea()");
        res.json(result.rows);
    } catch (error) {
        console.error("Error al obtener el listado de tareas:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});
app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});

