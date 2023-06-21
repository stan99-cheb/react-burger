import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useFormField } from "../../hooks/use-form-field";
import Input from "../../components/UI/Input/input";
import PasswordInput from "../../components/UI/PasswordInput/password-input";
import Button from "../../components/UI/Button/button";
import { registrationThunk } from "../../store/feature/user/registration-thunk";
import styles from "./registration-page.module.css";

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const name = useFormField();
  const email = useFormField();
  const password = useFormField();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(registrationThunk({ name: name.value, email: email.value, password: password.value }));
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
            value={name.value}
            onChange={name.onChange}
            onIconClick={() => name.onChange({ target: { value: '' } })}
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
            value={email.value}
            onChange={email.onChange}
            onIconClick={() => email.onChange({ target: { value: '' } })}
            placeholder={'e-mail'}
            pattern='[\w\-\.]+@[\w\-]+\.[a-z]{2,4}'
            minLength={6}
            maxLength={40}
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
            disabled={!name.value || !email.value || !password.value}
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

export default RegistrationPage;
