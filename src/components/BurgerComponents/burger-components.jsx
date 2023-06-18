import { useDispatch, useSelector } from "react-redux";
import { burgerComponentState, updateBurgerComponent } from "../../services/slices/burger-components";
import ConstructorElement from "../UI/ConstructorElement/constructor-element";
import DragIcon from "../UI/Icons/drag-icon";
import styles from './burger-components.module.css';

const BurgerComponents = () => {
  const dispatch = useDispatch();
  const burgerComponents = useSelector(burgerComponentState);

  const deleteIngredient = (id) => {
    const index = burgerComponents.ingredients.findIndex(item => item._id === id);
    const swapArray = [...burgerComponents.ingredients];
    swapArray.splice(index, 1);
    dispatch(updateBurgerComponent(swapArray));
  };

  const dragStartHandler = (e, dragIndex) => {
    const data = { type: 'replace', payload: { dragIndex: dragIndex } };
    e.dataTransfer.setData("text/plain", JSON.stringify(data));
  };

  const dragEndHandler = (e) => e.dataTransfer.clearData();

  const dragOverHandler = (e) => e.preventDefault();

  const dropHandler = (e, dropIndex) => {
    const data = e.dataTransfer.getData("text");
    const { type, payload } = JSON.parse(data);
    if (type === 'replace') {
      e.preventDefault();
      const swapArray = [...burgerComponents.ingredients];
      [swapArray[payload.dragIndex], swapArray[dropIndex]]
        = [swapArray[dropIndex], swapArray[payload.dragIndex]];
      dispatch(updateBurgerComponent(swapArray));
    };
  };

  const renderedBurgerComponents = burgerComponents.ingredients.map((ingredient, index) =>
    <div
      className={styles.item}
      draggable={true}
      onDragStart={(e) => dragStartHandler(e, index)}
      onDragEnd={dragEndHandler}
      onDragOver={dragOverHandler}
      onDrop={e => dropHandler(e, index)}
      key={ingredient.uuid}
    >
      <span className={styles.dragIcon}>
        <DragIcon type="primary" />
      </span>
      <ConstructorElement
        name={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
        onClick={() => deleteIngredient(ingredient._id)}
      />
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.bun}>
        <ConstructorElement
          type="top"
          isLocked={true}
          name={burgerComponents.bun.name}
          price={burgerComponents.bun.price}
          thumbnail={burgerComponents.bun.image}
        />
      </div>
      {burgerComponents.ingredients.length !== 0 &&
        <div className={styles.list}>
          {renderedBurgerComponents}
        </div>
      }
      <div className={styles.bun}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          name={burgerComponents.bun.name}
          price={burgerComponents.bun.price}
          thumbnail={burgerComponents.bun.image}
        />
      </div>
    </div>
  );
};

export default BurgerComponents;
