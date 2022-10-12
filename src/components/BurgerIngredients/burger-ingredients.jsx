import React from "react";
import PropTypes from 'prop-types';
import INGREDIENT_TYPE from '../utils/prop-types';
import classes from './burger-ingredients.module.css';
import IngredientTabs from "../IngredientTabs/ingredient-tabs";
import IngredientsCategory from "../IngredientsCategory/ingredients-category";
import Modal from "../Modal/modal";
import IngredientDetails from "../IngredientDetails/ingredient-details";

const BurgerIngredients = ({ data }) => {
  const bunsIngredient = data.filter((item) => item.type === 'bun');
  const saucesIngredient = data.filter((item) => item.type === 'sauce');
  const mainsIngredient = data.filter((item) => item.type === 'main');
  const [selectedIngredient , setSelectedIngredient ] = React.useState(null);

  const closeModal = () => {
    setSelectedIngredient(null);
  }

  return (
    <div className={classes.ingredients}>
      <div className={classes.ingredients__tabs}>
        <IngredientTabs />
      </div>
      <div className={classes.ingredients__container}>
        <IngredientsCategory title="Булки" ingredients={bunsIngredient} setSelectedIngredient={setSelectedIngredient} />
        <IngredientsCategory title="Соусы" ingredients={saucesIngredient} setSelectedIngredient={setSelectedIngredient} />
        <IngredientsCategory title="Начинки" ingredients={mainsIngredient} setSelectedIngredient={setSelectedIngredient} />
      </div>
      {selectedIngredient && (
        <Modal closeModal={closeModal} title="Детали ингредиента">
          <IngredientDetails selectedIngredient={selectedIngredient} />
        </Modal>
      )}
    </div>
  );
};

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(INGREDIENT_TYPE).isRequired
};

export default BurgerIngredients;
