import { useSelector } from "react-redux";
import { dataIngredientsState } from "../../store/feature/ingredients/ingredients-slice";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "../UI/Icons";
import { ORDER_TYPE } from "../../utils/prop-types";
import styles from "./order-card.module.css";

const OrderCard = ({ order }) => {
  const array = useSelector(dataIngredientsState);

  const getPrice = (ingredients) => {
    const filterArray = ingredients.filter(ingredient => ingredient);
    return filterArray.reduce((acc, ingredient) => {
      return acc + array.find(item => item._id === ingredient).price;
    }, 0);
  };

  const getIngredients = (ingredients) => {
    const filterArray = ingredients.filter(ingredient => ingredient);
    const count = ingredients.length - 6;
    const arrayRender = filterArray.map(ingredient =>
      array.find(item => item._id === ingredient));

    return (
      <div className={styles.orderIngredients}>
        {count > 0 &&
          <div className={styles.overlay}>+{count}</div>
        }
        {arrayRender.slice(0, 6).map((ingredient, i) =>
          <div className={styles.img}>
            <img src={ingredient.image_mobile} alt="icon" key={i} />
          </div>
        )}
      </div>
    );
  };

  return (
    <article className={styles.orderCard}>
      <p className={styles.orderId}>
        #{order.number}
        <span className={styles.orderDate}>
          <FormattedDate date={new Date(`${order.createdAt}`)} />
        </span>
      </p>
      <div className={styles.orderName}>
        {order.name}
      </div>
      <div className={styles.orderStatus}>
        {order.status}
      </div>
      <div className={styles.orderComponents}>
        {getIngredients(order.ingredients)}
        <div className={styles.orderPrice}>
          {getPrice(order.ingredients)}
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </article>
  );
};

OrderCard.propTypes = {
  order: ORDER_TYPE.isRequired,
};

export default OrderCard;
