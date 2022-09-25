import React from "react";
import classes from './BurgerConstructor.module.css';
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerConstructor = ({ choice }) => {

  return (
    <div className={classes.burger}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ marginLeft: '46px' }}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
          />
        </div>
        <div style={{ display: 'flex', columnGap: '14px', alignItems: 'center' }}>
          <DragIcon type="primary" />
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={'https://code.s3.yandex.net/react/code/sauce-03.png'}
          />
        </div>
        <div style={{ margin: '0 0 40px 46px' }}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
          />
        </div>
      </div>
      <div style={{ display: 'flex', columnGap: '40px', alignItems: 'center', justifyContent: 'end', marginRight: '16px' }}>
        <div style={{ display: 'flex', columnGap: '8px', alignItems: 'center' }}>
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
