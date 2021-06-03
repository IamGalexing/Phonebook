import { NavLink } from 'react-router-dom';
import styles from './inButton.module.css';

const inButton = ({ title = '/' }) => {
  return (
    <NavLink
      to={`/${title}`}
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      {title}
    </NavLink>
  );
};

export default inButton;
