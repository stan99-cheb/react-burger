import React from 'react';
import '@ya.praktikum/react-developer-burger-ui-components'
import AppHeader from './components/AppHeader/AppHeader';
import BurgerConstructor from './components/BurgerConstructor/BurgerConstructor';
import BurgerIngredients from './components/BurgerIngredients/BurgerIngredients';
import './styles/App.css';
import { data } from './components/utils/data';

function App() {
  return (
    <div>
      <header>
        <AppHeader />
      </header>
      <main>
        <h1 className="text text_type_main-large">Соберите бургер</h1>
        <section className='wrapper'>
          <BurgerIngredients data={data} />
          <BurgerConstructor />
        </section>
      </main>
    </div>
  );
}

export default App;
