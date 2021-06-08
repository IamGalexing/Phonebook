import { useSelector } from 'react-redux';
import Logo from '../Logo';
import LogInNav from '../LogInNav';
import LogOutNav from '../LogOutNav';
import { getIsLoggedIn } from '../../redux/auth';
// import styles from './header.module.css';

const styles = {
  headWrap: {
    padding: '20px 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid var(--text-color-2)',
  },
};

const Header = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <div style={styles.headWrap}>
      <Logo />
      {isLoggedIn ? <LogOutNav /> : <LogInNav />}
    </div>
  );
};

export default Header;
