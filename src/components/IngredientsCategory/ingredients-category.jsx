import React from "react";
import PropTypes from 'prop-types';
import INGREDIENT_TYPE from '../utils/prop-types';
import classes from './ingredients-category.module.css';
import IngridientsCard from "../IngredientsCard/ingredients-card";

const IngredientsCategory = ({ title, ingredients, ...props }) => {
  const titleClasses = ['text', 'text_type_main-medium'];
  titleClasses.push(classes.render__title);

  return (
    <>
      <h2 className={titleClasses.join(' ')}>{title}</h2>
      <ul className={classes.render__type}>
        {ingredients.map(ingredient =>
          <li key={ingredient._id}>
            <IngridientsCard ingredient={ingredient} {...props} />
          </li>
        )}
      </ul>
    </>
  );
};

IngredientsCategory.propTypes = {
  ingredients: PropTypes.arrayOf(INGREDIENT_TYPE).isRequired,
  title: PropTypes.string.isRequired
};

export default IngredientsCategory;
