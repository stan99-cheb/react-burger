import { useSelector } from "react-redux";
import CurrencyIcon from "../UI/Icons/currency-icon";
import { INGREDIENT_TYPE } from "../../utils/prop-types";
import { burgerComponentState } from "../../services/slices/burger-components";
import styles from './ingredients-card.module.css';

const IngredientsCard = ({ ingredient }) => {
  const burgerComponents = useSelector(burgerComponentState);

  const count = burgerComponents.bun
    ? ingredient.type === 'bun'
      ? ingredient._id === burgerComponents.bun._id
        ? 1
        : 0
      : burgerComponents.ingredients.reduce((acc, item) => item._id === ingredient._id ? acc + 1 : acc, 0)
    : 0

  const dragStartHandler = (e) => {
    const data = { type: 'add', payload: { id: ingredient._id } };
    e.dataTransfer.setData("text/plain", JSON.stringify(data));
  };

  const dragEndHandler = (e) => e.dataTransfer.clearData();

  const renderedCount = count !== 0 &&
    <p className={styles.count}>{count}</p>

  return (
    <article
      className={styles.container}
      draggable={true}
      onDragStart={dragStartHandler}
      onDragEnd={dragEndHandler}
    >
      <img className={styles.img} src={ingredient.image} alt={ingredient.name}></img>
      <p className={styles.price}>{ingredient.price}</p>
      <span className={styles.icon}>
        <CurrencyIcon type='primary' />
      </span>
      <p className={styles.name}>
        {ingredient.name}
      </p>
      {renderedCount}
    </article>
  );
};

IngredientsCard.propTypes = {
  ingredient: INGREDIENT_TYPE,
};

export default IngredientsCard;
