import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { allOrdersState, wsConnectionClosing, wsConnectionStart } from "../../store/slice/all-orders-slice";
import styles from "./order-feed-page.module.css";
import OrderCard from "../../components/OrderCard/order-card";

const OrderFeedPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { data } = useSelector(allOrdersState);
  const ordersStatusDone = React.useRef(null);
  const ordersStatusPending = React.useRef(null);

  React.useEffect(() => {
    dispatch(wsConnectionStart());

    return () => {
      dispatch(wsConnectionClosing());
    };
  }, []);

  React.useEffect(() => {
    if (data.orders) {
      ordersStatusDone.current = [
        ...data.orders.map(item => {
          if (item.status === 'done') return item.number;
          return null;
        }).filter(item => item)
      ];
      ordersStatusPending.current = [
        ...data.orders.map(item => {
          if (item.status === 'pending') return item.number;
          return null;
        }).filter(item => item)
      ];
    };
  }, [data]);

  if (!data.success) return null;

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>
        Лента заказов
      </h1>
      <div className={styles.container}>
        <ul className={styles.ordersList}>
          {data.orders.map((order, i) =>
            <li
              key={i}
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
          )}
        </ul>
        <div className={styles.stats}>
          <div className={styles.board}>
            <div className={styles.panel}>
              <p className={`${styles.text} ${styles.panelName}`}>
                Готовы
              </p>
              <ul className={styles.list}>
                {ordersStatusDone.current && ordersStatusDone.current.slice(0, 20).map((item, i) =>
                  <li
                    key={i}
                    className={`${styles.item} ${styles.itemDone}`}
                  >
                    {item}
                  </li>
                )}
              </ul>
            </div>
            <div className={styles.panel}>
              <p className={`${styles.text} ${styles.panelName}`}>
                В работе
              </p>
              <ul className={styles.list}>
                {ordersStatusPending.current && ordersStatusPending.current.slice(0, 20).map((item, i) =>
                  <li
                    key={i}
                    className={styles.item}
                  >
                    {item}
                  </li>
                )}
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

export { OrderFeedPage };
