import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDispatch } from 'react-redux';
import '@ya.praktikum/react-developer-burger-ui-components';
import classes from './App.module.css';
import Header from '../Header/header';
import BurgerConstructor from '../BurgerConstructor/burger-constructor';
import BurgerIngredients from '../BurgerIngredients/burger-ingredients';
import * as api from '../../utils/api';
import { BASE_URL } from '../../utils/constants';
import Loader from '../UI/Loader/loader';
import { setIngredients } from '../../services/slices/ingredients';
// import { selectedsIngredientsSlice } from '../../services/slices/selected-ingredients';

function App() {
  const dispatch = useDispatch();
  const [isDataLoading, setDataLoading] = React.useState(false);

  React.useEffect(() => {
    setDataLoading(true);
    api.fetchIngredients(BASE_URL)
      .then((res) => {
        dispatch(setIngredients(res.data));
      })
      .catch((err) => alert(err))
      .finally(() => setDataLoading(false));
  }, [dispatch]);

  return (
    <>
      <Header />
      {isDataLoading
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
