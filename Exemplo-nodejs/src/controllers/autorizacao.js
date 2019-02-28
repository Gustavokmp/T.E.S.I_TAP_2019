const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const constantes = require('../config/constantes');

router.post('/login', (req, res) => {
    let payload;
    var token;
    if (req.body.username == 'admin' && req.body.password == 'admin') {
        payload = {
            username: 'admin',
            roles: ['ADMIN', 'USER'],
            email: 'admin@email.com'
        };

        token = jwt.sign({ payload }, constantes.JWT_SECRET, {
            expiresIn: 300 // 5 minutos
        })

        res.status(200).send({ auth: true, token: token });
    } else if (req.body.username == 'user' && req.body.password == 'user') {
        payload = {
            username: 'user',
            roles: ['USER'],
            email: 'user@email.com'
        };
        token = jwt.sign({ payload }, constantes.JWT_SECRET, {
            expiresIn: 300 // 5 minutos
        });
        res.status(200).send({ auth: true, token: token });
    } else {
        res.status(500).send('Login inválido');
    }
});

module.exports = router;