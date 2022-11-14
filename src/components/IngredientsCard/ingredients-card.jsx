import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDrag } from 'react-dnd';
import INGREDIENT_TYPE from '../../utils/prop-types';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import classes from './ingredients-card.module.css';
import { detailIngredientSlice } from '../../services/slices/detail-ingredient';

const IngridientsCard = ({ ingredient }) => {
  const [count, setCount] = React.useState(0);
  const selectedIngredients = useSelector(state => state.selectedIngredientsReducer);
  const dispatch = useDispatch();
  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: ingredient,
  });

  const handleOnClick = () => {
    dispatch(detailIngredientSlice.actions.setDetailIngredient(ingredient));
  };

  React.useEffect(() => {
    const getCount = selectedIngredients.otherIngredients.reduce((acc, item) =>
      item._id === ingredient._id ? acc + 1 : acc, 0);

    if (selectedIngredients.bun) {
      ingredient.type === 'bun'
        ? ingredient._id === selectedIngredients.bun._id
          ? setCount(1)
          : setCount(0)
        : setCount(getCount ? getCount : 0);
    };
  }, [selectedIngredients]);

  return (
    <div className={classes.container} onClick={handleOnClick} ref={dragRef}>
      <img className={classes.Img} src={ingredient.image} alt={ingredient.name}></img>
      <p className={`${classes.Price} text text_type_digits-default`}>{ingredient.price}</p>
      <span className={classes.Icon}>
        <CurrencyIcon type="primary" />
      </span>
      <p className={`${classes.Name} text text_type_main-small`}>
        {ingredient.name}
      </p>
      <p className={`${classes.count} text text_type_digits-default`}>{count}</p>
    </div>
  );
};

IngridientsCard.propTypes = {
  ingredient: INGREDIENT_TYPE.isRequired
};

export default IngridientsCard;
