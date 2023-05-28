import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useFormField } from "../../hooks/use-form-field";
import Input from "../../components/UI/Input/input";
import PasswordInput from "../../components/UI/PasswordInput/password-input";
import Button from "../../components/UI/Button/button";
import { userState } from "../../services/slices/user-slice";
import { registrationThunk } from "../../services/thunk/registration-thunk";
import styles from "./registration-page.module.css";

const Registration = () => {
  const { isAuth } = useSelector(userState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isChange, formField, onChange, onReplace } = useFormField({
    email: '',
    password: '',
    name: '',
  });

  React.useEffect(() => {
    isAuth && navigate('/profile', { replace: true });
  }, [isAuth, navigate]);

  const onIconClick = (name) => {
    onReplace(name, '');
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(registrationThunk(formField));
  };

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <form
          className={styles.form}
          onSubmit={formSubmitHandler}
        >
          <h2 className={styles.title}>Регистрация</h2>
          <Input
            type='text'
            icon='CloseIcon'
            value={formField.name}
            onChange={e => onChange(e, 'name')}
            onIconClick={() => onIconClick('name')}
            placeholder={'name'}
            pattern='^[\w]{1,40}$'
            minLength={1}
            maxLength={40}
            autoFocus
            required
          />
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
            disabled={!isChange}
          >
            Зарегистрироваться
          </Button>
          <footer className={styles.footer}>
            <p
              className={styles.forgot}
            >
              Уже зарегистрированы
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

export { Registration };
