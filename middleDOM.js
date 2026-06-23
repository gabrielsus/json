"use strict";

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
        const selector = document.getElementById("selector");
        const listado = await getListado();
        listado.forEach(item => {
            const option = document.createElement("option");
            option.value = item.id;
            option.textContent = item.titulo;
            selector.appendChild(option);
        });
    } catch (error) {
        console.error("Error en la función principal:", error);
    }
}

main(); 