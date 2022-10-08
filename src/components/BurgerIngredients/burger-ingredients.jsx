import React from "react";
import PropTypes from 'prop-types';
import './burger-ingredients.css';
import IngridientsCard from "../IngredientsCard/ingredients-card";
import IngredientTabs from "../IngredientTabs/ingredient-tabs";

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
        <h2 className="ingredients__title text text_type_main-medium">Булки</h2>
        <ul className="ingredients__type">
          {bunsIngredient.map(bun =>
            <li key={bun._id}>
              <IngridientsCard ingredient={bun} />
            </li>
          )}
        </ul>
        <h2 className="ingredients__title text text_type_main-medium">Соусы</h2>
        <ul className="ingredients__type">
          {saucesIngredient.map(sauce =>
            <li key={sauce._id}>
              <IngridientsCard ingredient={sauce} />
            </li>
          )}
        </ul>
        <h2 className="ingredients__title text text_type_main-medium">Начинки</h2>
        <ul className="ingredients__type">
          {mainsIngredient.map(main =>
            <li key={main._id}>
              <IngridientsCard ingredient={main} />
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
}

export default BurgerIngredients;
