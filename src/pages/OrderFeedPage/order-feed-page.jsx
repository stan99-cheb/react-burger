import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CurrencyIcon } from "../../components/UI/Icons";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { icons } from "../../utils/icons";
import styles from "./order-feed-page.module.css";
import { socketState, wsConnectionClosing, wsConnectionStart } from "../../store/slice/socket-slice";

const OrderFeed = () => {
  const dispatch = useDispatch();
  const array = useSelector(state => {
    return state.ingredients.data.map(ingredient => {
      return {
        id: ingredient._id,
        price: ingredient.price,
      };
    })
  });
  const { data } = useSelector(socketState);
  const ordersStatusDone = React.useRef(null);
  const ordersStatusPending = React.useRef(null);

  React.useEffect(() => {
    dispatch(wsConnectionStart("wss://norma.nomoreparties.space/orders/all"));

    return () => {
      dispatch(wsConnectionClosing());
    };
  }, []);

  React.useEffect(() => {
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
  }, [data]);

  const getPrice = (ingredients) => {
    const filterArray = ingredients.filter(ingredient => ingredient);
    return filterArray.reduce((acc, ingredient) => {
      return acc + array.find(item => {
        return item.id === ingredient;
      }).price;
    }, 0);
  };

  const getIngredients = (ingredients) => {
    const filterArray = ingredients.filter(ingredient => ingredient);
    const count = ingredients.length - 6;
    const arrayRender = filterArray.map(ingredient =>
      icons.find(item => item._id === ingredient));
    return (
      <div className={styles.orderIngredients}>
        {count > 0 &&
          <div className={styles.overlay}>+{count}</div>
        }
        {arrayRender.slice(0, 6).map((icon, i) =>
          <img className={styles.img} src={icon.path} alt="icon" key={i} />
        )}
      </div>
    );
  };

  if (!data.success) return null;

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>
        Лента заказов
      </h1>
      <div className={styles.container}>

        <div className={styles.orders}>
          <ul className={styles.ordersList}>
            {data.orders.map((order, i) =>
              <li
                key={i}
              >
                <Link
                  to={`/feed/${order.number}`}
                  className={styles.link}
                >
                  <article className={styles.orderCard}>
                    <p className={styles.orderId}>
                      #{order.number}
                      <span className={styles.orderDate}>
                        <FormattedDate date={new Date(`${order.createdAt}`)} />
                      </span>
                    </p>
                    <div className={styles.orderName}>
                      {order.name}
                    </div>
                    <div className={styles.orderComponents}>
                      {getIngredients(order.ingredients)}
                      <div className={styles.orderPrice}>
                        {getPrice(order.ingredients)}
                        <CurrencyIcon type="primary" />
                      </div>
                    </div>
                  </article>
                </Link>
              </li>
            )}
          </ul>
        </div>
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

export { OrderFeed };
