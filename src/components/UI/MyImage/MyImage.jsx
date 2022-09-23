import React from "react";
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import classes from './MyImage.module.css';

const MyImage = ({ bun }) => {

  return (
    <div className={classes.container}>
      <img className={classes.Img} src={bun.image} alt={bun.name}></img>
      <div className={classes.Price}>
        <p className="text text_type_digits-default">{bun.price}</p>
      </div>
      <div className={classes.Icon}>
        <CurrencyIcon type="primary" />
      </div>
      <div className={classes.Name}>
        <p className="text text_type_main-small">
          {bun.name}
        </p>
      </div>
    </div>
  )
};

export default MyImage;
