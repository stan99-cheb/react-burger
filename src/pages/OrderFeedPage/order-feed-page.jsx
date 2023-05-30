import React from "react";
import { useSelector } from "react-redux";
import styles from "./order-feed-page.module.css";
import { CurrencyIcon } from "../../components/UI/Icons";
import { icons } from "../../utils/icons";

const OrderFeed = () => {
  const array = useSelector(state => {
    return state.ingredients.data.map(ingredient => {
      return {
        id: ingredient._id,
        price: ingredient.price,
      };
    })
  });
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const ws = new WebSocket("wss://norma.nomoreparties.space/orders/all");

    ws.onopen = (event) => {
      console.log('Соединение установлено');
    };

    ws.onmessage = (event) => {
      console.log('Получено сообщение');
      setData(JSON.parse(event.data));
    };

    ws.onclose = (event) => {
      console.log(event);
    };

    ws.onerror = (event) => {
      console.log('Получена ошибка');
    };

    return () => {
      ws && ws.close(1000, "Работа закончена");
    };
  }, []);

  const getPrice = (ingredients) => {
    return ingredients.reduce((acc, ingredient) => {
      return acc + array.find(item => item.id === ingredient).price;
    }, 0);
  };

  const getIngredients = (ingredients) => {
    const count = ingredients.length - 6;
    const array = ingredients.map(ingredient =>
      icons.find(item => item._id === ingredient));
    return (
      <div className={styles.orderIngredients}>
        {count > 0 &&
          <div className={styles.overlay}>+{count}</div>
        }
        {array.slice(0, 6).map((icon, i) =>
          <img className={styles.img} src={icon.path} alt="icon" key={i}></img>
        )}
      </div>
    );
  };

  if (!data) return null;

  // console.log(array);

  return (
    <div className={styles.main}>
      <h1 className={styles.title}      >
        Лента заказов
      </h1>
      <div className={styles.container}>
        <div className={styles.orders}>
          <ul className={styles.ordersList}>
            {data.orders.map((order, i) =>
              <li
                key={i}
              >
                <article className={styles.orderCard}>
                  <div className={styles.orderId}>
                    <div>#{order.number}</div>
                    <div>{order.createdAt}</div>
                  </div>
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
                {Array(11).fill(0).map((item, i) =>
                  <li
                    key={i}
                    className={`${styles.item} ${styles.itemDone}`}
                  >
                    123456
                  </li>
                )}
              </ul>
            </div>
            <div className={styles.panel}>
              <p className={`${styles.text} ${styles.panelName}`}>
                В работе
              </p>
              <ul className={styles.list}>
                {Array(9).fill(0).map((item, i) =>
                  <li
                    key={i}
                    className={styles.item}
                  >
                    123456
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
    </div>
  );
};

export { OrderFeed };
