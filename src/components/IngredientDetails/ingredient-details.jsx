import React from 'react';
import classes from './ingredient-details.module.css';
import DetailIngredientsContext from "../../services/detail-ingredients-context";

const IngredientDetails = () => {
  const { detailIngredient } = React.useContext(DetailIngredientsContext);

  return (
    <>
      <img className={classes.image} src={detailIngredient.image} alt={detailIngredient.name}></img>
      <p className={`${classes.name} text text_type_main-medium`}>{detailIngredient.name}</p>
      <ul className={classes["caloric-contents"]}>
        <li className={classes["caloric-contents__item"]}>
          <p className="text text_type_main-default">Калории, ккал</p>
          <p className="text text_type_digits-default">{detailIngredient.calories}</p>
        </li>
        <li className={classes["caloric-contents__item"]}>
          <p className="text text_type_main-default">Белки, г</p>
          <p className="text text_type_digits-default">{detailIngredient.proteins}</p>
        </li>
        <li className={classes["caloric-contents__item"]}>
          <p className="text text_type_main-default">Жиры, г</p>
          <p className="text text_type_digits-default">{detailIngredient.fat}</p>
        </li>
        <li className={classes["caloric-contents__item"]}>
          <p className="text text_type_main-default">Углеводы, г</p>
          <p className="text text_type_digits-default">{detailIngredient.carbohydrates}</p>
        </li>
      </ul>
    </>
  );
};

export default IngredientDetails;
