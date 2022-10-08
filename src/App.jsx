import React from 'react';
import '@ya.praktikum/react-developer-burger-ui-components';
import './styles/App.css';
import Header from './components/Header/header';
import BurgerConstructor from './components/BurgerConstructor/burger-constructor';
import BurgerIngredients from './components/BurgerIngredients/burger-ingredients';
import { data } from './components/utils/data';

function App() {
  
  return (
    <>
      <Header />
      <main>
        <h1 className="main__title text text_type_main-large">Соберите бургер</h1>
        <section className="main__wrapper">
          <BurgerIngredients data={data} />
          <BurgerConstructor />
        </section>
      </main>
    </>
  );
}

export default App;
