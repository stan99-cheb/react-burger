import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from './burger-ingredients.module.css';
import IngredientTabs from "../IngredientTabs/ingredient-tabs";
import IngredientsCategory from "../IngredientsCategory/ingredients-category";
import Modal from "../Modal/modal";
import IngredientDetails from "../IngredientDetails/ingredient-details";
import { detailIngredientSlice } from '../../services/slices/detail-ingredient';

const BurgerIngredients = () => {
  const dispatch = useDispatch();
  const { ingredients } = useSelector(state => state.ingredientsReducer);
  const detailIngredient = useSelector(state => state.detailIngredientReducer);

  const bunsIngredient = React.useMemo(() => ingredients.filter(item => item.type === 'bun'), [ingredients]);
  const saucesIngredient = React.useMemo(() => ingredients.filter(item => item.type === 'sauce'), [ingredients]);
  const mainsIngredient = React.useMemo(() => ingredients.filter(item => item.type === 'main'), [ingredients]);

  const closeModal = () => {
    dispatch(detailIngredientSlice.actions.setDetailIngredient(null));
  }

  return (
    <div className={classes.ingredients}>
      <div className={classes.ingredients__tabs}>
        <IngredientTabs />
      </div>
      <div className={classes.ingredients__container}>
        <IngredientsCategory title="Булки" ingredients={bunsIngredient} />
        <IngredientsCategory title="Соусы" ingredients={saucesIngredient} />
        <IngredientsCategory title="Начинки" ingredients={mainsIngredient} />
      </div>
      {detailIngredient && (
        <Modal closeModal={closeModal} title="Детали ингредиента">
          <IngredientDetails />
        </Modal>
      )}
    </div>
  );
};

export default BurgerIngredients;
