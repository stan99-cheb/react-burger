import React from "react";
import classes from './ingredient-tabs.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

const IngredientTabs = ({ tabs, handleClickScroll }) => {
  const [current, setCurrent] = React.useState('bun');

  return (
    <div className={classes.tabs}>
      {
        tabs.map((tab, index) =>
          <Tab
            value={tab.value}
            active={current === tab.value}
            onClick={() => {
              setCurrent(tab.value);
              handleClickScroll(tab.name)
            }}
            key={index}
          >
            {tab.name}
          </Tab>
        )
      }
    </div>
  );
};

export default IngredientTabs;
