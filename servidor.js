
import http from "http";
const host = "localhost";
const puerto = "8000";
import chalk from "chalk"

let servidor = http.createServer ((req, res) => { 
    res.writeHead (200, {"content-Type" : "application/json; charset=utf-8"});
    // res.end ("hola a todos Servidor de Camilo Monsalve")
    const respuestaJSON = {
        "id": 123,
        "mensaje": "Hola a todos",
        "fecha": "2023-09-08",
        "autor": {
            "nombre": "Camilo",
            "apellido": "Monsalve"
        }
    };

    res.end(JSON.stringify(respuestaJSON));
    });

servidor.listen (puerto,() => {
    console.log(chalk.green ("El servidor está funcionando: " + host + ":" + puerto));
});