import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import ClassNames from 'classnames';
import { filterContacts } from '../../redux/contacts';
import styles from './filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);

  const inputFilter = useCallback(
    ({ target }) => {
      target.value ? setActive(true) : setActive(false);
      dispatch(filterContacts(target.value));
    },
    [dispatch],
  );

  const classInput = ClassNames(styles.filterInput, {
    [styles.active]: active,
  });

  return (
    <label className={styles.filterLabelBlock}>
      <input
        className={classInput}
        placeholder="&nbsp;"
        type="text"
        onChange={inputFilter}
      />
      <span className={styles.placeholder}>Find contact by name</span>
    </label>
  );
};

export default Filter;
