import Button from './Button';
import Input from './Input';

const Form = () => {
  return (
    <form action="">
      <Input id="email" label="Email" required />
      <Input id="senha" label="Senha" type="password" />
      <Button />
    </form>
  );
};

export default Form;
