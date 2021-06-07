import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/contacts';
import styles from './filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const inputFilter = useCallback(
    ({ target }) => dispatch(filterContacts(target.value)),
    [dispatch],
  );

  return (
    <label className={styles.filterLabelBlock}>
      <input
        className={styles.filterInput}
        placeholder="&nbsp;"
        type="text"
        onChange={inputFilter}
      />
      <span className={styles.placeholder}>Find contact by name</span>
    </label>
  );
};

export default Filter;
