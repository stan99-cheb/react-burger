import React from "react";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classes from './modal-order-id.module.css';
import iconDone from '../../images/icon-done.svg';

const ModalOrderID = ({ active, setActive}) => {
  const modalOrderID = document.getElementById('modalOrderID');

  return ReactDOM.createPortal(
    <div className={active ? `${classes.modal} ${classes.active}` : `${classes.modal}`} onClick={() => setActive(false)}>
      <div className={classes.container} onClick={(evt) => evt.stopPropagation()}>
        <button className={classes["close-btn"]} type="button" aria-label="close-button" onClick={() => setActive(false)}></button>
        <p className={`${classes["order-id"]} text text_type_digits-large`}>034536</p>
        <p className={`${classes.title} text text_type_main-medium`}>идентификатор заказа</p>
        <img className={classes["icon-done"]} src={iconDone} alt="Иконка Done"></img>
        <p className={`${classes["text-one"]} text text_type_main-default`}>Ваш заказ начали готовить</p>
        <p className={`${classes["text-two"]} text text_type_main-default`}>Дождитесь готовности на орбитальной станции</p>
      </div>
    </div>,
    modalOrderID
  );
};

ModalOrderID.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired
};

export default ModalOrderID;
