import React from "react";
import { useSelector } from "react-redux";
import styles from '../../styles/order-feed.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { icons } from "../../utils/icons";

const OrderFeed = () => {
  const orderList = useSelector(state => state.orderNumber.value);
  let left = 0;
  let zIndex = 0;
  console.log(orderList);
  console.log(icons);
  return (
    <>
      <h1 className={`${styles.title} text_type_main-large`}>
        Лента заказов
      </h1>
      {
        orderList.length !== 0 &&
        <div className={styles.container}>
          <div className={styles.row1}>
            <p className={styles.number}>#{orderList[0].number}</p>
            <p className={styles.date}>{orderList[0].date}</p>
          </div>
          <div className={styles.row2}>
            <p>{orderList[0].name}</p>
          </div>
          <div className={styles.row3}>
            <div className={styles.icon_container}>
              {
                orderList[0].ingredients.otherIngredients.map(ingredient => {
                  const path = icons.find(icon => icon._id === ingredient._id).path;
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
            <p className={styles.cost}>
              <CurrencyIcon type="primary" />
              {orderList[0].cost}
            </p>
          </div>
        </div>
      }
    </>
  );
};

export default OrderFeed;
