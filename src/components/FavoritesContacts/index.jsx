import { useSelector } from 'react-redux';
import styles from './favoritesContacts.module.css';

const FavoritesContacts = () => {
  const favorites = useSelector(getAmountOfContacts);

  return (
    <div className={styles.block}>
      <p className={styles.text}>Added contacts:</p>
      <span className={styles.favorites}>{favorites}</span>
    </div>
  );
};

export default FavoritesContacts;
