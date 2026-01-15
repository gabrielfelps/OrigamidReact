import { useContext } from 'react';
import { FetchDataContext } from './FetchContext';

const Produto = () => {
  const { data } = useContext(FetchDataContext);

  if (!data) return null;

  return (
    <ul>
      {data.map(({ id, nome }) => (
        <li key={id}>{nome}</li>
      ))}
    </ul>
  );
};

export default Produto;
