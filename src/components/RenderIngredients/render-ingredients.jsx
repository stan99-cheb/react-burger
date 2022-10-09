import React from "react";
import PropTypes from 'prop-types';
import './render-ingredients.css';
import IngridientsCard from "../IngredientsCard/ingredients-card";

const RenderIngredients = ({ title, ingredients }) => {

  return (
    <>
      <h2 className="render__title text text_type_main-medium">{title}</h2>
      <ul className="render__type">
        {ingredients.map(ingredient =>
          <li key={ingredient._id}>
            <IngridientsCard ingredient={ingredient} />
          </li>
        )}
      </ul>
    </>
  );
};

RenderIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.object)
};

export default RenderIngredients;
