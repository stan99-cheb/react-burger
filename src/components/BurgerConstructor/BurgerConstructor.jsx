import React from "react";
import './BurgerConstructor.css';
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerConstructor = () => {

  return (
    <div className="burger">
      <div className="burger__components">
        <div className="burger__item_top">
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
          />
        </div>
        <div className="burger__item">
          <DragIcon type="primary" />
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={'https://code.s3.yandex.net/react/code/sauce-03.png'}
          />
        </div>
        <div className="burger__item_bottom">
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
          />
        </div>
      </div>
      <div className="burger__result">
        <div className="burger__sum">
          <p className="text text_type_digits-medium">610</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </div>
  )
};

export default BurgerConstructor;
