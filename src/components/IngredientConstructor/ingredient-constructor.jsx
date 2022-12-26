import { useRef } from 'react';
import PropTypes from 'prop-types';
import INGREDIENT_TYPE from '../../utils/prop-types';
import { useDrag, useDrop } from 'react-dnd';
import classes from './ingredient-constructor.module.css';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const IngredientConstructor = ({ ingredient, index, moveIngredient, delIngredient }) => {
  const ref = useRef(null);
  const [, dragRef] = useDrag({
    type: 'item',
    item: { index },
  });

  const [, dropRef] = useDrop({
    accept: 'item',
    hover: (item, monitor) => {
      if (!ref.current) {
        return
      };
      const dragIndex = item.index
      const hoverIndex = index
      if (dragIndex === hoverIndex) {
        return
      };
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top

      if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return
      if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return

      moveIngredient(dragIndex, hoverIndex)
      item.index = hoverIndex
    },
  });

  dragRef(dropRef(ref));

  return (
    <li className={classes.item} ref={ref}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
        handleClose={delIngredient}
      />
    </li>
  );
};

IngredientConstructor.propTypes = {
  ingredient: INGREDIENT_TYPE.isRequired,
  index: PropTypes.number.isRequired,
  moveIngredient: PropTypes.func,
  delIngredient: PropTypes.func,
};

export { IngredientConstructor };
