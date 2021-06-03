import InButton from '../InButton';
import { ReactComponent as BookLogo } from '../../images/booked.svg';
import styles from './welcomeBlock.module.css';

const WelcomeBlock = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.welcome}>
            <span>Welcome to</span>
            <h1 className={styles.header}>
              Phoneb<span>oo</span>k
            </h1>
          </div>
          <p className={styles.about}>
            <span>"Keep all your phone contacts at one place"</span>
          </p>
          <p className={styles.toStart}>
            Please
            <span className={styles.button}>
              <InButton title="login" />
            </span>
            or
            <span className={styles.button}>
              <InButton title="register" />
            </span>
            to start.
          </p>
        </div>
        <div className={styles.bookLogo}>
          <BookLogo />
        </div>
      </div>
    </>
  );
};

export default WelcomeBlock;
