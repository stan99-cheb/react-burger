import PropTypes from "prop-types";
import styles from './tab.module.css';

const Tab = ({ active, value, scrollClickHandler, children }) => {
  const onClick = () => {
    typeof scrollClickHandler === 'function' && scrollClickHandler(value);
  };

  return (
    <button
      className={active ? `${styles.main} ${styles.active}` : styles.main}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

Tab.propTypes = {
  active: PropTypes.bool,
  value: PropTypes.string,
  scrollClickHandler: PropTypes.func,
  children: PropTypes.string,
};

export default Tab;
