const fs = require('fs');
const compactador = require('./compactor');
const extractor = require('./unzip');

var op = process.argv[2];
var origin = process.argv[3];
var output = process.argv[4];

if (fs.existsSync(output)) {
    fs.unlink(output, (err) => {
        if (err) throw err;
        console.log(output + ' DELETADO');
    });
}

if (op == 'compacta') {
    compactador(origin, output);
} else if (op == 'descompacta') {
    extractor(origin, output);
} else {
    console.log('Operação invalida!!');
}