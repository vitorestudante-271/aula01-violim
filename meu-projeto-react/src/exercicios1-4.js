const produtos = [
  { id: 1, nome: 'Caneta', preco: 2.5 },
  { id: 2, nome: 'Caderno', preco: 25 },
  { id: 3, nome: 'Lápis', preco: 1.2 }
];

// 1
const nomes = produtos.map(produto => produto.nome);

console.log(nomes); 
 

// 2
const produtosCaros = produtos.filter(produto => produto.preco > 5);

console.log(produtosCaros); 


// 3 
const nomesBaratos = produtos
  .filter(produto => produto.preco <= 5)
  .map(produto => produto.nome);

console.log(nomesBaratos); 

// 4
const buscarProduto = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const produto = produtos.find(p => p.id === id);
      resolve(produto);
    }, 300);
  });
};

const executarBusca = async () => {
  const resultado = await buscarProduto(2);
  console.log(resultado);
};

executarBusca();

// exercicio 5 no App.jsx
