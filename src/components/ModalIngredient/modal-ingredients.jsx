import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import IngredientInfo from "../IngredientInfo/ingredient-info";
import { ingredientsState } from "../../services/slices/ingredients";
import Modal from "../UI/Modal/modal";

const ModalIngredients = () => {
  const navigate = useNavigate();
  const { data } = useSelector(ingredientsState);
  const { id } = useParams();
  const ingredient = data.find(ingredient => ingredient._id === id);

  const closeModal = () => {
    navigate(-1);
  };

  const modalOptions = {
    closeable: true,
  };

  return (
    <Modal
      title='Детали ингредиента'
      closeModal={closeModal}
      options={modalOptions}
    >
      <IngredientInfo ingredient={ingredient} />
    </Modal>
  )
};

export default ModalIngredients;
