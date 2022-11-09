import React from 'react';
import { useDrop } from 'react-dnd';
import { useDispatch, useSelector } from "react-redux";
import classes from './burger-constructor.module.css';
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from "../Modal/modal";
import OrderDetails from "../OrderDetails/order-details";
import * as api from '../../utils/api';
import { BASE_URL } from "../../utils/constants";

const BurgerConstructor = () => {
  const dispatch = useDispatch();
  const selectedIngredients = useSelector(state => state.selectedIngredientsReducer);

  const [, dropRef] = useDrop({
    accept: 'ingredient',
    drop: (ingredient) => {
      dispatch({ type: 'ADD_SELECTED_INGREDIENTS', payload: ingredient });
    },
  });

  const [isModal, setModal] = React.useState(false);
  const [orderNumber, setOrderNumber] = React.useState(0);

  const closeModal = () => {
    setModal(false);
  };

  const makeOrder = () => {
    api.fetchOrderNumber(BASE_URL, [...selectedIngredients.otherIngredients.map(item => item._id), selectedIngredients.bun._id])
      .then((res) => setOrderNumber(res.order.number))
      .then(() => setModal(true))
      .catch((err) => alert(err));
  };

  const costBurger = React.useMemo(() => {
    return (
      (selectedIngredients.bun ? selectedIngredients.bun.price * 2 : 0) +
      selectedIngredients.otherIngredients.reduce((acc, ingredient) => acc + ingredient.price, 0)
    );
  }, [selectedIngredients]);

  return (
    <div className={classes.burger} ref={dropRef}>
      {selectedIngredients.bun &&
        <div className={classes.burger__components}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={selectedIngredients.bun.name + ' (верх)'}
            price={selectedIngredients.bun.price}
            thumbnail={selectedIngredients.bun.image}
            extraClass={classes.burger__item_top}
          />
          <ul className={classes.burger__container}>
            {selectedIngredients.otherIngredients
              .map((ingredient, index) =>
                <li className={classes.burger__item} key={index}>
                  <DragIcon type="primary" />
                  <ConstructorElement
                    text={ingredient.name}
                    price={ingredient.price}
                    thumbnail={ingredient.image}
                  />
                </li>
              )}
          </ul>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={selectedIngredients.bun.name + ' (низ)'}
            price={selectedIngredients.bun.price}
            thumbnail={selectedIngredients.bun.image}
            extraClass={classes.burger__item_bottom}
          />
        </div>
      }
      <div className={classes.burger__result}>
        <div className={classes.burger__sum}>
          <p className="text text_type_digits-medium">{costBurger ? costBurger : 0}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large" onClick={makeOrder} htmlType="button">
          Оформить заказ
        </Button>
      </div>
      {isModal && (
        <Modal closeModal={closeModal}>
          <OrderDetails orderNumber={orderNumber} />
        </Modal>
      )}
    </div>
  );
};

export default BurgerConstructor;
