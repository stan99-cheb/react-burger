import React from "react";
import PropTypes from 'prop-types';
import './burger-ingredients.css';
import IngredientTabs from "../IngredientTabs/ingredient-tabs";
import RenderIngredients from "../RenderIngredients/render-ingredients";

const BurgerIngredients = ({ data }) => {
  const bunsIngredient = data.filter((item) => item.type === 'bun');
  const saucesIngredient = data.filter((item) => item.type === 'sauce');
  const mainsIngredient = data.filter((item) => item.type === 'main');

  return (
    <div className="ingredients">
      <div className="ingredients__tabs">
        <IngredientTabs />
      </div>
      <div className="ingredients__container">
        <RenderIngredients title="Булки" ingredients={bunsIngredient} />
        <RenderIngredients title="Соусы" ingredients={saucesIngredient} />
        <RenderIngredients title="Начинки" ingredients={mainsIngredient} />
      </div>
    </div>
  );
};

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
}

export default BurgerIngredients;
