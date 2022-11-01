import React from 'react';
import { useDispatch } from 'react-redux';
import '@ya.praktikum/react-developer-burger-ui-components';
import classes from './App.module.css';
import Header from '../Header/header';
import BurgerConstructor from '../BurgerConstructor/burger-constructor';
import BurgerIngredients from '../BurgerIngredients/burger-ingredients';
import * as api from '../../utils/api';
import { BASE_URL } from '../../utils/constants';
import Loader from '../UI/Loader/loader';
import { ingredientsSlice } from '../../services/slices/ingredients';
import { selectedsIngredientsSlice } from '../../services/slices/selected-ingredients';

function App() {
  const dispatch = useDispatch();
  const [isDataLoading, setDataLoading] = React.useState(false);

  const getSelectedArray = (data) => {
    return [...Array(Math.floor(Math.random() * 13) + 2)]  //Получаем случайное количество ингридиентов
      .map(() => Math.floor(Math.random() * 13) + 2)       //Получаем массив случайных индексов
      .map(item => data[item]);                            //Получаем массив выбранных ингредиентов
  }

  React.useEffect(() => {
    setDataLoading(true);
    api.fetchIngredients(BASE_URL)
      .then((res) => {
        dispatch(ingredientsSlice.actions.setIngredients(res.data));
        return res.data
      })
      .then((data) => {
        const arraySelect = getSelectedArray(data);
        arraySelect.unshift(data[Math.floor(Math.random() * 2)]);  //Добавляем случайную булку в начало массива
        arraySelect.push(arraySelect[0]);                          //Добавляем случайную булку в конец массива
        dispatch(selectedsIngredientsSlice.actions.setSelectedIngredients(arraySelect));
      })
      .catch((err) => alert(err))
      .finally(() => setDataLoading(false));
  }, []);

  return (
    <>
      <Header />
      {isDataLoading
        ? <div className={classes.loader}><Loader /></div>
        : (
          <main>
            <h1 className={`${classes.main__title} text text_type_main-large`}>Соберите бургер</h1>
            <section className={classes.main__wrapper}>
              <BurgerIngredients />
              <BurgerConstructor />
            </section>
          </main>
        )
      }
    </>
  );
}

export default App;
