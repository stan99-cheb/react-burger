import React from "react";
import INGREDIENT_TYPE from '../utils/prop-types';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import classes from './ingredients-card.module.css';

const IngridientsCard = ({ ingredient }) => {

  return (
    <div className={classes.container}>
      <img className={classes.Img} src={ingredient.image} alt={ingredient.name}></img>
      <div className={classes.Price}>
        <p className="text text_type_digits-default">{ingredient.price}</p>
      </div>
      <div className={classes.Icon}>
        <CurrencyIcon type="primary" />
      </div>
      <div className={classes.Name}>
        <p className="text text_type_main-small">
          {ingredient.name}
        </p>
      </div>
      <div className={classes.count}>
        <p className="text text_type_digits-default">1</p>
      </div>
    </div>
  )
};

IngridientsCard.propTypes = {
  ingredient: INGREDIENT_TYPE.isRequired
}

export default IngridientsCard;
