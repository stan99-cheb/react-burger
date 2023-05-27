import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Order from "../Order/order";
import { CurrencyIcon } from "../UI/Icons";
import { burgerComponentState, resetBurgerComponents } from "../../services/slices/burger-components";
import Button from "../UI/Button/button";
import { getOrderNumber } from "../../services/thunk/get-order-number";
import Modal from "../UI/Modal/modal";
import { orderState } from "../../services/slices/order";
import Loader from "../UI/Loader/loader";
import styles from "./burger-constructor-info.module.css";

const BurgerConstructorInfo = () => {
  const dispatch = useDispatch();
  const burgerComponents = useSelector(burgerComponentState);
  const { status } = useSelector(orderState);
  const number = useSelector(state => {
    return state.order.value.at(-1)?.number || 0;
  });
  const [isModal, setModal] = React.useState(false);

  const optionsModal = {
    closeable: true,
  };

  const price = React.useMemo(() => {
    return (
      (burgerComponents.bun ? burgerComponents.bun.price * 2 : 0) +
      burgerComponents.ingredients.reduce((acc, ingredient) => acc + ingredient.price, 0)
    );
  }, [burgerComponents]);

  const makeOrder = () => {
    const idIngredients = [...burgerComponents.ingredients.map(ingredient =>
      ingredient._id), burgerComponents.bun._id];
    dispatch(getOrderNumber(idIngredients))
      .then(result =>
        result?.payload?.success && setModal(true)
      );
  };

  const closeModal = () => {
    setModal(false);
    dispatch(resetBurgerComponents());
  };

  if (status === 'loading') return (<Loader />);

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
        Оформить заказ
      </Button>
      {isModal &&
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
