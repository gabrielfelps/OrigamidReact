import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';
import React from 'react';

const Header = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.log('Mudou a rota do website.');
  }, [location]);

  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>{' '}
      | <NavLink to="sobre">Sobre</NavLink> |{' '}
      <NavLink to="login">Login</NavLink> |{' '}
      <NavLink to="produto">Produto</NavLink>
      <p>Essa é o Header</p>
    </nav>
  );
};

export default Header;
