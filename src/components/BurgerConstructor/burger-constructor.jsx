import React from "react";
import classes from './burger-constructor.module.css';
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from "../Modal/modal";
import OrderDetails from "../OrderDetails/order-details";
import SelectedIngredientsContext from "../../services/selected-ingredients-context";
import * as api from '../utils/api';
import { baseUrl } from "../utils/constants";
import { costInitialState, costReducer } from "../utils/cost-reduce";

const BurgerConstructor = () => {
  const { selectedIngredients } = React.useContext(SelectedIngredientsContext);
  const [isModal, setModal] = React.useState(false);
  const [costState, costDispatcher] = React.useReducer(costReducer, costInitialState);
  const [orderNumber, setOrderNumber] = React.useState(0);

  const closeModal = () => {
    setModal(false);
  };

  const makeOrder = () => {
    api.fetchOrderNumber(baseUrl, selectedIngredients.map(item => item._id))
      .then((res) => setOrderNumber(res.order.number))
      .then(() => setModal(true))
      .catch((err) => alert(err));
  };

  React.useEffect(() => {
    selectedIngredients.forEach(item => costDispatcher({ type: "increment", payload: item.price }));
  }, []);

  return (
    <div className={classes.burger}>
      <div className={classes.burger__components}>
        {selectedIngredients.filter(item => item.type === "bun")
          .map(item =>
            <div className={classes.burger__item_top} key="1">
              <ConstructorElement
                type="top"
                isLocked={true}
                text={item.name + ' (верх)'}
                price={item.price}
                thumbnail={item.image}
              />
            </div>
          )}
        <ul className={classes.burger__container} key="2">
          {selectedIngredients.filter(item => item.type !== "bun")
            .map((item, index) =>
              <li className={classes.burger__item} key={index}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text={item.name}
                  price={item.price}
                  thumbnail={item.image}
                />
              </li>
            )}
        </ul>
        {selectedIngredients.filter(item => item.type === "bun")
          .map(item =>
            <div className={classes.burger__item_top} key="3">
              <ConstructorElement
                type="bottom"
                isLocked={true}
                text={item.name + ' (низ)'}
                price={item.price}
                thumbnail={item.image}
              />
            </div>
          )}
      </div>
      <div className={classes.burger__result}>
        <div className={classes.burger__sum}>
          <p className="text text_type_digits-medium">{costState.count}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large" onClick={makeOrder}>
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
