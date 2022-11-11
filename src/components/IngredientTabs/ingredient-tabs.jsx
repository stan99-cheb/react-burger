import classes from './ingredient-tabs.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

const IngredientTabs = ({ tabs, handleClickScroll, activeTab }) => {

  return (
    <div className={classes.tabs}>
      {
        tabs.map((tab) =>
          <Tab
            value={tab.value}
            active={activeTab === tab.value}
            onClick={() => {
              handleClickScroll(tab.value)
            }}
            key={tab.value}
          >
            {tab.name}
          </Tab>
        )
      }
    </div>
  );
};

export default IngredientTabs;
