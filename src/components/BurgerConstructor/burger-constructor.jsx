import React, { useCallback } from 'react';
import { useDrop } from 'react-dnd';
import { useDispatch, useSelector } from "react-redux";
import classes from './burger-constructor.module.css';
import { ConstructorElement, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from "../Modal/modal";
import OrderDetails from "../OrderDetails/order-details";
import { BASE_URL } from "../../utils/constants";
import { IngredientConstructor } from '../IngredientConstructor/ingredient-constructor';
import { add, update, reset } from '../../services/slices/selected-ingredients';
import { getOrderNumber } from '../../services/slices/order-number';
import Loader from '../UI/Loader/loader';
import { v4 as uuidv4 } from 'uuid';

const BurgerConstructor = () => {
  const dispatch = useDispatch();
  const selectedIngredients = useSelector(state => state.selectedIngredients);
  const orderNumber = useSelector(state => state.orderNumber.value);
  const status = useSelector(state => state.orderNumber.status);
  const [isModal, setModal] = React.useState(false);

  const [, dropRef] = useDrop({
    accept: 'ingredient',
    drop: (ingredient) => {
      if (ingredient.type !== 'bun' &&
        Object.entries(selectedIngredients.bun).length === 0) {
        return;
      };
      dispatch(add({ ingredient, uuid: uuidv4() }));
    },
  });

  const closeModal = () => {
    setModal(false);
    dispatch(reset());
  };

  const makeOrder = () => {
    if (Object.entries(selectedIngredients.bun).length === 0) {
      return;
    };
    const array = [...selectedIngredients.otherIngredients.map(item => item._id), selectedIngredients.bun._id];
    dispatch(getOrderNumber({ url: BASE_URL, array, selectedIngredients }));
    setModal(true);
  };

  const costBurger = React.useMemo(() => {
    return (
      (selectedIngredients.bun ? selectedIngredients.bun.price * 2 : 0) +
      selectedIngredients.otherIngredients.reduce((acc, ingredient) => acc + ingredient.price, 0)
    );
  }, [selectedIngredients]);

  const moveIngredient = useCallback(
    (dragIndex, hoverIndex) => {
      const array = [...selectedIngredients.otherIngredients];
      [array[dragIndex], array[hoverIndex]] =
        [array[hoverIndex], array[dragIndex]];
      dispatch(update(array));
    }, [selectedIngredients, dispatch]);

  const renderIngredients = useCallback((ingredient, index) => {
    const delIngredient = () => {
      const array = [...selectedIngredients.otherIngredients]
      array.splice(index, 1);
      dispatch(update(array));
    };
    return (
      <IngredientConstructor
        ingredient={ingredient}
        key={ingredient.uuid}
        index={index}
        moveIngredient={moveIngredient}
        delIngredient={delIngredient}
      />
    )
  }, [moveIngredient, dispatch, selectedIngredients.otherIngredients]);

  return (
    <div className={classes.burger} ref={dropRef}>
      {Object.entries(selectedIngredients.bun).length !== 0 &&
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
                renderIngredients(ingredient, index)
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
          <p className="text text_type_digits-medium">{costBurger || 0}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large" onClick={makeOrder} htmlType="button">
          Оформить заказ
        </Button>
      </div>
      {status === 'loading'
        ? <Loader />
        : isModal && (
          <Modal closeModal={closeModal}>
            <OrderDetails orderNumber={orderNumber.at(-1).number} />
          </Modal>
        )}
    </div>
  );
};

export default BurgerConstructor;
