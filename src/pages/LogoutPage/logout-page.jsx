import { useDispatch } from "react-redux";
import Button from "../../components/UI/Button/button";
import { logoutThunk } from "../../store/feature/user/logout-thunk";
import styles from "./logout-page.module.css";

const LogoutPage = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    const refreshToken = localStorage.getItem('refreshToken');
    refreshToken && dispatch(logoutThunk(refreshToken));
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>
        Выйти из приложения
      </p>
      <Button
        type='primary'
        size='medium'
        htmlType='submit'
        onClick={onClick}
      >
        Выйти
      </Button>
    </div>
  );
};

export default LogoutPage;
