var service = require('./db-service');
const tabela = 'usuario';


module.exports = {

    adicionarUsuario:function (usuario) {
        service.insertOne(tabela,usuario);
    },

    buscarUsuario:function(usuario){
        return service.findOne(tabela,usuario);
    },
    buscarTodosOsUsuarios:function () {
        return service.findAll(tabela);
    }

}