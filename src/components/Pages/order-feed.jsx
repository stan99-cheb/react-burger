import React from "react";
import { useSelector } from "react-redux";
import styles from '../../styles/order-feed.module.css';
import { icons } from "../../utils/icons";
import OrderCard from "../OrderCard/order-card";

const OrderFeed = () => {
  const orderList = useSelector(state => state.orderNumber.value);

  console.log(orderList);
  console.log(icons);
  return (
    <>
      <h1 className={`${styles.title} text_type_main-large`}>
        Лента заказов
      </h1>
      <ul className={styles.list}>
        {
          orderList.map(order =>
            <li>
              <OrderCard order={order} icons={icons} />
            </li>
          )
        }
      </ul>
    </>
  );
};

export default OrderFeed;
