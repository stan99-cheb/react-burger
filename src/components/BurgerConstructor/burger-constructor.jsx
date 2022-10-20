import React from "react";
import classes from './burger-constructor.module.css';
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from "../Modal/modal";
import OrderDetails from "../OrderDetails/order-details";
import BurgerIngredientsContext from "../../services/burger-ingredients-context";
import SelectedIngredientsContext from "../../services/selected-ingredients-context";

const BurgerConstructor = () => {
  const { data } = React.useContext(BurgerIngredientsContext);
  // const [ selectedIngredients, setSelectedIngredients ] = React.useState([]);
  const [isModal, setModal] = React.useState(false);

  const closeModal = () => {
    setModal(false);
  };

  const makeOrder = () => {
    setModal(true);
  };

  const filterIngredients = (array) => {
    return array.reduce((acc, item) => {
      return acc.find(item => item.type === "bun") && item.type === "bun"
        ? acc
        : [...acc, item]
    }, []);
  };

  return (
    <div className={classes.burger}>
      <div className={classes.burger__components}>
        {filterIngredients(data).reduce((acc, item) => item.type === "bun" ? [...acc, item] : acc, [])
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
          {filterIngredients(data).reduce((acc, item) => item.type === "bun" ? acc : [...acc, item], [])
            .map(item =>
              <li className={classes.burger__item} key={item._id}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text={item.name}
                  price={item.price}
                  thumbnail={item.image}
                />
              </li>
            )}
        </ul>
        {filterIngredients(data).reduce((acc, item) => item.type === "bun" ? [...acc, item] : acc, [])
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
