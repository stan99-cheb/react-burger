import React, { useState } from "react";
import classes from './burger-constructor.module.css';
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOrderID from "../ModalOrderID/modal-order-id";

const BurgerConstructor = () => {
  const [isModal, setModal] = useState(false);

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
        <Button type="primary" size="large" onClick={() => setModal(true)}>
          Оформить заказ
        </Button>
      </div>
      <ModalOrderID active={isModal} setActive={setModal} />
    </div>
  );
};

export default BurgerConstructor;
