import classes from "./modal-overlay.module.css";
import PropTypes from 'prop-types';

const ModalOverlay = ({ onClick, children }) => {

  return (
    <div className={classes.overlay} onClick={onClick}>
      {children}
    </div>
  );
};

ModalOverlay.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default ModalOverlay;