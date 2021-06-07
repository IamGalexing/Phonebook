import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import ModalUpdate from '../ModalUpdate';
import { ReactComponent as DeleteIcon } from '../../images/garbage.svg';
import { ReactComponent as ModifyContact } from '../../images/sheet.svg';
import { deleteContact } from '../../redux/contacts';
import { TItem } from '../../redux/intefaces/contacts';
import styles from './contactCard.module.css';

const ContactCard = ({ name, number, id }: TItem) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = useCallback(() => {
    setShowModal(!showModal);
  }, [showModal]);

  const handleDeleteContact = useCallback(
    () => dispatch(deleteContact(id)),
    [dispatch, id],
  );

  return (
    <div className={styles.card}>
      <p>{name}</p>
      <p>{number}</p>
      <div className={styles.menu}>
        <button
          className={styles.btn}
          type="button"
          id={id}
          title="update contact"
          onClick={toggleModal}
        >
          <ModifyContact />
        </button>
        <button
          className={styles.btn}
          type="button"
          id={id}
          title="delete contact"
          onClick={handleDeleteContact}
        >
          <DeleteIcon />
        </button>
      </div>
      {showModal && (
        <ModalUpdate
          onClose={toggleModal}
          id={id}
          name={name}
          number={number}
        />
      )}
    </div>
  );
};

export default ContactCard;
