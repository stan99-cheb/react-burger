import React from 'react';
import '@ya.praktikum/react-developer-burger-ui-components';
import classes from './styles/App.module.css';
import Header from './components/Header/header';
import BurgerConstructor from './components/BurgerConstructor/burger-constructor';
import BurgerIngredients from './components/BurgerIngredients/burger-ingredients';
import { data } from './components/utils/data';

function App() {
  const rootClasses = ['text', 'text_type_main-large'];
  rootClasses.push(classes.main__title);
  
  return (
    <>
      <Header />
      <main>
        <h1 className={rootClasses.join(' ')}>Соберите бургер</h1>
        <section className={classes.main__wrapper}>
          <BurgerIngredients data={data} />
          <BurgerConstructor />
        </section>
      </main>
    </>
  );
}

export default App;
