import PropTypes from 'prop-types';
import styles from './section.module.css';

const Section = ({ title = '', children }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.section__header}>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;