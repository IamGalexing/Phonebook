import InButton from '../InButton';
import styles from './logInNav.module.css';

const LogInNav = () => {
  return (
    <div className={styles.navInContainer}>
      <InButton title="login" />
      <InButton title="register" />
    </div>
  );
};

export default LogInNav;
