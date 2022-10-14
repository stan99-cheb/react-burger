import React from "react";
import classes from './burger-constructor.module.css';
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from "../Modal/modal";
import OrderDetails from "../OrderDetails/order-details";

const BurgerConstructor = () => {
  const [isModal, setModal] = React.useState(false);

  const closeModal = () => {
    setModal(false);
  };

  const makeOrder = () => {
    setModal(true);
  };

  return (
    <div className={classes.burger}>
      <div className={classes.burger__components}>
        <div className={classes.burger__item_top}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
          />
        </div>
        <div className={classes.burger__container}>
          <div className={classes.burger__item}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={'https://code.s3.yandex.net/react/code/sauce-03.png'}
            />
          </div>
        </div>
        <div className={classes.burger__item_bottom}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
          />
        </div>
      </div>
      <div className={classes.burger__result}>
        <div className={classes.burger__sum}>
          <p className="text text_type_digits-medium">610</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large" onClick={makeOrder}>
          Оформить заказ
        </Button>
      </div>
      {isModal && (
        <Modal closeModal={closeModal}>
          <OrderDetails />
        </Modal>
      )}

    </div>
  );
};

export default BurgerConstructor;
