import React from 'react';
import '@ya.praktikum/react-developer-burger-ui-components';
import classes from './styles/App.module.css';
import Header from './components/Header/header';
import BurgerConstructor from './components/BurgerConstructor/burger-constructor';
import BurgerIngredients from './components/BurgerIngredients/burger-ingredients';
import * as api from './components/utils/api';


function App() {
  const url = 'https://norma.nomoreparties.space/api/ingredients';
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    api.getData(url)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header />
      <main>
        <h1 className={`${classes.main__title} text text_type_main-large`}>Соберите бургер</h1>
        <section className={classes.main__wrapper}>
          <BurgerIngredients data={data} />
          <BurgerConstructor />
        </section>
      </main>
    </>
  );
}

export default App;
