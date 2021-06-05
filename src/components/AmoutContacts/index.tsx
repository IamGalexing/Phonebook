import { useSelector } from 'react-redux';
import { getAmountOfContacts } from '../../redux/contacts';
import styles from './amountContacts.module.css';

const AmountContacts = () => {
  const amount = useSelector(getAmountOfContacts);

  return (
    <div className={styles.block}>
      <p className={styles.text}>Added contacts:</p>
      <span className={styles.amount}>{amount}</span>
    </div>
  );
};

export default AmountContacts;
