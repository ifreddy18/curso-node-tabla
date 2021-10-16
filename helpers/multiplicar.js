const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base, listar = false, hasta = 10) => {

    try {
        let salida = '';
        let salidaConsola = '';
        
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${ i } = ${ base * i }\n`;
            salidaConsola += `${base} ${'x'.cyan} ${ i } ${'='.cyan} ${ base * i }\n`;
            if (i % 10 === 0) {
                salidaConsola += '---------------------\n'.cyan;
            }
        }

        if (listar) {
            console.log('====================='.green);
            console.log('    Tabla del: ', base);
            console.log('====================='.green);
            console.log(salidaConsola);
        }
        

        fs.writeFileSync(`output/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;

    } catch (err) {
        throw err;
    }

};

module.exports = {
    crearArchivo
};