import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, getContacts } from 'redux/contacts';
import styles from './addContactForm.module.css';

const AddContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onChangeInput = ({ target }) => {
    target.name === 'name'
      ? setName(target.value)
      : setNumber(target.value);
  };

  const onSubmitForm = evt => {
    evt.preventDefault();
    contacts.some(contact => contact.name === name)
      ? alert(`${name} is already in the contact's list.`)
      : updateContactsState();
  };

  const updateContactsState = () => {
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.contactForm} onSubmit={onSubmitForm}>
      <label className={styles.contactForm__label}>
        <input
          className={styles.contactForm__input}
          onChange={onChangeInput}
          placeholder="&nbsp;"
          type="text"
          name="name"
          value={name}
          pattern=".*[^ ].*"
          title="The name has to contain at least 2 symbols and not only spaces"
          minLength="2"
          required
        />
        <span className={styles.placeholder}>enter name</span>
      </label>
      <label className={styles.contactForm__label}>
        <input
          className={styles.contactForm__input}
          onChange={onChangeInput}
          placeholder="&nbsp;"
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <span className={styles.placeholder}>enter phone number</span>
      </label>
      <button className={styles.contactForm__btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default AddContactForm;
