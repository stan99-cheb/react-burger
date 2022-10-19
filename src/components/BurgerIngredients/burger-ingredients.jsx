import React from "react";
import classes from './burger-ingredients.module.css';
import IngredientTabs from "../IngredientTabs/ingredient-tabs";
import IngredientsCategory from "../IngredientsCategory/ingredients-category";
import Modal from "../Modal/modal";
import IngredientDetails from "../IngredientDetails/ingredient-details";
import BurgerIngredientsContext from "../../services/burger-ingredients-context";
import DetailIngredientsContext from "../../services/detail-ingredients-context";

const BurgerIngredients = () => {
  const { data } = React.useContext(BurgerIngredientsContext);
  const bunsIngredient = data.filter((item) => item.type === 'bun');
  const saucesIngredient = data.filter((item) => item.type === 'sauce');
  const mainsIngredient = data.filter((item) => item.type === 'main');
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
