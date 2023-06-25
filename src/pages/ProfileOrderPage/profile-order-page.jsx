import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { orderConnectionClosing, orderConnectionStart, wsOrderDataState } from "../../store/feature/orders/user-order-slice";
import OrderInfo from "../../components/OrderInfo/order-info";
import styles from "./profile-order-page.module.css";

const ProfileOrderPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { orders } = useSelector(wsOrderDataState);
  const order = orders && orders.find(order => order.number === Number(id));

  React.useEffect(() => {
    dispatch(orderConnectionStart());

    return () => {
      dispatch(orderConnectionClosing());
    };
  }, []);

  if (!order) return null;

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <OrderInfo order={order} />
      </section>
    </main>
  )
};

export { ProfileOrderPage };
