import { NavLink } from 'react-router-dom';
import styles from './inButton.module.css';

const InButton = ({ row = '/' }) => {
  return (
    <NavLink
      to={`/${row}`}
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      {row}
    </NavLink>
  );
};

export default InButton;
