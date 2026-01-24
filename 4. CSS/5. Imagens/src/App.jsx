import React from 'react';
import './App.css';
import foto from './images/foto.jpg';
import Dog from './svg/Dog';

function App() {
  const [olho, setOlho] = React.useState(0);

  function handleClick() {
    setOlho(4);
    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        setOlho(i);
      }, 30 * i);
    }
  }

  return (
    <div>
      <p className="fundo" onClick={handleClick}></p>
      <Dog color={'#dbb42c'} olho={olho} />
      <img src={foto} alt="Cachorro" />
    </div>
  );
}

export default App;
