// Imports
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan')
const livrosRepo = require('./repositories/LivrosRepository');

// Constantes
const PORTA = 3000;

//Configuração do servidor
app.set('view engine', 'ejs');

//Configuração do middleware
app.use(morgan('short'));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static('public'));

// As rotas são satisfeitas na ordem em que são declaradas
app.get('/', (req, res) => {
    let livros = livrosRepo.todos();
    res.render('index', { livros: livros });
});
//Rotas para os recursos
app.use('/auth', require('./controllers/autorizacao'));
app.use('/livros', require('./controllers/livros'));
// Caso as outras rotas não funcionem
app.get('*', (req, res) => res.send('404'));

//Iniciando o servidor
app.listen(PORTA, () => {
    console.log('Aplicação no ar em http://localhost:' + PORTA)
});