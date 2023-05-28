import BurgerConstructor from "../../components/BurgerConstructor/burger-constructor";
import BurgerIngredients from "../../components/BurgerIngredients/burger-ingredients";
import styles from './constructor-page.module.css';

const ConstructorPage = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Соберите бургер</h1>
      <div className={styles.wrapper}>
        <BurgerIngredients />
        <BurgerConstructor />
      </div>
    </main>
  );
};

export { ConstructorPage };
