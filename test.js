// Usamos require en lugar de import
const pool = require('./conn.js');

async function testConnection() {
    try {
        // La consulta de prueba
        const res = await pool.query('SELECT NOW()');
        
        console.log('--- ¡Conexión exitosa! ---');
        console.log('Fecha del servidor:', res.rows[0].now);
        
        // Cerramos el pool para que el script termine limpio
        await pool.end();
        console.log('Conexión cerrada.');
} catch (err) {
    // Cambiá esta línea para ver el detalle técnico
    console.error('Error al conectar:', err.stack); 
}
}

testConnection();