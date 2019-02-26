const express = require('express');
const router = express.Router();
const livrosRepo = require('../repositories/LivrosRepository');

router.get('/livros', (req, res) => {
    res.json(livrosRepo.todos());
});

router.get('/livros/:id', (req, res) => {
    res.json(livrosRepo.recuperar(parseInt(req.params.id)));
});

router.post('/livros', (req, res) => {
    res.json(livrosRepo.adicionar(req.body))
});

router.put('/livros/:id', (req, res) => {
    res.json(livrosRepo.alterar(parseInt((req.params.id), req.body)));
});

router.delete('/livros/:id', (req, res) => {
    livrosRepo.remover(parseInt(req.params.id));
    res.sendStatus(200);
});


module.exports = router;