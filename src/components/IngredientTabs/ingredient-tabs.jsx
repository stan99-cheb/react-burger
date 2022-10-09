import React from "react";
import classes from './ingredient-tabs.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

const IngredientTabs = () => {
  const [current, setCurrent] = React.useState('bun');

  return (
    <div className={classes.tabs}>
      <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="sauces" active={current === 'sauces'} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="fillings" active={current === 'fillings'} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  );
};

export default IngredientTabs;
