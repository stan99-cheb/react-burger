import React, { useState } from "react";
import PropTypes from 'prop-types';
import INGREDIENT_TYPE from '../utils/prop-types';
import classes from './burger-ingredients.module.css';
import IngredientTabs from "../IngredientTabs/ingredient-tabs";
import IngredientsCategory from "../IngredientsCategory/ingredients-category";
import ModalIngredientDetails from "../ModalIngredientDetails/modalIngredientDetails";

const BurgerIngredients = ({ data }) => {
  const bunsIngredient = data.filter((item) => item.type === 'bun');
  const saucesIngredient = data.filter((item) => item.type === 'sauce');
  const mainsIngredient = data.filter((item) => item.type === 'main');
  const [isModal, setModal] = useState(false);
  const [isIngredient, setIngredient] = useState({});

  return (
    <div className={classes.ingredients}>
      <div className={classes.ingredients__tabs}>
        <IngredientTabs />
      </div>
      <div className={classes.ingredients__container}>
        <IngredientsCategory title="Булки" ingredients={bunsIngredient} setIngredient={setIngredient} setActive={setModal} />
        <IngredientsCategory title="Соусы" ingredients={saucesIngredient} setIngredient={setIngredient} setActive={setModal} />
        <IngredientsCategory title="Начинки" ingredients={mainsIngredient} setIngredient={setIngredient} setActive={setModal} />
      </div>
      <ModalIngredientDetails active={isModal} setActive={setModal} ingredient={isIngredient} />
    </div>
  );
};

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(INGREDIENT_TYPE).isRequired
}

export default BurgerIngredients;
