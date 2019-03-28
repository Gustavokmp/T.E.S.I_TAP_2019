const produtos = [
    { nome: 'Notebook', preco: 2500, foto: "https://images-americanas.b2w.io/produtos/01/00/item/133775/9/133775934_1GG.jpg" },
    { nome: 'Fritadeira', preco: 240, foto: "https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/127878/8/127878831_1GG.png" },
    { nome: 'Fonte', preco: 84, foto: "https://images-americanas.b2w.io/produtos/01/00/sku/8579/3/8579390_1GG.jpg" },
    { nome: 'Relogio', preco: 158, foto: "https://images-americanas.b2w.io/produtos/01/00/sku/41940/8/41940837_1GG.jpg" },
    { nome: 'Micro-ondas', preco: 349, foto: "https://images-americanas.b2w.io/produtos/01/00/oferta/47165/1/47165105_1GG.jpg" },
    { nome: 'Smart TV', preco: 1300, foto: "https://images-americanas.b2w.io/produtos/01/00/item/133869/3/133869367_1GG.jpg" },
    { nome: 'Cafeteira', preco: 309, foto: "https://images-americanas.b2w.io/produtos/01/00/item/130321/1/130321195_1GG.jpg" },
    { nome: 'Bandeja', preco: 16, foto: "https://images-americanas.b2w.io/produtos/01/00/oferta/16021/1/16021131_1GG.jpg" }
];


class BancoDeDados {

    static getProdutos = async() => {
        /* const response = await fetch('http://localhost:9000/produtos'); */
        /*  const produtos = await response.json(); */

        /*  if (response.status !== 200) {
             throw new Error(produtos.message);
         } */

        // Aqui nós podemos realizar conversões do modelo que vem bo back-end
        // para as necessidades do front-end. 
        // Nesse caso, o campo "preco" vem como string, então convertemos para float
        return produtos.map((p) => {
            return {...p, preco: parseFloat(p.preco) }
        });
    }
}

export default BancoDeDados;