import Home from './Home';
import Lista from './Lista';
import Produtos from './Produtos';

function App() {
  const { pathname } = window.location;

  let Pagina;

  if (pathname === '/produtos') Pagina = Produtos;
  else Pagina = Home;

  return (
    <section>
      <Lista />
      <Pagina />
    </section>
  );
}

export default App;
