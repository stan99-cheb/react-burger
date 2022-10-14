import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classes from './modal.module.css';
import ModalOverlay from '../ModalOverlay/modal-overlay';

const Modal = ({ closeModal, title, children }) => {
  const modalElement = document.getElementById('modal');

  React.useEffect(() => {
    const onEscKeydown = (evt) => {
      evt.code === 'Escape' && closeModal();
    };
    document.addEventListener('keydown', onEscKeydown);

    return () => {
      document.removeEventListener('keydown', onEscKeydown);
    }
  }, []);

  return ReactDOM.createPortal(
    <>
      <ModalOverlay onClick={closeModal} />
      <div className={classes.modal}>
          <div className={classes.wrapper}>
            <p className={`${classes.title} text text_type_main-large`}>{title}</p>
            <button className={classes["close-btn"]} type="button" aria-label="close-button" onClick={closeModal}></button>
          </div>
          {children}
      </div>
    </>,
    modalElement
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.element
};

export default Modal;
