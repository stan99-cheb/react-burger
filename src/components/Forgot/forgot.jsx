import React from 'react';
import styles from './forgot.module.css';
import { Link } from 'react-router-dom';
import { EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';

const Forgot = () => {
  const [email, setEmail] = React.useState('');

  return (
    <section className={styles.container}>
      <h2 className={`${styles.title} text_type_main-medium`}>
        Восстановление пароля
      </h2>
      <EmailInput
        value={email}
        onChange={e => setEmail(e.target.value)}
        extraClass={styles.input}
      />
      <Button
        htmlType='submit'
        extraClass={styles.button}
      >
        Восстановить
      </Button>
      <p className={`${styles.actions} text_type_main-default`}>
        Вспомнили пароль?
        <Link to='/login' className={styles.link}> Войти</Link>
      </p>
    </section>
  );
};

export default Forgot;
