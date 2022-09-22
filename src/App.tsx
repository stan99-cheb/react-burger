import React from 'react';
import '@ya.praktikum/react-developer-burger-ui-components'
import AppHeader from './components/AppHeader/AppHeader';
import BurgerConstructor from './components/BurgerConstructor/BurgerConstructor';
import BurgerIngredients from './components/BurgerIngredients/BurgerIngredients';

function App() {
  return (
    <div>
      <AppHeader />
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <BurgerIngredients />
      <BurgerConstructor />
    </div>
  );
}

export default App;
