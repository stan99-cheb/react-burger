import { Link, useLocation } from "react-router-dom";
import OrderCard from "../../components/OrderCard/order-card";
import useOrders from "../../hooks/use-orders";
import styles from "./profile-order-page.module.css";

const ProfileOrdersPage = () => {
  const location = useLocation();
  const { orders } = useOrders('wss://norma.nomoreparties.space/orders');

  if (!orders) return null;

  const renderedOrders = orders.map(order =>
    <li
      key={order.number}
    >
      <Link
        to={`${order.number}`}
        state={{ background: location }}
        className={styles.link}
      >
        <OrderCard order={order} />
      </Link>
    </li>
  );

  return (
    <section className={styles.section}>
      <ul className={styles.ordersList}>
        {renderedOrders}
      </ul>
    </section>
  );
};

export default ProfileOrdersPage;
