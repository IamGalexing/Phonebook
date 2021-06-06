import InButton from '../InButton';
import styles from './logInNav.module.css';

const LogInNav = () => {
  return (
    <div className={styles.navInContainer}>
      <InButton row="login" />
      <InButton row="register" />
    </div>
  );
};

export default LogInNav;
