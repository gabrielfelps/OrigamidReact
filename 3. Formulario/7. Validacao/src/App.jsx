import { useState } from 'react';
import Input from './Form/Input';

function App() {
  const [cep, setCep] = useState('');
  const [error, setError] = useState(null);

  function validateCEP(value) {
    const regex = /^\d{5}-?\d{3}$/.test(value);

    if (value.lenght === 0) {
      setError('Preencha o CEP.');
      return false;
    } else if (!regex) {
      setError('Digite um CEP válido.');
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function handleBlur({ target }) {
    validateCEP(target.value);
  }

  function handleChange({ target }) {
    if (error) validateCEP(target.value);
    setCep(target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validateCEP(cep)) console.log('enviou');
    else console.log('Não enviou');
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        id="cep"
        label="CEP"
        value={cep}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="00000-000"
      />
      {error && <p>{error}</p>}
      <button>Enviar</button>
    </form>
  );
}

export default App;
