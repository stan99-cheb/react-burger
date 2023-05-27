import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormField } from "../../hooks/use-form-field";
import Input from "../../components/UI/Input/input";
import Button from "../../components/UI/Button/button";
import { eraseState, forgotPasswordState } from "../../services/slices/forgot-password-slice";
import { forgotPasswordThunk } from "../../services/thunk/forgot-password-thunk";
import styles from './forgot-password.module.css';

const ForgotPassword = () => {
  const { success, message } = useSelector(forgotPasswordState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { isChange, formField, onChange, onReplace } = useFormField({
    email: '',
  });

  const onIconClick = (name) => {
    onReplace(name, '');
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(forgotPasswordThunk(formField));
  };

  React.useEffect(() => {
    return () => {
      dispatch(eraseState());
    };
  }, []);

  React.useEffect(() => {
    if (success) {
      message && alert(message);
      navigate('/reset-password', { state: { from: location } });
    }
  }, [success, message, navigate, location]);

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <form
          className={styles.form}
          onSubmit={formSubmitHandler}
        >
          <h2 className={styles.title}>Восстановление пароля</h2>
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
          <Button
            type='primary'
            size='medium'
            htmlType='submit'
            extraClass={styles.button}
            disabled={!isChange}
          >
            Восстановить
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

export { ForgotPassword };
