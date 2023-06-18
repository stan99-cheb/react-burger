import { useDispatch, useSelector } from "react-redux";
import { useFormField } from "../../hooks/use-form-field";
import Input from "../../components/UI/Input/input";
import PasswordInput from "../../components/UI/PasswordInput/password-input";
import { userState } from "../../services/slices/user-slice";
import Button from "../../components/UI/Button/button";
import { updateUserThunk } from "../../store/feature/user/update-user-thunk";
import styles from "./profile.module.css";

const Profile = () => {
  const dispatch = useDispatch();
  const { user, accessToken } = useSelector(userState);
  const name = useFormField(user.name);
  const email = useFormField(user.email);
  const password = useFormField();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const formField = {
      name: name.value,
      email: email.value,
      password: password.value
    };
    dispatch(updateUserThunk({ accessToken, formField }));
  };

  const formResetHandler = (e) => {
    e.preventDefault();
    name.onChange({ target: { value: user.name } });
    email.onChange({ target: { value: user.email } });
    password.onChange({ target: { value: '' } });
  };

  return (
    <form
      className={styles.form}
      onSubmit={formSubmitHandler}
      onReset={formResetHandler}
    >
      <Input
        type='text'
        icon='CloseIcon'
        value={name.value}
        onChange={name.onChange}
        onIconClick={() => name.onChange({ target: { value: '' } })}
        placeholder={'name'}
        pattern='^[\w+]{1,40}$'
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
      <div className={styles.wrapper_buttons}>
        <Button
          htmlType="submit"
          disabled={!name.value || !email.value || !password.value}
        >
          Сохранить
        </Button>
        <Button
          htmlType="reset"
        >
          Отмена
        </Button>
      </div>
    </form>
  );
};

export default Profile;
