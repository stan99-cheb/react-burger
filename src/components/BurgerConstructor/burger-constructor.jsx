import { useDispatch, useSelector } from "react-redux";
import { addBurgerComponent, burgerComponentState } from "../../services/slices/burger-components";
import { ingredientsState } from "../../store/feature/ingredients/selectors";
import BurgerComponents from "../BurgerComponents/burger-components";
import BurgerConstructorInfo from "../BurgerConstructorInfo/burger-constructor-info";
import styles from "./burger-constructor.module.css";

const BurgerConstructor = () => {
  const dispatch = useDispatch();
  const ingredients = useSelector(ingredientsState);
  const burgerComponents = useSelector(burgerComponentState);

  const dragOverHandler = (e) => e.preventDefault();

  const dropHandler = (e) => {
    const result = e.dataTransfer.getData("text");
    const { type, payload } = JSON.parse(result);
    if (type === 'add') {
      e.preventDefault();
      const burgerComponent = ingredients.find(ingredient => ingredient._id === payload.id);
      if (burgerComponent.type !== 'bun' && !burgerComponents.bun) {
        alert('Сначала добавьте булочку');
        return;
      };
      dispatch(addBurgerComponent({ burgerComponent, uuid: crypto.randomUUID() }));
    };
  };

  return (
    <section
      className={styles.main}
      onDragOver={dragOverHandler}
      onDrop={dropHandler}
    >
      {burgerComponents.bun
        ? (<>
          <BurgerComponents />
          <BurgerConstructorInfo />
        </>)
        : (<span
          className={styles.empty}
        >
          Перенесите сюда ингредиенты
        </span>)
      }
    </section>
  )
};

export default BurgerConstructor;
