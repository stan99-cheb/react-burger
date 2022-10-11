import React from "react";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classes from './modal.module.css';

const Modal = ({ active, setActive, children }) => {
  const modalElement = document.getElementById('modal');

  return ReactDOM.createPortal(
    <div className={active ? `${classes.modal} ${classes.active}` : `${classes.modal}`} onClick={() => setActive(false)}>
      <div className={classes.container} onClick={(evt) => evt.stopPropagation()}>
        <button className={classes["close-btn"]} type="button" aria-label="close-button" onClick={() => setActive(false)}></button>
        {children}
      </div>
    </div>,
    modalElement
  );
};

Modal.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired
};

export default Modal;
