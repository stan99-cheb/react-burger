import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { userState } from "../../services/slices/user-slice";
import Order from "../Order/order";
import { CurrencyIcon } from "../UI/Icons";
import { burgerComponentState, resetBurgerComponents } from "../../services/slices/burger-components";
import Button from "../UI/Button/button";
import { getOrderNumber } from "../../store/feature/orderNumber/order-number-thunk";
import Modal from "../UI/Modal/modal";
import styles from "./burger-constructor-info.module.css";
import { resetOrderNumber } from "../../store/feature/orderNumber/order-number-slice";
import { numberOrderState, statusOrderState } from "../../store/feature/orderNumber/selectors";

const BurgerConstructorInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuth, accessToken } = useSelector(userState);
  const burgerComponents = useSelector(burgerComponentState);
  const number = useSelector(numberOrderState);
  const status = useSelector(statusOrderState);

  const optionsModal = {
    closeable: true,
  };

  const price = React.useMemo(() => {
    return (burgerComponents.bun ? burgerComponents.bun.price * 2 : 0) +
      burgerComponents.ingredients.reduce((acc, ingredient) => acc + ingredient.price, 0);
  }, [burgerComponents]);

  const makeOrder = () => {
    const idIngredients = [...burgerComponents.ingredients.map(ingredient =>
      ingredient._id), burgerComponents.bun._id];
    if (isAuth) {
      dispatch(getOrderNumber({ idIngredients, accessToken }));
    } else {
      alert('Авторизуйтесь');
      navigate('/login', { state: { from: location } });
    };
  };

  const closeModal = () => {
    dispatch(resetOrderNumber());
    dispatch(resetBurgerComponents());
  };

  return (
    <div className={styles.info}>
      <p className={styles.price}>
        {price}
        <CurrencyIcon type="primary" />
      </p>
      <Button
        type="primary"
        size="large"
        htmlType="button"
        onClick={makeOrder}
        extraClass={styles.button}
      >
        {status === 'loading'
          ? 'Loading...'
          : 'Оформить заказ'
        }
      </Button>
      {number &&
        <Modal
          closeModal={closeModal}
          options={optionsModal}
        >
          <Order number={number} />
        </Modal>
      }
    </div>
  );
}

export default BurgerConstructorInfo;
