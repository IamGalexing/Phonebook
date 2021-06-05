import { useDispatch, useSelector } from 'react-redux';
import { getName, authLogOut } from '../../redux/auth';
import styles from './logOutNav.module.css';

const LogOutNav = () => {
  const dispatch = useDispatch();
  const name = useSelector(getName);

  return (
    <div className={styles.navOutContainer}>
      <span className={styles.name}>
        Welcome, <span> {name}</span>
      </span>
      <button
        type="button"
        className={styles.button}
        onClick={() => dispatch(authLogOut())}
      >
        LogOut
      </button>
    </div>
  );
};

export default LogOutNav;
