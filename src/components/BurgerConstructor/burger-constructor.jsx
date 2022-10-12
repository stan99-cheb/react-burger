import React from "react";
import classes from './burger-constructor.module.css';
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from "../Modal/modal";
import iconDone from '../../images/icon-done.svg';

const BurgerConstructor = () => {
  const [isModal, setModal] = React.useState(false);

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
      <Modal active={isModal} setActive={setModal}>
        <p className={`${classes["modal__order-id"]} text text_type_digits-large`}>034536</p>
        <p className={`${classes.modal__title} text text_type_main-medium`}>идентификатор заказа</p>
        <img className={classes["modal__icon-done"]} src={iconDone} alt="Иконка Done"></img>
        <p className={`${classes["modal__text-one"]} text text_type_main-default`}>Ваш заказ начали готовить</p>
        <p className={`${classes["modal__text-two"]} text text_type_main-default`}>Дождитесь готовности на орбитальной станции</p>
      </Modal>
    </div>
  );
};

export default BurgerConstructor;
