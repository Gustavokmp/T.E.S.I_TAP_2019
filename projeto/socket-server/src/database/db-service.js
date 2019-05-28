var getDbIns = require('./db');

module.exports = {

  insertOne:function (collection,object){
    getDbIns.then(function (db) {
    var dbo = db.db("projetoTap");
    dbo.collection(collection).insertOne(object, function(err, res) {
      if (err) throw err;
      console.log("1 documento foi inserido na tabela "+collection);
    });
    });
  },


  updateOne:function(collection,oldObject, newObject){
    getDbIns.then(function (db) {
      var dbo = db.db("projetoTap");
      dbo.collection(collection).updateOne(oldObject, newObject, function(err, res) {
        if (err) throw err;
        console.log("1 documento foi atualizado");
      });
    });
  },

  findOne(collection,query){
    return getDbIns.then(function (db) {
      var dbo = db.db("projetoTap");
      var aux = dbo.collection(collection);
      return aux.findOne(query);
      }).then(function(item){
        return item;
      });
  },

  findAll:function(collection){
    return getDbIns.then(function (db) {
      var dbo = db.db("projetoTap");
      var aux = dbo.collection(collection);
      return aux.find({}).toArray();
      }).then(function(items){
        return items;
      });
  },

  closeDb:function(){
    getDbIns.then(function (db) {
      var dbo = db.db("projetoTap");
      db.close();
    });
  }
};






