import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import classes from './ingredient-constructor.module.css';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const IngredientConstructor = ({ ingredient, index, moveListItem }) => {
  const [, dragRef] = useDrag({
    type: 'item',
    item: { index },
  });

  const [, dropRef] = useDrop({
    accept: 'item',
    hover: (item, monitor) => {
      const dragIndex = item.index
      const hoverIndex = index
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top

      if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return
      if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return

      moveListItem(dragIndex, hoverIndex)
      item.index = hoverIndex
    },
  });

  const ref = useRef(null)
  const dragDropRef = dragRef(dropRef(ref))

  return (
    <li className={classes.item} ref={dragDropRef}>
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
