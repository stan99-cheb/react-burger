import React from "react";
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import CloseIcon from "../Icons/close-icon";
import styles from "./modal.module.css";

const Modal = ({ closeModal, options, children }) => {

  React.useEffect(() => {
    const onEscKeydown = (evt) => {
      evt.code === 'Escape' && closeModal();
    };
    document.addEventListener('keydown', onEscKeydown);

    return () => {
      document.removeEventListener('keydown', onEscKeydown);
    }
  }, [closeModal]);

  return ReactDOM.createPortal(
    <div
      className={styles.modal}
      onClick={closeModal}
    >
      <div
        className={styles.content}
        onClick={e => e.stopPropagation()}
      >
        <div className={styles.closeIcon}>
          {options.closeable &&
            <CloseIcon type='primary' onClick={closeModal} />}
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
    , document.body
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  closeModal: PropTypes.func,
  options: PropTypes.object,
  children: PropTypes.element,
};

export default Modal;
