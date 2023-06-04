import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { orderConnectionClosing, orderConnectionStart, wsOrderDataState } from "../../store/slice/ws-order-slice";
import styles from "./order-history-page.module.css";
import OrderCard from "../../components/OrderCard/order-card";

const OrderHistoryPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { orders } = useSelector(wsOrderDataState);

  React.useEffect(() => {
    dispatch(orderConnectionStart());

    return () => {
      dispatch(orderConnectionClosing());
    };
  }, []);

  if (!orders) return null;

  return (
    <section className={styles.section}>
      <ul className={styles.ordersList}>
        {orders.map((order, i) =>
          <li
            key={i}
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
    </section>
  );
};

export { OrderHistoryPage };
