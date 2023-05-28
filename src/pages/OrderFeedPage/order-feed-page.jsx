import React from "react";
import styles from './order-feed-page.module.css';

const OrderFeed = () => {
  const [data, setData] = React.useState({});

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

  console.log(data);

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
                  <div></div>
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
