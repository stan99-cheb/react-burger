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
  const ingredients = useSelector(state => state.ingredientsReducer.value);
  const detailIngredient = useSelector(state => state.detailIngredientReducer);
  const [activeTab, setActiveTab] = React.useState('');

  const refs = TABS.reduce((acc, tab) => {
    acc[tab.value] = React.createRef();
    return acc;
  }, {});

  React.useEffect(() => {
    const options = {
      rootMargin: '0px 0px -600px 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const value = entry.target.getAttribute("data-tab");
          setActiveTab(value);
        }
      });
    }, options);

    TABS.forEach(tab =>
      observer.observe(refs[tab.value].current)
    );
  }, []);

  const handleClickScroll = (value) => {
    refs[value].current.scrollIntoView({
      behavior: 'smooth',
    });
    setActiveTab(value);
  };

  const getIngredients = (value) => {
    return ingredients.filter(ingredient => ingredient.type === value);
  };

  const closeModal = () => {
    dispatch(detailIngredientSlice.actions.setDetailIngredient(null));
  };

  return (
    <div className={classes.ingredients}>
      <div className={classes.ingredients__tabs}>
        <IngredientTabs
          tabs={TABS}
          handleClickScroll={handleClickScroll}
          activeTab={activeTab}
        />
      </div>
      <div className={classes.ingredients__container}>
        {
          TABS.map(tab =>
            <IngredientsCategory
              title={tab.name}
              value={tab.value}
              ingredients={getIngredients(tab.value)}
              ref={refs}
              key={tab.value}
            />
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
