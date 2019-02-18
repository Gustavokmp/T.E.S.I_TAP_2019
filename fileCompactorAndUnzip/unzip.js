const extract = require('extract-zip')

function extractorZip(origin, output) {
    extract(origin, { dir: output }, (err) => {
        console.log(err);
    })
}

module.exports = extractorZip;