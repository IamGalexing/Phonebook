import { NavLink } from 'react-router-dom';
import { ReactComponent as LogoBook } from '../../images/booked.svg';
import styles from './logo.module.css';

const Logo = () => (
  <div>
    <NavLink to="/" exact className={styles.logoLink}>
      <LogoBook className={styles.logo} />
      <h1 className={styles.header}>
        Phoneb<span>oo</span>k
      </h1>
    </NavLink>
  </div>
);

export default Logo;
