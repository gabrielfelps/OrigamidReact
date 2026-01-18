import { useState } from 'react';
import Input from './Form/Input';
import Select from './Form/Select';
import Radio from './Form/Radio';
import Checkbox from './Form/Checkbox';

function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [select, setSelect] = useState('');
  const [cor, setCor] = useState('');
  const [frutas, setFrutas] = useState('');
  const [linguagens, setLinguagens] = useState([]);
  const [termos, setTermos] = useState([]);

  return (
    <form>
      <h2>Dados</h2>
      <Input
        id="nome"
        label={'Nome'}
        value={nome}
        setValue={setNome}
        required
      />
      <Input id="email" label={'Email'} value={email} setValue={setEmail} />
      <h3>Produto</h3>
      <Select
        options={['laptop', 'smartphone', 'tablet']}
        value={select}
        setValue={setSelect}
      />

      <h2>Cores</h2>
      <Radio options={['Azul', 'Vermelho']} value={cor} setValue={setCor} />
      <h2>Frutas</h2>
      <Radio options={['Banana', 'Maça']} value={frutas} setValue={setFrutas} />

      <h2>Linguagens</h2>
      <h3>Frontend 🎨</h3>
      <Checkbox
        options={['Javascript', 'Typescript']}
        value={linguagens}
        setValue={setLinguagens}
      />

      <h3>Backend 👨‍💻</h3>
      <Checkbox
        options={['Java', 'Go Lang', 'Node']}
        value={linguagens}
        setValue={setLinguagens}
      />

      <h4>Termos e Condições</h4>
      <Checkbox
        options={['Li e aceito os termos.']}
        value={termos}
        setValue={setTermos}
      />
    </form>
  );
}

export default App;
