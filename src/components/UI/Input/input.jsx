import React from "react";
import PropTypes from "prop-types";
import * as Icons from '../Icons/index';
import styles from './input.module.css'

const Input = ({
  type, icon, value, onChange, onIconClick, ...rest
}) => {
  const [focus, setFocus] = React.useState(false);
  const inputRef = React.useRef(null);
  const Icon = icon && Icons[icon];

  const focusHandler = () => {
    setFocus(true);
  };

  const blurHandler = () => {
    setFocus(false);
  };

  return (
    <div className={focus ? `${styles.container} ${styles.container_focus}` : `${styles.container}`}>
      <input
        className={styles.input}
        ref={inputRef}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={focusHandler}
        onBlur={blurHandler}
        {...rest}
      >
      </input>
      {value && icon &&
        <Icon type='primary' onClick={onIconClick} />
      }
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  icon: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onIconClick: PropTypes.func,
};

export default Input;
