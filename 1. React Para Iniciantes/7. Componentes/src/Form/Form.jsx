import Button from './Button';
import Input from './Input';

export default function Form() {
  return (
    <form action="">
      <p>
        <label htmlFor="nome">Nome</label>
        <Input />
      </p>
      <p>
        <label htmlFor="email">Email</label>
        <Input />
      </p>
      <Button />
    </form>
  );
}
