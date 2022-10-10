import React from "react";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classes from './modalIngredientDetails.module.css';
import iconClose from '../../images/icon-close.svg';

const ModalIngredientDetails = ({ active, setActive, ingredient }) => {
  const modalRoot = document.getElementById('modal');
  const classesActive = [classes.modal];

  if (active) {
    classesActive.push(classes.active);
  }

  const classesTitle = ['text', 'text_type_main-large'];
  classesTitle.push(classes.title);
  const classesName = ['text', 'text_type_main-medium'];
  classesName.push(classes.name);

  return ReactDOM.createPortal(
    <div className={classesActive.join(' ')} onClick={() => setActive(false)}>
      <div className={classes.container} onClick={(evt) => evt.stopPropagation()}>
        <div className={classes["title-wrapper"]}>
          <p className={classesTitle.join(' ')}>Детали ингредиента</p>
          <img className={classes["icon-close"]} src={iconClose} alt="icon-close" onClick={() => setActive(false)}></img>
        </div>
        <img className={classes.image} src={ingredient.image} alt={ingredient.name}></img>
        <p className={classesName.join(' ')}>{ingredient.name}</p>
        <div className={classes["caloric-contents"]}>
          <div className={classes["caloric-contents__item"]}>
            <p className="text text_type_main-default">Калории, ккал</p>
            <p className="text text_type_digits-default">{ingredient.calories}</p>
          </div>
          <div className={classes["caloric-contents__item"]}>
            <p className="text text_type_main-default">Белки, г</p>
            <p className="text text_type_digits-default">{ingredient.proteins}</p>
          </div>
          <div className={classes["caloric-contents__item"]}>
            <p className="text text_type_main-default">Жиры, г</p>
            <p className="text text_type_digits-default">{ingredient.fat}</p>
          </div>
          <div className={classes["caloric-contents__item"]}>
            <p className="text text_type_main-default">Углеводы, г</p>
            <p className="text text_type_digits-default">{ingredient.carbohydrates}</p>
          </div>
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
