function Parte1(){
    for(let i=1; i<=10; i++){
        console.log("primeira parte: " + i);
    }
}

setTimeout(Parte1, 2000); //para atrasar

const fs = require('fs').promises;
fs.readFile('file.txt', 'utf8') //O utf-8 evita a necesisdade do .toString()
    .then(data => {
        const registros = data.split('\n');
        registros.forEach((registro, index) => {
            console.log("segunda parte: " + registro + " " + index);
        });
    })
    .catch(err => {
        console.error("Erro ao ler o arquivo: ", err);
    })