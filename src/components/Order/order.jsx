import PropTypes from "prop-types";
import styles from "./order.module.css";
import imgDone from "../../images/done.svg";

const Order = ({ number }) => {

  if (!number) return null;

  return (
    <div className={styles.main}>
      <p className={styles.number}>
        {number}
      </p>
      <p className={styles.textNumber}>
        идентификатор заказа
      </p>
      <img className={styles.img} src={imgDone} alt="Done"></img>
      <p className={styles.textOne}>
        Ваш заказ начали готовить
      </p>
      <p className={styles.textTwo}>
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
};

Order.propTypes = {
  number: PropTypes.number.isRequired
};

export default Order;
