import { useState } from 'react';
import Input from './Form/Input';
import Select from './Form/Select';
import Radio from './Form/Radio';

function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [select, setSelect] = useState('');
  const [cor, setCor] = useState('');
  const [frutas, setFrutas] = useState('');

  return (
    <form>
      <Input
        id="nome"
        label={'Nome'}
        value={nome}
        setValue={setNome}
        required
      />
      <Input id="email" label={'Email'} value={email} setValue={setEmail} />
      <Select
        options={['laptop', 'smartphone', 'tablet']}
        value={select}
        setValue={setSelect}
      />
      <h2>Cores</h2>
      <Radio options={['Azul', 'Vermelho']} value={cor} setValue={setCor} />
      <h2>Frutas</h2>
      <Radio options={['Banana', 'Maça']} value={frutas} setValue={setFrutas} />
    </form>
  );
}

export default App;
