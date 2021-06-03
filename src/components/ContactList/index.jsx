import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getContactsList,
  getContactsToShow,
  getIsLoading,
} from 'redux/contacts';
import Loader from '../Loader';
import styles from './contactList.module.css';

import ContactCard from '../ContactCard';

const ContactList = () => {
  const contacts = useSelector(getContactsToShow);
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsList());
  }, [dispatch]);

  return (
    <ul className={styles.contactList}>
      {isLoading ? (
        <Loader />
      ) : (
        contacts.map(({ id, name, number }) => (
          <li className={styles.contactList__item} key={id}>
            <ContactCard id={id} name={name} number={number} />
          </li>
        ))
      )}
    </ul>
  );
};

export default ContactList;
