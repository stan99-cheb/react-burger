import classes from './ingredient-details.module.css';
import INGREDIENT_TYPE from '../../utils/prop-types';

const IngredientDetails = ({ ingredient }) => {
  return (
    <>
      <img className={classes.image} src={ingredient.image} alt={ingredient.name}></img>
      <p className={`${classes.name} text text_type_main-medium`}>{ingredient.name}</p>
      <ul className={classes["caloric-contents"]}>
        <li className={classes["caloric-contents__item"]}>
          <p className="text text_type_main-default">Калории, ккал</p>
          <p className="text text_type_digits-default">{ingredient.calories}</p>
        </li>
        <li className={classes["caloric-contents__item"]}>
          <p className="text text_type_main-default">Белки, г</p>
          <p className="text text_type_digits-default">{ingredient.proteins}</p>
        </li>
        <li className={classes["caloric-contents__item"]}>
          <p className="text text_type_main-default">Жиры, г</p>
          <p className="text text_type_digits-default">{ingredient.fat}</p>
        </li>
        <li className={classes["caloric-contents__item"]}>
          <p className="text text_type_main-default">Углеводы, г</p>
          <p className="text text_type_digits-default">{ingredient.carbohydrates}</p>
        </li>
      </ul>
    </>
  );
};

IngredientDetails.propTypes = {
  ingredient: INGREDIENT_TYPE.isRequired
};

export default IngredientDetails;
