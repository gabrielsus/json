"use strict";
const axios = require("axios");
async function getListado() {
    try{
        
        const response = await axios.get("http://localhost:3000/listado");
        return response.data;
    }
    catch (error) {
        console.error("Error al obtener el listado:", error);
        throw error;
    }
}

async function main() {
    try {
        const listado = await getListado();
        console.log("Listado de tareas:", listado);
    } catch (error) {
        console.error("Error en la función principal:", error);
    }
}

main(); 