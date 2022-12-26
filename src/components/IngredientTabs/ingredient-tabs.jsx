import classes from './ingredient-tabs.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

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

IngredientTabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClickScroll: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
};

export default IngredientTabs;
