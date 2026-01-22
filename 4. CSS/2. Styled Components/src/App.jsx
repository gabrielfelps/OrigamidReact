import styled from 'styled-components';
import React from 'react';

const ProdutosContainer = styled.div`
  display: flex;
`;

const Produto = styled.div`
  flex: 1;
`;

const Titulo = styled.h1`
  font-size: 2rem;
  color: tomato;
`;

const Paragrafo = styled.p`
  font-size: 1rem;
  color: green;
`;

const Preco = styled.p`
  background: ${(props) => props.cor};
  color: white;
`;

const Comprar = styled.button`
  background-color: ${({ ativo }) => (ativo ? '#000' : '#fff')};
  color: ${({ ativo }) => (ativo ? '#fff' : '#000')};
  font-size: 1rem;
  border: 2px solid #000;
  border-radius: 5px;
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: tomato;
  }
`;

function App() {
  const [ativo, setAtivo] = React.useState(false);

  function handleClick() {
    setAtivo(!ativo);
  }

  return (
    <div>
      <Comprar ativo={ativo} onClick={handleClick}>
        Compre aqui
      </Comprar>
      <ProdutosContainer>
        <Produto>
          <Titulo>Macbook</Titulo>
          <Paragrafo>Um ótimo PC</Paragrafo>
          <Preco cor="#84e"></Preco>
        </Produto>

        <Produto>
          <Titulo>iPhone</Titulo>
          <Paragrafo>Um ótimo smartphone</Paragrafo>
          <Preco cor="#53d956"></Preco>
        </Produto>
      </ProdutosContainer>
    </div>
  );
}

export default App;
