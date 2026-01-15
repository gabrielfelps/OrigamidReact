import { useEffect } from 'react';
import useFetch from './Hooks/useFetch';
import useLocalStorage from './Hooks/useLocalStorage';

function App() {
  const [cor, setCor] = useLocalStorage('Cor', '');
  const { request, data, loading, error } = useFetch();

  useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        'https://ranekapi.origamid.dev/json/api/produto'
      );
      console.log(response, json);
    }
    fetchData();
  }, [request]);

  function handleClick({ target }) {
    setCor(target.innerText);
  }

  if (error) return <p>{error}</p>;
  if (loading) return <p>Carregando...</p>;
  if (data)
    return (
      <div>
        <h2>Qual sua cor favorita?</h2>
        <button onClick={handleClick}>Preto</button>
        <button onClick={handleClick}>Vermelho</button>
        {cor && <p>Você escolheu: {cor}</p>}
        <hr />
        <h2>Lista de Produtos</h2>
        <ul>
          {data.map(({ id, nome }) => (
            <li key={id}>{nome}</li>
          ))}
        </ul>
      </div>
    );
  else return null;
}

export default App;
