import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ingredientsState } from "../../services/slices/ingredients";
import IngredientInfo from "../../components/IngredientInfo/ingredient-info";
import styles from "./ingredients.module.css";

const Ingredients = () => {
  const { data } = useSelector(ingredientsState);
  const { id } = useParams();
  const ingredient = data.find(ingredient => ingredient._id === id);

  if (!ingredient) return null;

  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <h2 className={styles.title}>Детали ингредиента</h2>
        <IngredientInfo ingredient={ingredient} />
      </section>
    </main>
  );
}

export { Ingredients };
