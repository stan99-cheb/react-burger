import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFormField } from "../../hooks/use-form-field";
import Input from "../../components/UI/Input/input";
import Button from "../../components/UI/Button/button";
import { forgotPasswordThunk } from "../../store/feature/user/forgot-password-thunk";
import styles from './forgot-password-page.module.css';

const ForgotPasswordPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const email = useFormField();
  const [pass, setPass] = React.useState(false);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(forgotPasswordThunk({ email: email.value }));
    setPass(true);
  };

  React.useEffect(() => {
    pass &&
      navigate('/reset-password', { state: { from: location } });
  }, [pass, navigate, location]);

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
          <Button
            type='primary'
            size='medium'
            htmlType='submit'
            extraClass={styles.button}
            disabled={!email.value}
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

export default ForgotPasswordPage;
