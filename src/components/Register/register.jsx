import React from 'react';
import styles from './register.module.css';
import { Link } from 'react-router-dom';
import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';

const Register = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');

  return (
    <section className={styles.container}>
      <h2 className={`${styles.title} text_type_main-medium`}>
        Регистрация
      </h2>
      <Input
        type={'text'}
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder={'Имя'}
        extraClass={styles.input}
      />
      <EmailInput
        value={email}
        onChange={e => setEmail(e.target.value)}
        extraClass={styles.input}
      />
      <PasswordInput
        value={pass}
        onChange={e => setPass(e.target.value)}
        extraClass={styles.input}
      />
      <Button
        htmlType='submit'
        extraClass={styles.button}
      >
        Зарегистрироваться
      </Button>
      <p className={`${styles.actions} text_type_main-default`}>
        Уже зарегистрированы?
        <Link to='/login' className={styles.link}> Войти</Link>
      </p>
    </section>
  );
};

export default Register;
