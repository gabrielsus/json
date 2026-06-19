const pool = require('./conn.js');
const { Pool } = require('pg');

// Configuración de la conexión a la base de datos
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});
const express = require('express');
const app = express();
app.use(express.json());
app.post
