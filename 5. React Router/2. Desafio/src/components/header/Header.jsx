import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul className={styles.flex}>
          <li>
            <NavLink className={styles.navLink} to="/" end>
              Produtos
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.navLink} to="contact">
              Contato
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
