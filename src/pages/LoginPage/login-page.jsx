import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useFormField } from "../../hooks/use-form-field";
import { userState } from "../../store/feature/user/user-slice";
import Input from "../../components/UI/Input/input";
import PasswordInput from "../../components/UI/PasswordInput/password-input";
import Button from "../../components/UI/Button/button";
import styles from "./login-page.module.css";
import { loginThunk } from "../../store/feature/user/login-thunk";

const LoginPage = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector(userState);
  const email = useFormField();
  const password = useFormField();
  const location = useLocation();
  const navigate = useNavigate();
  const path = location?.state?.from || '/profile';

  React.useEffect(() => {
    isAuth && navigate(path);
  }, [isAuth, path, navigate]);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(loginThunk({ email: email.value, password: password.value }))
  };

  return (
    <section className={styles.section}>
      <form
        className={styles.form}
        onSubmit={formSubmitHandler}
      >
        <h2 className={styles.title}>Вход</h2>
        <Input
          type='email'
          icon='CloseIcon'
          value={email.value}
          onChange={email.onChange}
          onIconClick={() => email.onChange({ target: { value: '' } })}
          placeholder={'e-mail'}
          pattern='[\w\-\.]+@[\w\-]+\.[a-z]{2,4}'
          minLength={6}
          maxLength={40}
          autoFocus
          required
        />
        <PasswordInput
          value={password.value}
          onChange={password.onChange}
          placeholder={'password'}
          pattern='^.+$'
          minLength={4}
          maxLength={40}
          required
        />
        <Button
          type='primary'
          size='medium'
          htmlType='submit'
          extraClass={styles.button}
          disabled={!email.value || !password.value}
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
    </section>
  );
};

export default LoginPage;
