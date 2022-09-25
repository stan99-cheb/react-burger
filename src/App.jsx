import React, { useState} from 'react';
import '@ya.praktikum/react-developer-burger-ui-components';
import AppHeader from './components/AppHeader/AppHeader';
import BurgerConstructor from './components/BurgerConstructor/BurgerConstructor';
import BurgerIngredients from './components/BurgerIngredients/BurgerIngredients';
import { data } from './components/utils/data';

function App() {
  const [choice, setChoice] = useState('');
  
  return (
    <div>
      <AppHeader />
      <main>
        <h1 style={{ maxWidth: '1240px', margin: '0 auto 20px' }} className="text text_type_main-large">Соберите бургер</h1>
        <section style={{
          margin: '0 auto',
          maxWidth: '1240px',
          display: 'flex',
          gap: '40px'
        }} className='wrapper'>
          <BurgerIngredients data={data} />
          <BurgerConstructor choice={choice} />
        </section>
      </main>
    </div>
  );
}

export default App;
