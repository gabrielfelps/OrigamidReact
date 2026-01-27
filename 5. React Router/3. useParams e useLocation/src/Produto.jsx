import { useLocation, useParams } from 'react-router-dom';

const Produto = () => {
  const params = useParams();
  // Podemos usar para passar informações para um fetch
  const location = useLocation();
  console.log(location);
  const search = new URLSearchParams(location.search);
  console.log(search.get('memoria'));

  return (
    <div>
      <h1>Produto: {params.id}</h1>
    </div>
  );
};

export default Produto;
