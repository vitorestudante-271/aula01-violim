import React from 'react';

function App() {
  const listaProdutos = [
    { id: 1, nome: 'Caneta', preco: 2.5 },
    { id: 2, nome: 'Caderno', preco: 25 },
    { id: 3, nome: 'Lápis', preco: 1.2 },
    { id: 4, nome: 'Borracha', preco: 0.8 }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Produtos Econômicos</h1>
      <ul>
        {listaProdutos
          .filter(produto => produto.preco < 10)
          .map(produto => (
            <li key={produto.id}>
              {produto.nome} - {produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
