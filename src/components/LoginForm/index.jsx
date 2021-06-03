import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authLogin } from 'redux/auth';
import styles from './loginForm.module.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onChangeInput = ({ target }) => {
    target.name === 'email'
      ? setEmail(target.value)
      : setPassword(target.value);
  };

  const onSubmitForm = evt => {
    evt.preventDefault();
    dispatch(authLogin({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <form className={styles.contactForm} onSubmit={onSubmitForm}>
      <p className={styles.title}>Login</p>
      <label className={styles.contactForm__label}>
        <input
          className={styles.contactForm__input}
          placeholder="&nbsp;"
          onChange={onChangeInput}
          type="email"
          name="email"
          value={email}
          required
        />
        <span className={styles.placeholder}>enter email</span>
      </label>
      <label className={styles.contactForm__label}>
        <input
          className={styles.contactForm__input}
          placeholder="&nbsp;"
          onChange={onChangeInput}
          type="password"
          name="password"
          value={password}
          required
        />
        <span className={styles.placeholder}>enter password</span>
      </label>
      <button className={styles.contactForm__btn} type="submit">
        Log me in
      </button>
    </form>
  );
};

export default LoginForm;
