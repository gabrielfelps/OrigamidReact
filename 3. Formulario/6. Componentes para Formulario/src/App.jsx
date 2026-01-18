import { useState } from 'react';
import Input from './Form/Input';
import Select from './Form/Select';

function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [select, setSelect] = useState('');

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
    </form>
  );
}

export default App;
