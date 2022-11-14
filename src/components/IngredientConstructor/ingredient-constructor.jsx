import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import classes from './ingredient-constructor.module.css';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const IngredientConstructor = ({ ingredient, index, moveIngredient }) => {
  const ref = useRef(null);
  const [, dragRef] = useDrag({
    type: 'item',
    item: { index },
  });

  const [{ handlerId }, dropRef] = useDrop({
    accept: 'item',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
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
    <li className={classes.item} ref={ref} data-handler-id={handlerId}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
      />
    </li>
  );
};

export { IngredientConstructor };
