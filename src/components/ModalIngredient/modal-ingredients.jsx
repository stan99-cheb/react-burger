import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import IngredientInfo from "../IngredientInfo/ingredient-info";
import { ingredientsState } from "../../store/feature/ingredients/ingredients-slice";
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
      closeModal={closeModal}
      options={modalOptions}
    >
      <IngredientInfo ingredient={ingredient} />
    </Modal>
  )
};

export default ModalIngredients;
