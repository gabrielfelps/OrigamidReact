import { useContext } from 'react';
import { FetchDataContext } from './FetchContext';

const Botao = () => {
  const { limparDados } = useContext(FetchDataContext);

  return <button onClick={limparDados}>Limpar Dados dos Produtos</button>;
};

export default Botao;
