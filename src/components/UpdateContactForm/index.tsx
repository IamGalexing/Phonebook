import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateContact, getContacts } from '../../redux/contacts';
import styles from './updateContactForm.module.css';

interface Props {
  id: string;
  name: string;
  number: string;
  onClose: () => void;
}

const UpdateContactForm = ({ id, name, number, onClose }: Props) => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const [nameNew, setNameNew] = useState(name);
  const [numberNew, setNumberNew] = useState(number);

  const onChangeInput = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    target.name === 'name'
      ? setNameNew(target.value)
      : setNumberNew(target.value);
  };

  const onSubmitForm = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    contacts.some(
      contact => contact.name === nameNew && contact.id !== id,
    )
      ? alert(`${nameNew} is already in the contact's list.`)
      : updateContactsState();
  };

  const updateContactsState = () => {
    dispatch(updateContact({ id, nameNew, numberNew }));
    onClose();
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
          value={nameNew}
          pattern=".{1,}&.*[^ ].*"
          title="The name has to contain at least 2 symbols and not only spaces"
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
          value={numberNew}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <span className={styles.placeholder}>enter phone number</span>
      </label>
      <div className={styles.contactForm__btnBlock}>
        <button className={styles.contactForm__btn} type="submit">
          Update
        </button>
        <button
          className={styles.contactForm__btn}
          type="button"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default UpdateContactForm;
