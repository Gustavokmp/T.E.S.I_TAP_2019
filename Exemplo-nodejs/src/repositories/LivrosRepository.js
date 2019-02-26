const livros = [];
let proxId = 0;

const getLivrosIdx = id => livros.map(l => l.id).indexOf(id);

const LivrosRepository = {
    adicionar: (livro) => {
        let novo = {
            id: proxId++,
            titulo: livro.titulo,
            autor: livro.author
        };
        livros.push(novo)
        return novo;
    },
    recuperar: id => livros[getLivrosIdx(id)],
    alterar: (id, novo) => {
        livro[getLivrosIdx(id)] = novo;
        novo.id = id;
        return novo;
    },
    remover: id => livros.splice(getLivrosIdx(id), 1),
    todos: () => livros
};

module.exports = LivrosRepository;