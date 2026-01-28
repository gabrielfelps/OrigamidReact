import React from 'react';
import useFetch from '../../hooks/useFetch';
import Card from '../../components/card/Card';
import style from './Home.module.css';
import { Link } from 'react-router-dom';

const url = 'https://ranekapi.origamid.dev/json/api/produto';

const Home = () => {
  const { produtos, loading, error, fetchProdutos } = useFetch();

  React.useEffect(() => {
    fetchProdutos(url);
  }, [fetchProdutos]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;
  if (produtos)
    return (
      <section>
        <ul className={style.grid}>
          {produtos.map((produto) => (
            <li key={produto.id}>
              <Link>
                <Card produto={produto} />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    );
  else return null;
};

export default Home;
