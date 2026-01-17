import { useState } from 'react';

function App() {
  const [produto, setProduto] = useState();
  const [cor, setCor] = useState();

  function handleChange({ target }) {
    setProduto(target.value);
  }

  function handleColorChange({ target }) {
    setCor(target.value);
  }

  return (
    <form>
      <div style={{ marginBlock: '12px' }}>
        <label>
          <input
            type="radio"
            name="produto"
            value="notebook"
            onChange={handleChange}
          />
          Notebook
        </label>
        <label>
          <input
            type="radio"
            name="produto"
            value="smarphone"
            onChange={handleChange}
          />
          Smartphone
        </label>
      </div>

      <div>
        <label>
          <input
            type="radio"
            name="cor"
            id="azul"
            value="azul"
            onChange={handleColorChange}
          />
          Azul
        </label>

        <label>
          <input
            type="radio"
            name="cor"
            id="amarelo"
            value="amarelo"
            onChange={handleColorChange}
          />
          Amarelo
        </label>
      </div>
    </form>
  );
}

export default App;
