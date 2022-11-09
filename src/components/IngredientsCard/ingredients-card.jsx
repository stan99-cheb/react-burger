import { useDispatch } from 'react-redux';
import { useDrag } from 'react-dnd';
import INGREDIENT_TYPE from '../../utils/prop-types';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import classes from './ingredients-card.module.css';
import { detailIngredientSlice } from '../../services/slices/detail-ingredient';

const IngridientsCard = ({ ingredient }) => {
  const dispatch = useDispatch();
  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: ingredient,
  });

  const handleOnClick = () => {
    dispatch(detailIngredientSlice.actions.setDetailIngredient(ingredient));
  };

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
      <p className={`${classes.count} text text_type_digits-default`}>1</p>
    </div>
  );
};

IngridientsCard.propTypes = {
  ingredient: INGREDIENT_TYPE.isRequired
};

export default IngridientsCard;
