import React from 'react';
import styles from './reset.module.css';
import { Link } from 'react-router-dom';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';

const Reset = () => {
  const [code, setCode] = React.useState('');
  const [pass, setPass] = React.useState('');

  return (
    <section className={styles.container}>
      <h2 className={`${styles.title} text_type_main-medium`}>
        Восстановление пароля
      </h2>
      <PasswordInput
        value={pass}
        onChange={e => setPass(e.target.value)}
        placeholder={'Введите новый пароль'}
        extraClass={styles.input}
      />
      <Input
        type={'text'}
        value={code}
        onChange={e => setCode(e.target.value)}
        placeholder={'Введите код из письма'}
        extraClass={styles.input}
      />
      <Button
        htmlType='submit'
        extraClass={styles.button}
      >
        Сохранить
      </Button>
      <p className={`${styles.actions} text_type_main-default`}>
        Вспомнили пароль?
        <Link to='/login' className={styles.link}> Войти</Link>
      </p>
    </section>
  );
};

export default Reset;
