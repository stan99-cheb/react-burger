import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { dataAllOrdersState, wsConnectionClosing, wsConnectionStart } from "../../store/slice/all-orders-slice";
import OrderInfo from "../../components/OrderInfo/order-info";
import styles from "./order-page.module.css";

const OrderPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { orders } = useSelector(dataAllOrdersState);
  const order = orders && orders.find(order => order.number === Number(id));

  React.useEffect(() => {
    dispatch(wsConnectionStart());

    return () => {
      dispatch(wsConnectionClosing());
    };
  }, []);

  if (!order) return null;

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <OrderInfo order={order} />
      </section>
    </main>
  );
};

export { OrderPage };
