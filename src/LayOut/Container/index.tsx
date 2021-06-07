import styles from './container.module.css';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const Container = ({ children }: Props) => (
  <main className={styles.mainContainer}>{children}</main>
);

export default Container;
