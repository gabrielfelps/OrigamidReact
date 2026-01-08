const App = () => {
  function handleClick({ target }) {
    alert(`Comprou: ${target.innerText}`);
  }

  function handleScroll(e) {
    console.log(e);
  }

  // A melhor pratica para eventos desse tipo é através de Hooks
  window.addEventListener('scroll', handleScroll);

  return (
    <div style={{ height: '200vh' }}>
      <button
        style={{ display: 'block', marginBottom: '15px' }}
        onClick={handleClick}
      >
        Camisa
      </button>
      <button onClick={handleClick}>Bermuda</button>
    </div>
  );
};

export default App;
