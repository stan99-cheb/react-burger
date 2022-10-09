import React from "react";
import PropTypes from 'prop-types';
import INGREDIENT_TYPE from '../utils/prop-types';
import classes from './burger-ingredients.module.css';
import IngredientTabs from "../IngredientTabs/ingredient-tabs";
import RenderIngredients from "../IngredientsCategory/ingredients-category";

const BurgerIngredients = ({ data }) => {
  const bunsIngredient = data.filter((item) => item.type === 'bun');
  const saucesIngredient = data.filter((item) => item.type === 'sauce');
  const mainsIngredient = data.filter((item) => item.type === 'main');

  return (
    <div className={classes.ingredients}>
      <div className={classes.ingredients__tabs}>
        <IngredientTabs />
      </div>
      <div className={classes.ingredients__container}>
        <RenderIngredients title="Булки" ingredients={bunsIngredient} />
        <RenderIngredients title="Соусы" ingredients={saucesIngredient} />
        <RenderIngredients title="Начинки" ingredients={mainsIngredient} />
      </div>
    </div>
  );
};

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(INGREDIENT_TYPE).isRequired
}

export default BurgerIngredients;
