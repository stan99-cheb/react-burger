import React from "react";
import styles from './order-card.module.css';

const OrderCard = ({ order, icons }) => {
  let left = 16;
  let zIndex = 0;
  let path = null;

  return (
    <div className={styles.container}>
      <div className={styles.row1}>
        <p className={`${styles.number} text_type_digits-default`}>#{order.number}</p>
        <p className={`${styles.date} text text_type_main-default`}>{order.date}</p>
      </div>
      <p className="text text_type_main-medium">{order.name}</p>
      <div className={styles.row3}>
        <div className={styles.icon_container}>
          {
            order.ingredients.otherIngredients.map((ingredient, index) => {
              path = icons.find(icon => icon._id === ingredient._id).path;
              left = left - 16;
              zIndex = zIndex - 100;
              return <img
                className={styles.icon}
                src={path}
                alt={ingredient.name}
                key={ingredient.uuid}
                style={{ left: `${left}px`, zIndex: `${zIndex}` }}
              />
            })
          }
        </div>
        <p className={`${styles.cost} text_type_digits-default`}>
          {order.cost}
        </p>
      </div>
    </div>
  );
};

export default OrderCard;
