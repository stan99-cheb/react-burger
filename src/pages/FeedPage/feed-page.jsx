import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { allOrdersState, wsConnectionClosing, wsConnectionStart } from "../../store/slice/all-orders-slice";
import OrderCard from "../../components/OrderCard/order-card";
import styles from "./feed-page.module.css";

const FeedPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { data } = useSelector(allOrdersState);

  React.useEffect(() => {
    dispatch(wsConnectionStart());

    return () => {
      dispatch(wsConnectionClosing());
    };
  }, []);

  if (!data.success) return null;

  const renderedOrder = data.orders.map(order =>
    <li
      key={order.number}
      className={styles.orderItem}
    >
      <Link
        to={`${order.number}`}
        state={{ background: location }}
        className={styles.link}
      >
        <OrderCard order={order} />
      </Link>
    </li>
  )

  const renderedOrderStatus = (status) =>
    data.orders.map(item => {
      if (item.status === status) return item.number;
      return null;
    })
      .filter(item => item)
      .slice(0, 20)
      .map(item =>
        <li
          key={item}
          className={`${styles.item} ${styles.itemDone}`}
        >
          {item}
        </li>
      );

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>
        Лента заказов
      </h1>
      <div className={styles.container}>
        <ul className={styles.ordersList}>
          {renderedOrder}
        </ul>
        <div className={styles.stats}>
          <div className={styles.board}>
            <div className={styles.panel}>
              <p className={`${styles.text} ${styles.panelName}`}>
                Готовы
              </p>
              <ul className={styles.list}>
                {renderedOrderStatus('done')}
              </ul>
            </div>
            <div className={styles.panel}>
              <p className={`${styles.text} ${styles.panelName}`}>
                В работе
              </p>
              <ul className={styles.list}>
                {renderedOrderStatus('pending')}
              </ul>
            </div>
          </div>
          <div className={styles.text}>
            Выполнено за всё время<br />
            <span className={styles.statsDigits}>
              {data.total}
            </span>
          </div>
          <div className={styles.text}>
            Выполнено за сегодня<br />
            <span className={styles.statsDigits}>
              {data.totalToday}
            </span>
          </div>
        </div>
      </div>
    </div >
  );
};

export default FeedPage;
