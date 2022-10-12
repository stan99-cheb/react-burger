import React from "react";
import PropTypes from 'prop-types';
import INGREDIENT_TYPE from '../utils/prop-types';
import classes from './burger-ingredients.module.css';
import IngredientTabs from "../IngredientTabs/ingredient-tabs";
import IngredientsCategory from "../IngredientsCategory/ingredients-category";
import Modal from "../Modal/modal";

const BurgerIngredients = ({ data }) => {
  const bunsIngredient = data.filter((item) => item.type === 'bun');
  const saucesIngredient = data.filter((item) => item.type === 'sauce');
  const mainsIngredient = data.filter((item) => item.type === 'main');
  const [isModal, setModal] = React.useState(false);
  const [isIngredient, setIngredient] = React.useState({});
  const modalContent = (
    <>
      <img className={classes.modal__image} src={isIngredient.image} alt={isIngredient.name}></img>
      <p className={`${classes.modal__name} text text_type_main-medium`}>{isIngredient.name}</p>
      <ul className={classes["modal__caloric-contents"]}>
        <CaloricContentsItem name="Калории, ккал" value={isIngredient.calories} />
        <CaloricContentsItem name="Белки, г" value={isIngredient.proteins} />
        <CaloricContentsItem name="Жиры, г" value={isIngredient.fat} />
        <CaloricContentsItem name="Углеводы, г" value={isIngredient.carbohydrates} />
      </ul>
    </>
  );

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
      <Modal active={isModal} setActive={setModal} title="Детали ингредиента">
        {modalContent}
      </Modal>
    </div>
  );
};

const CaloricContentsItem = ({ name, value }) => {

  return (
    <li className={classes["modal__caloric-contents__item"]}>
      <p className="text text_type_main-default">{name}</p>
      <p className="text text_type_digits-default">{value}</p>
    </li>
  );
};

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(INGREDIENT_TYPE).isRequired
};

export default BurgerIngredients;
