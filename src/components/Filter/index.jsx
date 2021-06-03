import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contacts';
import styles from './filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <label className={styles.filterLabelBlock}>
      <input
        className={styles.filterInput}
        placeholder="&nbsp;"
        type="text"
        onChange={e => dispatch(filterContacts(e.target.value))}
      />
      <span className={styles.placeholder}>Find contact by name</span>
    </label>
  );
};

export default Filter;
