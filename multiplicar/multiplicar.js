const fs = require('fs');
var colors = require('colors');

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('El valor ingresado no es un numero');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`.green);
        });

    });

};

let listarTabla = (base, limite = 10) => {

    console.log('=================================='.green);
    console.log(`Tabla de multiplicar del ${base}`.green);
    console.log('================================='.green);

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('El valor ongresado no es un numero');
            return;
        }
        if (!Number(limite)) {
            reject('El valor ongresado no es un numero');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        resolve(data);
    });
};

module.exports = {
    crearArchivo,
    listarTabla
};