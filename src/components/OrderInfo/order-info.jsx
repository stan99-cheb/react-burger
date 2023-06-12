import { useSelector } from "react-redux";
import { ingredientsState } from "../../services/slices/ingredients";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { icons } from "../../utils/icons";
import { CurrencyIcon } from "../UI/Icons";
import { ORDER_TYPE } from "../../utils/prop-types";
import styles from "./order-info.module.css";

const OrderInfo = ({ order }) => {
  const { data } = useSelector(ingredientsState);

  const duplicateValues = order?.ingredients.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

  const numberOfDuplicateValues = duplicateValues && Object.keys(duplicateValues);

  const price = order?.ingredients.reduce((acc, ingredient) => {
    return acc + data.find(item => item._id === ingredient).price;
  }, 0);

  const getIngredient = (id) => {
    const ingredient = data.find(item => item._id === id);
    const icon = icons.find(icon => icon._id === id);

    return (
      <article className={styles.article}>
        <img src={icon.path} alt="icon" />
        <p className={styles.name}>
          {ingredient.name}
        </p>
        <p className={styles.price}>
          {duplicateValues[id] > 1
            ? `${duplicateValues[id]} x `
            : ''}
          {ingredient.price}
          <CurrencyIcon type="primary" />
        </p>
      </article>
    );
  };

  return (
    <article className={styles.container}>
      <p className={styles.number}>
        #{order.number}
      </p>
      <h2 className={styles.title}>
        {order.name}
      </h2>
      <p className={styles.status}>
        {order.status === 'done' ? 'Выполнен' : 'В работе'}
      </p>
      <p className={styles.content}>
        Состав:
      </p>
      <ul className={styles.ingredients}>
        {numberOfDuplicateValues.map((id, i) =>
          <li key={i}>
            {getIngredient(id)}
          </li>
        )}
      </ul>
      <p className={styles.timePrice}>
        <FormattedDate date={new Date(`${order.createdAt}`)} />
        <span className={styles.price}>
          {price}
          <CurrencyIcon type="primary" />
        </span>
      </p>
    </article>
  );
};

OrderInfo.propTypes = {
  order: ORDER_TYPE.isRequired,
};

export default OrderInfo;
