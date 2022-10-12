import React from "react";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classes from './modal.module.css';

const Modal = ({ active, setActive, title, children }) => {
  const modalElement = document.getElementById('modal');

  return ReactDOM.createPortal(
    <div className={active ? `${classes.modal} ${classes.active}` : `${classes.modal}`} onClick={() => setActive(false)}>
      <div className={classes.container} onClick={(evt) => evt.stopPropagation()}>
        <div className={classes.wrapper}>
          <p className={`${classes.title} text text_type_main-large`}>{title}</p>
          <button className={classes["close-btn"]} type="button" aria-label="close-button" onClick={() => setActive(false)}></button>
        </div>
        {children}
      </div>
    </div>,
    modalElement
  );
};

Modal.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
  title: PropTypes.string
};

export default Modal;
