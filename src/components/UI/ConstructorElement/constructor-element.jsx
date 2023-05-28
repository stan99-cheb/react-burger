import PropTypes from "prop-types";
import CurrencyIcon from "../Icons/currency-icon";
import DeleteIcon from "../Icons/delete-icon";
import LockIcon from "../Icons/lock-icon";
import styles from './constructor-element.module.css';

const ConstructorElement = ({ type, isLocked, name, price, thumbnail, onClick }) => {
  return (
    <article
      className={`${styles.element} ${styles[`element_type_${type}`]}`}
    >
      <img
        className={styles.image}
        src={thumbnail}
        alt={name}
      ></img>
      <p
        className={styles.name}
      >
        {name}
      </p>
      <p
        className={styles.price}
      >
        {price}
        <CurrencyIcon type="primary" />
      </p>
      <span
        className={styles.icon}
      >
        {isLocked
          ? <LockIcon type="secondary" />
          : <DeleteIcon type="primary" onClick={onClick} />
        }
      </span>
    </article>
  );
};

ConstructorElement.propTypes = {
  type: PropTypes.string,
  isLocked: PropTypes.bool,
  name: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  onClick: PropTypes.func,
};

export default ConstructorElement;
