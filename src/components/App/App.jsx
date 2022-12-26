import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDispatch, useSelector } from 'react-redux';
import '@ya.praktikum/react-developer-burger-ui-components';
import classes from './App.module.css';
import Header from '../Header/header';
import BurgerConstructor from '../BurgerConstructor/burger-constructor';
import BurgerIngredients from '../BurgerIngredients/burger-ingredients';
import { BASE_URL } from '../../utils/constants';
import Loader from '../UI/Loader/loader';
import { getIngredients } from '../../services/slices/ingredients';

function App() {
  const status = useSelector(state => state.ingredients.status);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getIngredients(BASE_URL));
  }, []);

  return (
    <>
      <Header />
      {status === 'loading'
        ? <div className={classes.loader}><Loader /></div>
        : (
          <main>
            <h1 className={`${classes.main__title} text text_type_main-large`}>Соберите бургер</h1>
            <section className={classes.main__wrapper}>
              <DndProvider backend={HTML5Backend}>
                <BurgerIngredients />
                <BurgerConstructor />
              </DndProvider>
            </section>
          </main>
        )
      }
    </>
  );
}

export default App;
