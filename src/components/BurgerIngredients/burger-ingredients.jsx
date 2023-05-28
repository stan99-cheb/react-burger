import React from "react";
import { useSelector } from "react-redux";
import { TABS } from "../../utils/constants";
import IngredientsCategory from "../IngredientsCategory/ingredients-category";
import Tab from "../UI/Tab/tab";
import { ingredientsState } from "../../services/slices/ingredients";
import styles from './burger-ingredients.module.css';

const BurgerIngredients = () => {
  const { data } = useSelector(ingredientsState);
  const [activeTab, setActiveTab] = React.useState('bun');
  const rootRef = React.createRef(null);
  const tabsRef = TABS.reduce((acc, tab) => {
    acc[tab.value] = React.createRef();
    return acc;
  }, {});
  const refs = [rootRef, tabsRef];

  const scrollClickHandler = (value) => {
    tabsRef[value].current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const getTabIngredients = (value) => {
    return data.filter(ingredient => ingredient.type === value);
  };

  return (
    <section className={styles.main}>
      <article className={styles.tabs}>
        {TABS.map(tab =>
          <Tab
            active={activeTab === tab.value}
            value={tab.value}
            scrollClickHandler={scrollClickHandler}
            key={tab.value}
          >
            {tab.name}
          </Tab>
        )}
      </article>
      <article
        className={styles.ingredients}
        ref={rootRef}
      >
        {TABS.map(tab =>
          <IngredientsCategory
            name={tab.name}
            value={tab.value}
            ingredients={getTabIngredients(tab.value)}
            setActiveTab={setActiveTab}
            ref={refs}
            key={tab.value}
          />
        )}
      </article>
    </section>
  );
};

export default BurgerIngredients;
