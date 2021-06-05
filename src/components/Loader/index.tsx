import styles from './loader.module.css';

const Loader = () => {
  return (
    <span className={styles.loader}>
      <span className={styles.loaderInner}></span>
    </span>
  );
};

export default Loader;
