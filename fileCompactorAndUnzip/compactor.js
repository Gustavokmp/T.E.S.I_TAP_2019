const fs = require('fs');
const archiver = require('archiver');


function compactador(origin, output) {
    let saida = fs.createWriteStream(output);
    let compactador = archiver('zip');

    saida.on('close', () => {
        console.log(compactador.pointer() + ' bytes totais');
    })
    compactador.pipe(saida);
    fs.readdir(origin, (err, arquivos) => {
        arquivos.forEach(item => {
            if (fs.statSync(origin + '/' + item + '/').isDirectory()) {
                var aux = origin + '/' + item + '/';
                compactador.directory(aux, item);
            } else {
                var arquivo = origin + '/' + item;
                compactador.append(fs.createReadStream(arquivo), { name: item });
            }
        });
    })
    compactador.finalize();
}

module.exports = compactador;