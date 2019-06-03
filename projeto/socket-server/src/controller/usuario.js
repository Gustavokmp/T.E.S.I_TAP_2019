const express = require('express');
const router = express.Router();
const usuarioRepository = require('../database/service-usuario');

router.post('/',(req, res) => {
    console.log('CHEGOUUU')
    console.log(req.body);
    usuarioRepository.adicionarUsuario(req.body)
    res.sendStatus(201);
});

router.get('/',(req, res) => {
    usuarioRepository.buscarTodosOsUsuarios().then((lista)=>{
        res.json(lista);
    })
    
    
    
});

module.exports = router;