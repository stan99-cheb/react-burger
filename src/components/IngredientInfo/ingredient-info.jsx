import { INGREDIENT_TYPE } from "../../utils/prop-types";
import styles from './ingredient-info.module.css';

const IngredientInfo = ({ ingredient }) => {
  if (!ingredient) return null;

  return (
    <article className={styles.container}>
      <img className={styles.image} src={ingredient.image_large} alt={ingredient.name}></img>
      <p className={styles.name}>{ingredient.name}</p>
      <ul className={styles["caloric-contents"]}>
        <li className={styles["caloric-contents__item"]}>
          <p className={styles.text}>Калории, ккал</p>
          <p className={styles.digital}>{ingredient.calories}</p>
        </li>
        <li className={styles["caloric-contents__item"]}>
          <p className={styles.text}>Белки, г</p>
          <p className={styles.digital}>{ingredient.proteins}</p>
        </li>
        <li className={styles["caloric-contents__item"]}>
          <p className={styles.text}>Жиры, г</p>
          <p className={styles.digital}>{ingredient.fat}</p>
        </li>
        <li className={styles["caloric-contents__item"]}>
          <p className={styles.text}>Углеводы, г</p>
          <p className={styles.digital}>{ingredient.carbohydrates}</p>
        </li>
      </ul>
    </article>
  )
};

IngredientInfo.propTypes = {
  ingredient: INGREDIENT_TYPE,
};

export default IngredientInfo;
