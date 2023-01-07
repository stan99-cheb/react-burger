import React from 'react';
import styles from '../../styles/login.module.css';
import { Link } from 'react-router-dom';
import { EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');

  return (
    <section className={styles.container}>
      <h2 className={`${styles.title} text_type_main-medium`}>
        Вход
      </h2>
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
        Войти
      </Button>
      <p className={`${styles.actions} text_type_main-default`}>
        Вы новый пользователь?
        <Link to='/register' className={styles.link}> Зарегистрироваться</Link>
      </p>
      <p className={`${styles.actions} text_type_main-default`}>
        Забыли пароль?
        <Link to='/forgot' className={styles.link}> Восстановить пароль</Link>
      </p>
    </section>
  );
};

export default Login;
