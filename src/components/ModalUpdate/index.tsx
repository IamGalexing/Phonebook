import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import UpdateContactForm from '../UpdateContactForm';
import styles from './modalUpdate.module.css';

const modalRoot = document.querySelector(
  '#modal-root',
) as HTMLElement;

interface Props {
  id: string;
  name: string;
  number: string;
  onClose: () => void;
}

const ModalUpdate = (props: Props) => {
  useEffect(() => {
    window.addEventListener('keydown', handleEscapeBtn);
    return () =>
      window.removeEventListener('keydown', handleEscapeBtn);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function handleEscapeBtn(e: KeyboardEvent) {
    console.log('ESC pressed');
    if (e.code === 'Escape') props.onClose();
  }

  return createPortal(
    <div className={styles.Overlay}>
      <div className={styles.Modal}>
        <UpdateContactForm
          id={props.id}
          name={props.name}
          number={props.number}
          onClose={props.onClose}
        />
      </div>
    </div>,
    modalRoot,
  );
};

export default ModalUpdate;
