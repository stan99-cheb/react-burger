import React from "react";
import { Link, useLocation } from "react-router-dom";
import IngredientsCard from "../IngredientsCard/ingredients-card";
import PropTypes from 'prop-types';
import { INGREDIENT_TYPE } from "../../utils/prop-types";
import styles from './ingredients-category.module.css';

const IngredientsCategory = React.forwardRef((
  { name, value, ingredients, setActiveTab },
  refs
) => {
  const location = useLocation();
  const [rootRef, tabsRef] = refs;

  React.useEffect(() => {
    const observerOptions = {
      root: rootRef.current,
      rootMargin: "0px 0px -95% 0px",
      threshold: [0.0, 1.0],
    };

    const observerCallback = (entries) =>
      entries.forEach((entry) => {
        entry.isIntersecting && setActiveTab(value);
      });

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(tabsRef[value].current);

    return () => {
      observer.disconnect()
    };
  }, [rootRef, tabsRef, value, setActiveTab]);

  const renderedIngredientsCard = ingredients.map(ingredient =>
    <Link
      to={`ingredients/${ingredient._id}`}
      state={{ background: location }}
      className={styles.link}
      key={ingredient._id}
    >
      <IngredientsCard ingredient={ingredient} />
    </Link>
  );

  return (
    <div
      className={styles.main}
    >
      <h2
        className={styles.title}
        ref={tabsRef[value]}
      >
        {name}
      </h2>
      <div
        className={styles.cards}
      >
        {renderedIngredientsCard}
      </div>
    </div>
  );
});

IngredientsCategory.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(INGREDIENT_TYPE).isRequired,
  setActiveTab: PropTypes.func.isRequired,
  refs: PropTypes.object,
};

export default IngredientsCategory;
