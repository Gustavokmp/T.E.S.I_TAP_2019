const jwt = require('jsonwebtoken');

const seguranca = {
    autorizaJWT: (req, res, next) => {
        if (!req.headers.authorization || req.headers.authorization.split(' ')[0] !== 'Bearer') {
            return res.status(401).send({ auth: false, message: 'Token não informado.' });
        };

        let token = req.headers.authorization.split(' ')[1];

        jwt.verify(token, "teste", (err, decoded) => {
            if (err) {
                return res.status(500).send({ auth: false, message: 'Token não autenticado.' })
            }
            if (!decoded.roles.includes('ADMIN')) {
                return res.status(500).send({ auth: false, message: 'Usuário sem permissão' })
            }
            req.user = {
                username: decoded.username,
                roles: decoded.roles,
                email: decoded.email
            };
            next();
        })
    },
    autorizaJWTUser: (req, res, next) => {
        if (!req.headers.authorization || req.headers.authorization.split(' ')[0] !== 'Bearer') {
            return res.status(401).send({ auth: false, message: 'Token não informado.' });
        };

        let token = req.headers.authorization.split(' ')[1];

        jwt.verify(token, "teste", (err, decoded) => {
            if (err) {
                return res.status(500).send({ auth: false, message: 'Token não autenticado.' })
            }
            req.user = {
                username: decoded.username,
                roles: decoded.roles,
                email: decoded.email
            };
            next();
        })
    }
}

module.exports = seguranca;