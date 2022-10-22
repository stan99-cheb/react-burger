import React from 'react';
import '@ya.praktikum/react-developer-burger-ui-components';
import classes from './App.module.css';
import Header from '../Header/header';
import BurgerConstructor from '../BurgerConstructor/burger-constructor';
import BurgerIngredients from '../BurgerIngredients/burger-ingredients';
import * as api from '../utils/api';
import { BASE_URL } from '../../utils/constants';
import Loader from '../UI/Loader/loader';
import BurgerIngredientsContext from "../../services/burger-ingredients-context";
import SelectedIngredientsContext from "../../services/selected-ingredients-context";

function App() {
  const [isDataLoading, setDataLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [selectedIngredients, setSelectedIngredients] = React.useState([]);

  const getSelectedArray = (data) => {
    return [...Array(Math.floor(Math.random() * 13) + 2)]  //Получаем случайное количество ингридиентов
      .map(() => Math.floor(Math.random() * 13) + 2)       //Получаем массив случайных индексов
      .map(item => data[item]);                            //Получаем массив выбранных ингредиентов
  }

  React.useEffect(() => {
    setDataLoading(true);
    api.fetchIngredients(BASE_URL)
      .then((res) => {
        setData(res.data);
        return res.data
      })
      .then((data) => {
        const arraySelect = getSelectedArray(data);
        arraySelect.push(data[Math.floor(Math.random() * 2)]);  //Добавляем случайную булку
        setSelectedIngredients(arraySelect);
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
              <BurgerIngredientsContext.Provider value={{ data, setData }}>
                <SelectedIngredientsContext.Provider value={{ selectedIngredients, setSelectedIngredients }}>
                  <BurgerIngredients />
                  <BurgerConstructor />
                </SelectedIngredientsContext.Provider>
              </BurgerIngredientsContext.Provider>
            </section>
          </main>
        )
      }
    </>
  );
}

export default App;
