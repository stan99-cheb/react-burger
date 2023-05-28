import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useFormField } from "../../hooks/use-form-field";
import { useAuth } from "../../hooks/use-auth";
import { userState } from "../../services/slices/user-slice";
import Input from "../../components/UI/Input/input";
import PasswordInput from "../../components/UI/PasswordInput/password-input";
import Button from "../../components/UI/Button/button";
import styles from "./login-page.module.css";

const Login = () => {
  const { isAuth } = useSelector(userState);
  const location = useLocation();
  const navigate = useNavigate();
  const { logIn } = useAuth();
  const { formField, onChange, onReplace } = useFormField({
    email: '',
    password: '',
  });
  const path = location?.state?.from || '/profile';

  const onIconClick = (name) => {
    onReplace(name, '');
  };

  React.useEffect(() => {
    isAuth && navigate(path);
  }, [isAuth, path, navigate]);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    logIn(formField);
  };

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <form
          className={styles.form}
          onSubmit={formSubmitHandler}
        >
          <h2 className={styles.title}>Вход</h2>
          <Input
            type='email'
            icon='CloseIcon'
            value={formField.email}
            onChange={e => onChange(e, 'email')}
            onIconClick={() => onIconClick('email')}
            placeholder={'e-mail'}
            pattern='[\w\-\.]+@[\w\-]+\.[a-z]{2,4}'
            minLength={6}
            maxLength={40}
            autoFocus
            required
          />
          <PasswordInput
            value={formField.password}
            onChange={e => onChange(e, 'password')}
            placeholder={'password'}
            pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{4,20}$'
            minLength={4}
            maxLength={40}
            required
          />
          <Button
            type='primary'
            size='medium'
            htmlType='submit'
            extraClass={styles.button}
          >
            Войти
          </Button>
          <footer className={styles.footer}>
            <p
              className={styles.reg}
            >
              Вы - новый пользователь?
              <Link
                className={styles.link}
                to='/registration'
              > Зарегистрироваться
              </Link>
            </p>
            <p
              className={styles.forgot}
            >
              Забыли пароль?
              <Link
                className={styles.link}
                to='/forgot-password'
              > Восстановить пароль
              </Link>
            </p>
          </footer>
        </form>
      </div>
    </main>
  );
};

export { Login };
