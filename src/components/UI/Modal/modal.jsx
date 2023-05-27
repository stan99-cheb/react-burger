import React from "react";
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import CloseIcon from "../Icons/close-icon";
import styles from "./modal.module.css";

const Modal = ({ title, closeModal, options, children }) => {

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
        <header
          className={styles.header}
        >
          <h2
            className={styles.title}
          >
            {title}
          </h2>
          {options.closeable &&
            <CloseIcon type='primary' onClick={closeModal} />}
        </header>
        <main>
          {children}
        </main>
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
