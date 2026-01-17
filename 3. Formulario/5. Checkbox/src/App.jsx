import { useState } from 'react';

const App = () => {
  // Otimize o código do slide anterior
  // Utilizando a array abaixo para mostrar
  // cada checkbox na tela.

  const [cores, setCores] = useState([]);
  const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

  function handleChange({ target }) {
    if (target.checked) setCores([...cores, target.value]);
    else setCores(cores.filter((cor) => cor !== target.value));
  }

  function checkColor(cor) {
    return cores.includes(cor);
  }

  return (
    <form>
      {coresArray.map((cor) => (
        <label key={cor} style={{ textTransform: 'capitalize' }}>
          <input
            type="checkbox"
            value={cor}
            checked={checkColor(cor)}
            onChange={handleChange}
          />
          {cor}
        </label>
      ))}
    </form>
  );
};

export default App;
