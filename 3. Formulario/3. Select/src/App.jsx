import { useState } from 'react';

function App() {
  const [select, setSelect] = useState('');

  return (
    <form>
      <select
        id="produtos"
        name="produtos"
        value={select}
        onChange={({ target }) => setSelect(target.value)}
      >
        <option disabled value="">
          Selecione
        </option>
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
      </select>
      {select}
    </form>
  );
}

export default App;

// Linha 14: Para forçar o usuário escolher uma opção, desabilitamos a primeira opção e damos o valor ''  para ela.
