import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormField } from "../../hooks/use-form-field";
import Input from "../../components/UI/Input/input";
import Button from "../../components/UI/Button/button";
import PasswordInput from "../../components/UI/PasswordInput/password-input";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { resetPasswordThunk } from "../../services/thunk/reset-password-thunk";
import { eraseState, resetPasswordState } from "../../services/slices/reset-password-slice";
import styles from './reset-password-page.module.css';

const ResetPassword = () => {
  const { success, message } = useSelector(resetPasswordState);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { isChange, formField, onChange, onReplace } = useFormField({
    password: '',
    token: '',
  });
  const path = location?.state?.from?.pathname || '';

  React.useEffect(() => {
    return () => {
      dispatch(eraseState());
    };
  }, []);

  React.useEffect(() => {
    if (path !== '/forgot-password') navigate('/forgot-password');
    if (success) {
      message && alert(message);
      navigate('/login', { replace: true });
    };
  }, [path, navigate, message, success]);

  const onIconClick = (name) => {
    onReplace(name, '');
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(resetPasswordThunk(formField));
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
            value={formField.password}
            onChange={e => onChange(e, 'password')}
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
            value={formField.token}
            onChange={e => onChange(e, 'token')}
            onIconClick={() => onIconClick('token')}
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
            disabled={!isChange}
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

export { ResetPassword };
