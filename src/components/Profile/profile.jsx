import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormField } from "../../hooks/use-form-field";
import Input from "../../components/UI/Input/input";
import PasswordInput from "../../components/UI/PasswordInput/password-input";
import { userState } from "../../services/slices/user-slice";
import Button from "../../components/UI/Button/button";
import { updateUserThunk } from "../../services/thunk/update-user-thunk";
import styles from "./profile.module.css";

const Profile = () => {
  const dispatch = useDispatch();
  const { user, accessToken } = useSelector(userState);
  const currentUser = React.useRef({
    email: user.email,
    password: '',
    name: user.name,
  });
  const { isChange, formField, onChange, onReplace } = useFormField({
    email: user.email,
    password: '',
    name: user.name,
  });

  const onIconClick = (name) => {
    onReplace(name, '');
  };

  const clickCancelButton = () => {
    Object.keys(formField).forEach(key => onReplace(key, currentUser.current[key]));
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUserThunk({ accessToken, formField }));
    onReplace('password', '');
  };

  return (
    <form
      className={styles.form}
      onSubmit={formSubmitHandler}
    >
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
      <div className={styles.wrapper_buttons}>
        <Button
          htmlType="submit"
          disabled={!isChange}
        >
          Сохранить
        </Button>
        <Button
          htmlType="button"
          onClick={clickCancelButton}
        >
          Отмена
        </Button>
      </div>
    </form>
  );
};

export { Profile };
