import PropTypes from "prop-types";
import styles from './button.module.css';

const Button = ({
  type = 'primary',
  size = 'medium',
  htmlType,
  onClick,
  extraClass = '',
  children,
  ...rest
}) => {
  const activeClass = [
    `${styles.button}`,
    `${styles[`button_type_${type}`]}`,
    `${styles[`button_size_${size}`]}`,
    `${extraClass}`
  ];

  return (
    <button
      className={activeClass.join(' ')}
      type={htmlType}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  htmlType: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  extraClass: PropTypes.string,
  children: PropTypes.string.isRequired,
};


export default Button;
