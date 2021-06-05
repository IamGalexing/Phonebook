import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authSignUp } from '../../redux/auth';
import styles from './registerForm.module.css';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onChangeInput = ({ target }) => {
    switch (target.name) {
      case 'name':
        return setName(target.value);
      case 'email':
        return setEmail(target.value);
      case 'password':
        return setPassword(target.value);
      default:
        return;
    }
  };

  const onSubmitForm = evt => {
    evt.preventDefault();
    dispatch(authSignUp({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form className={styles.contactForm} onSubmit={onSubmitForm}>
      <p className={styles.title}>Register</p>
      <label className={styles.contactForm__label}>
        <input
          className={styles.contactForm__input}
          onChange={onChangeInput}
          placeholder="&nbsp;"
          type="name"
          name="name"
          value={name}
          required
        />
        <span className={styles.placeholder}>enter your name</span>
        <span className={styles.border}></span>
      </label>
      <label className={styles.contactForm__label}>
        <input
          className={styles.contactForm__input}
          onChange={onChangeInput}
          placeholder="&nbsp;"
          type="email"
          name="email"
          value={email}
          required
        />
        <span className={styles.placeholder}>enter email</span>
        <span className={styles.border}></span>
      </label>
      <label className={styles.contactForm__label}>
        <input
          className={styles.contactForm__input}
          onChange={onChangeInput}
          placeholder="&nbsp;"
          type="password"
          name="password"
          value={password}
          required
        />
        <span className={styles.placeholder}>enter password</span>
        <span className={styles.border}></span>
      </label>
      <button className={styles.contactForm__btn} type="submit">
        Create account
      </button>
    </form>
  );
};

export default RegisterForm;
