import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contato from './Home';
import Sobre from './Sobre';
import Home from './Home';
import Header from './Header';
import NaoEncontrado from './NaoEncontrado';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="contato" element={<Contato />} />
        <Route path="*" element={<NaoEncontrado />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
