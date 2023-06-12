import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "../UI/Modal/modal";
import OrderInfo from "../OrderInfo/order-info";

const ModalOrder = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const orders = useSelector(state => state.allOrders.data.orders || state.wsOrder.data.orders);
  const order = orders && orders.find(order => order.number === Number(id));

  const closeModal = () => {
    navigate(-1);
  };

  const modalOptions = {
    closeable: true,
  };

  if (!order) return null;

  return (
    <Modal
      closeModal={closeModal}
      options={modalOptions}
    >
      <OrderInfo order={order} />
    </Modal>
  );
};

export default ModalOrder;
