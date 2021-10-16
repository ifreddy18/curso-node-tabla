const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');


console.clear();

crearArchivo(argv.base, argv.listar, argv.hasta)
    .then( nombreArchivo => {
        console.log(`Archivo ${colors.green(nombreArchivo)} creado`);
    })
    .catch( err => console.warn(err));


