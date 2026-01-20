import Input from './Form/Input';
import useForm from './Hooks/useForm';

function App() {
  const cep = useForm('cep');
  const email = useForm('email');
  const nome = useForm('nome');
  const sobrenome = useForm(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (cep.validate() && email.validate() && nome.validate())
      console.log('enviou');
    else console.log('Não enviou');
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input id="nome" type="text" label="Nome" {...nome} />

      <Input id="sobrenome" type="text" label="Sobrenome" {...sobrenome} />

      <Input
        id="cep"
        type="text"
        label="CEP"
        placeholder="00000-000"
        {...cep}
      />

      <Input id="email" type="email" label="Email" {...email} />
      <button>Enviar</button>
    </form>
  );
}

export default App;
