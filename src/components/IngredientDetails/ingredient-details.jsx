import classes from './ingredient-details.module.css';
import INGREDIENT_TYPE from '../utils/prop-types';

const IngredientDetails = ({ selectedIngredient }) => {

  return (
    <>
      <img className={classes.image} src={selectedIngredient.image} alt={selectedIngredient.name}></img>
      <p className={`${classes.name} text text_type_main-medium`}>{selectedIngredient.name}</p>
      <ul className={classes["caloric-contents"]}>
        <li className={classes["caloric-contents__item"]}>
          <p className="text text_type_main-default">Калории, ккал</p>
          <p className="text text_type_digits-default">{selectedIngredient.calories}</p>
        </li>
        <li className={classes["caloric-contents__item"]}>
          <p className="text text_type_main-default">Белки, г</p>
          <p className="text text_type_digits-default">{selectedIngredient.proteins}</p>
        </li>
        <li className={classes["caloric-contents__item"]}>
          <p className="text text_type_main-default">Жиры, г</p>
          <p className="text text_type_digits-default">{selectedIngredient.fat}</p>
        </li>
        <li className={classes["caloric-contents__item"]}>
          <p className="text text_type_main-default">Углеводы, г</p>
          <p className="text text_type_digits-default">{selectedIngredient.carbohydrates}</p>
        </li>
      </ul>
    </>
  );
};

IngredientDetails.propTypes = {
  selectedIngredient: INGREDIENT_TYPE.isRequired
};


export default IngredientDetails;