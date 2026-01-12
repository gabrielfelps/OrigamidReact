import Button from './Button';
import { useState } from 'react';
import Produto from './Produto';

function App() {
  // Crie uma interface com 3 botões, um para cada produto.
  // Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
  // Mostre apenas um produto por vez
  // Mostre a mensagem carregando... enquanto o fetch é realizado

  const [dados, setDados] = useState(null);
  const [carregando, setCarregando] = useState(false);

  async function handleClick(url) {
    setCarregando(true);

    const response = await fetch(url);
    const dados = await response.json();

    setDados(dados);

    setCarregando(false);
  }

  return (
    <>
      <section>
        <Button
          nomeProduto={'tablet'}
          onClick={() =>
            handleClick('https://ranekapi.origamid.dev/json/api/produto/tablet')
          }
        />
        <Button
          nomeProduto={'smartphone'}
          onClick={() =>
            handleClick(
              'https://ranekapi.origamid.dev/json/api/produto/smartphone'
            )
          }
        />
        <Button
          nomeProduto={'notebook'}
          onClick={() =>
            handleClick(
              'https://ranekapi.origamid.dev/json/api/produto/notebook'
            )
          }
        />
      </section>

      {carregando && <span>Carregando...</span>}
      {!carregando && dados && <Produto {...dados} />}
    </>
  );
}

export default App;
