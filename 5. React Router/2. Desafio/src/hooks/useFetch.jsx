import React from 'react';

const useFetch = () => {
  const [produtos, setProdutos] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const fetchProdutos = React.useCallback(async (url) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(url);
      if (!response.ok) throw new Error(`Algo deu errado: ${response.status}`);

      const data = await response.json();

      setProdutos(data);
    } catch (error) {
      setError(error.response);
    } finally {
      setLoading(false);
    }
  }, []);

  return { produtos, loading, error, fetchProdutos };
};

export default useFetch;
