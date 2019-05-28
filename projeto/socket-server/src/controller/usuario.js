const express = require('express');
const router = express.Router();
const usuarioRepository = require('../database/service-usuario');

router.post('/',(req, res) => {
    let aux = {
        _id:'',
        teste:req.body.teste
    }
    console.log(aux);
    usuarioRepository.adicionarUsuario(aux)
    res.sendStatus(201);
});

router.get('/',(req, res) => {
    usuarioRepository.buscarTodosOsUsuarios().then((lista)=>{
        res.json(lista);
    })
    
    
    
});

module.exports = router;