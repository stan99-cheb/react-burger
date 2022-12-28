import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import INGREDIENT_TYPE from '../../utils/prop-types';
import classes from './ingredients-category.module.css';
import IngridientsCard from "../IngredientsCard/ingredients-card";

const IngredientsCategory = React.forwardRef(({ title, value, ingredients }, refs) => {
  const renderIngridientsCard = useCallback((ingredient) => {
    return (
      <li key={ingredient._id}>
        <IngridientsCard ingredient={ingredient} />
      </li>
    );
  }, []);

  return (
    <>
      <h2
        className={`${classes.render__title} text text_type_main-medium`}
        ref={refs[value]}
        data-tab={value}
      >
        {title}
      </h2>
      <ul className={classes.render__type}>
        {ingredients.map((ingredient) =>
          renderIngridientsCard(ingredient)
        )}
      </ul>
    </>
  );
});

IngredientsCategory.propTypes = {
  ingredients: PropTypes.arrayOf(INGREDIENT_TYPE).isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  refs: PropTypes.object,
};

export default IngredientsCategory;
