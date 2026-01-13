import React from 'react';

function App() {
  const [contar, setContar] = React.useState(0);

  const valor = React.useMemo(() => {
    const localItem = localStorage.getItem('produtoVistoPorUltimo');
    console.log('Aconteceu o memo');
    return localItem;
  }, []);

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
}

export default App;
