var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

function getDb() {
    return MongoClient.connect(url,{ useNewUrlParser: true }).then(function (db) {
        return db;
    })
}

module.exports = getDb();