import { useEffect, useState } from 'react';
import { FetchDataContext } from './FetchContext';

const FetchComponent = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const limparDados = () => {
    setData(null);
  };

  return (
    <FetchDataContext.Provider value={{ data, limparDados }}>
      {children}
    </FetchDataContext.Provider>
  );
};

export default FetchComponent;
