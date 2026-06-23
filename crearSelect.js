require("dotenv").config();
const  { Pool } = require("pg");
const pool = require('./conn.js');

const crearProcedimiento = async () => {
const query = `
CREATE OR REPLACE FUNCTION listar_tarea()
RETURNS TABLE (id INTEGER, titulo VARCHAR)
LANGUAGE plpgsql
AS $$
BEGIN
    -- Especificamos exactamente las columnas, una por una
    RETURN QUERY SELECT t.id, t.titulo FROM tareas t;
END;
$$;
`;
try {
    await pool.query(query);
    console.log("Procedimiento almacenado creado exitosamente.");
} catch (error) {
    console.error("Error al crear el procedimiento almacenado:", error);
}
};
crearProcedimiento();
