const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const repository = require('../database/service-usuario');

router.post('/login', (req, res) => {
    let payload;
    var token;
    repository.buscarUsuario({username:req.body.username}).then((item) =>{
        if(item == null || req.body.password != item.password){
            res.status(500).send('Login inválido');
        }
        else{
            payload = {
                username: item.username,
                roles: ['USER'],
                email: item.email
            };
    
            token = jwt.sign({ payload }, "teste", {
                expiresIn: 300 // 5 minutos
            })
    
            res.status(200).send({ auth: true, token: token });
        }
    })
    
});

module.exports = router;