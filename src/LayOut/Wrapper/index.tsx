import styles from './wrapper.module.css';

interface Props {
  children: JSX.Element[] | JSX.Element | boolean;
}

const Wrapper = ({ children }: Props) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Wrapper;
