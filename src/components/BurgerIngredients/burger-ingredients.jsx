import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from './burger-ingredients.module.css';
import IngredientTabs from "../IngredientTabs/ingredient-tabs";
import IngredientsCategory from "../IngredientsCategory/ingredients-category";
import Modal from "../Modal/modal";
import IngredientDetails from "../IngredientDetails/ingredient-details";
import DetailIngredientsContext from "../../services/detail-ingredients-context";

const BurgerIngredients = () => {
  const ingredients = useSelector(state => state.ingredientsReducer.ingredients);

  const bunsIngredient = React.useMemo(() => ingredients.filter(item => item.type === 'bun'), [ingredients]);
  const saucesIngredient = React.useMemo(() => ingredients.filter(item => item.type === 'sauce'), [ingredients]);
  const mainsIngredient = React.useMemo(() => ingredients.filter(item => item.type === 'main'), [ingredients]);
  const [detailIngredient, setDetailIngredient] = React.useState(null);

  const closeModal = () => {
    setDetailIngredient(null);
  }

  return (
    <div className={classes.ingredients}>
      <div className={classes.ingredients__tabs}>
        <IngredientTabs />
      </div>
      <DetailIngredientsContext.Provider value={{ detailIngredient, setDetailIngredient }}>
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
      </DetailIngredientsContext.Provider>
    </div>
  );
};

export default BurgerIngredients;
