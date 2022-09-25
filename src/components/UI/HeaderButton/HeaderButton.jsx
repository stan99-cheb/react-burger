import React from "react";
import '@ya.praktikum/react-developer-burger-ui-components';
import classes from './HeaderButton.module.css';

const HeaderButton = ({ text, icon }) => {

  return (
    <button className={classes.button}>
      {icon}
      <p className="text text_type_main-default">
        {text}
      </p>
    </button>
  )
};

export default HeaderButton;