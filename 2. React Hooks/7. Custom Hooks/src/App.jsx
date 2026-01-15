import useLocalStorage from './Hooks/useLocalStorage';

function App() {
  const [cor, setCor] = useLocalStorage('Cor', '');

  function handleClick({ target }) {
    setCor(target.innerText);
  }

  return (
    <div>
      <h2>Qual sua cor favorita?</h2>
      <button onClick={handleClick}>Preto</button>
      <button onClick={handleClick}>Vermelho</button>
      {cor && <p>Você escolheu: {cor}</p>}
    </div>
  );
}

export default App;
