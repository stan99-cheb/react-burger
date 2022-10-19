import React from 'react';
import '@ya.praktikum/react-developer-burger-ui-components';
import classes from './styles/App.module.css';
import Header from './components/Header/header';
import BurgerConstructor from './components/BurgerConstructor/burger-constructor';
import BurgerIngredients from './components/BurgerIngredients/burger-ingredients';
import * as api from './components/utils/api';
import { baseUrl } from './components/utils/constants';
import Loader from './components/UI/Loader/loader';
import BurgerIngredientsContext from "./services/burger-ingredients-context";

function App() {
  const [isDataLoading, setDataLoading] = React.useState(false);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    setDataLoading(true);
    api.fetchIngredients(baseUrl)
      .then((res) => setData(res.data))
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
                <BurgerIngredients />
                <BurgerConstructor />
              </BurgerIngredientsContext.Provider>
            </section>
          </main>
        )
      }
    </>
  );
}

export default App;
