import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from './burger-ingredients.module.css';
import IngredientTabs from "../IngredientTabs/ingredient-tabs";
import IngredientsCategory from "../IngredientsCategory/ingredients-category";
import Modal from "../Modal/modal";
import IngredientDetails from "../IngredientDetails/ingredient-details";
import { detailIngredientSlice } from '../../services/slices/detail-ingredient';
import { TABS } from "../../utils/constants";

const BurgerIngredients = () => {
  const dispatch = useDispatch();
  const ingredients = useSelector(state => state.ingredientsReducer);
  const detailIngredient = useSelector(state => state.detailIngredientReducer);

  TABS.forEach(tab =>
    tab.ingredients = ingredients.filter(ingredient => ingredient.type === tab.value)
  );

  const refs = TABS.reduce((acc, tab) => {
    acc[tab.name] = React.createRef();
    return acc;
  }, {});

  const handleClickScroll = (name) =>
    refs[name].current.scrollIntoView({
      behavior: 'smooth',
    });

  const closeModal = () => {
    dispatch(detailIngredientSlice.actions.setDetailIngredient(null));
  };

  return (
    <div className={classes.ingredients}>
      <div className={classes.ingredients__tabs}>
        <IngredientTabs tabs={TABS} handleClickScroll={handleClickScroll} />
      </div>
      <div className={classes.ingredients__container}>
        {
          TABS.map(tab =>
            <IngredientsCategory title={tab.name} ingredients={tab.ingredients} ref={refs} key={tab.name} />
          )
        }
      </div>
      {detailIngredient && (
        <Modal closeModal={closeModal} title="Детали ингредиента">
          <IngredientDetails />
        </Modal>
      )}
    </div>
  );
};

export default BurgerIngredients;
