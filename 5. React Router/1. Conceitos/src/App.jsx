import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contato from './Contato';
import Sobre from './Sobre';
import Home from './Home';
import Login from './Login';
import Header from './Header';
import Produto from './Produto';
import NaoEncontrado from './NaoEncontrado';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="contato" element={<Contato />} />
        <Route path="login" element={<Login />} />
        <Route path="produto/:id" element={<Produto />} />
        <Route path="*" element={<NaoEncontrado />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
