import { createPortal } from 'react-dom';
import { useEffect, useCallback } from 'react';
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
  const handleEscapeBtn = useCallback(
    (e: KeyboardEvent) => {
      if (e.code === 'Escape') props.onClose();
    },
    [props],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleEscapeBtn);
    return () =>
      window.removeEventListener('keydown', handleEscapeBtn);
  }, [handleEscapeBtn]);

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
