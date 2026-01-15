import { useCallback, useState } from 'react';

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const request = useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);

      response = await fetch(url, options);
      json = await response.json();
    } catch (error) {
      json = null;
      setError(`Ops... Um erro aconteceu. ${error}`);
    } finally {
      setData(json);
      setLoading(false);
      return { response, json };
    }
  }, []);

  return { request, data, error, loading };
};

export default useFetch;
