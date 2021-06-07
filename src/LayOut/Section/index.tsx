import styles from './section.module.css';

interface Props {
  title: string;
  children: JSX.Element[] | JSX.Element;
}

const Section = ({ title = '', children }: Props) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.section__header}>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
