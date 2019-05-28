const repository = require('./database/service-usuario');

repository.buscarTodosOsUsuarios().then((lista)=>{
    console.log(lista);
})