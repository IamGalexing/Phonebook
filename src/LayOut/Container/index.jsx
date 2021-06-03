import styles from './container.module.css';

const Container = ({ children }) => (
  <main className={styles.mainContainer}>{children}</main>
);

export default Container;
