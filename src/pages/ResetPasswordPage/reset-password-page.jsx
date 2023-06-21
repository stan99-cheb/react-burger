import React from "react";
import { useDispatch } from "react-redux";
import { useFormField } from "../../hooks/use-form-field";
import Input from "../../components/UI/Input/input";
import Button from "../../components/UI/Button/button";
import PasswordInput from "../../components/UI/PasswordInput/password-input";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { resetPasswordThunk } from "../../store/feature/user/reset-password-thunk";
import styles from './reset-password-page.module.css';

const ResetPasswordPage = () => {
  const [pass, setPass] = React.useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const password = useFormField();
  const token = useFormField();
  const path = location?.state?.from?.pathname || '';

  React.useEffect(() => {
    if (path !== '/forgot-password') navigate('/forgot-password');
    pass && navigate('/login', { replace: true });
  }, [pass, navigate, path]);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(resetPasswordThunk({ password: password.value, token: token.value }));
    setPass(true);
  };

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <form
          className={styles.form}
          onSubmit={formSubmitHandler}
        >
          <h2 className={styles.title}>Восстановление пароля</h2>
          <PasswordInput
            value={password.value}
            onChange={password.onChange}
            placeholder={'Введите новый пароль'}
            pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{4,20}$'
            minLength={4}
            maxLength={40}
            autoFocus
            required
          />
          <Input
            type='text'
            icon='CloseIcon'
            value={token.value}
            onChange={token.onChange}
            onIconClick={() => token.onChange({ target: { value: '' } })}
            placeholder={'Введите код из письма'}
            pattern='[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}'
            minLength={36}
            maxLength={36}
            required
          />
          <Button
            type='primary'
            size='medium'
            htmlType='submit'
            extraClass={styles.button}
            disabled={!password.value || !token.value}
          >
            Сохранить
          </Button>
          <footer className={styles.footer}>
            <p
              className={styles.forgot}
            >
              Вспомнили пароль?
              <Link
                className={styles.link}
                to='/login'
              > Войти
              </Link>
            </p>
          </footer>
        </form>
      </div>
    </main>
  );
};

export default ResetPasswordPage;
