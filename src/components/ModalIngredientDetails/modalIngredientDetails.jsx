import React from "react";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classes from './modalIngredientDetails.module.css';
import iconClose from '../../images/icon-close.svg';

const ModalIngredientDetails = ({ active, setActive }) => {
  const modalRoot = document.getElementById('modal');
  const classesActive = [classes.modal];
  if (active) {
    classesActive.push(classes.active);
  }

  return ReactDOM.createPortal(
    <div className={classesActive.join(' ')} onClick={() => setActive(false)}>
      <div className={classes.container} onClick={(evt) => evt.stopPropagation()}>
        <div className={classes["title-wrapper"]}>
          <div className={classes.title}>Детали ингредиента</div>
          <img className={classes["icon-close"]} src={iconClose} alt="icon-close" onClick={() => setActive(false)}></img>
        </div>
        <div className={classes.image}></div>
        <div className={classes.name}></div>
        <div className={classes["caloric-contents"]}>
          <p className={classes["caloric-contents__item"]}>Калории, ккал</p>
          <p className={classes["caloric-contents__item"]}>Белки, г</p>
          <p className={classes["caloric-contents__item"]}>Жиры, г</p>
          <p className={classes["caloric-contents__item"]}>Углеводы, г</p>
        </div>
      </div>
    </div>,
    modalRoot
  )
};

ModalIngredientDetails.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired
};

export default ModalIngredientDetails;
