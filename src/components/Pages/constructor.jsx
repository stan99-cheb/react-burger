import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDispatch, useSelector } from 'react-redux';
import '@ya.praktikum/react-developer-burger-ui-components';
import classes from '../../styles/constructor.module.css';
import BurgerConstructor from '../BurgerConstructor/burger-constructor';
import BurgerIngredients from '../BurgerIngredients/burger-ingredients';
import { BASE_URL } from '../../utils/constants';
import Loader from '../UI/Loader/loader';
import { getIngredients } from '../../services/slices/ingredients';

function Constructor() {
  const status = useSelector(state => state.ingredients.status);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getIngredients(BASE_URL));
  }, []);

  return status === 'loading'
    ? <Loader />
    : (
      <section>
        <h1 className={`${classes.main__title} text text_type_main-large`}>Соберите бургер</h1>
        <div className={classes.main__wrapper}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>
        </div>
      </section>
    )
};

export default Constructor;
