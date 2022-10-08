import React from 'react';
import '@ya.praktikum/react-developer-burger-ui-components';
import './styles/App.css';
import Header from './components/Header/Header';
import BurgerConstructor from './components/BurgerConstructor/BurgerConstructor';
import BurgerIngredients from './components/BurgerIngredients/BurgerIngredients';
import { data } from './components/utils/data';

function App() {
  
  return (
    <div>
      <Header />
      <main>
        <h1 className="main__title text text_type_main-large">Соберите бургер</h1>
        <section className="main__wrapper">
          <BurgerIngredients data={data} />
          <BurgerConstructor />
        </section>
      </main>
    </div>
  );
}

export default App;
