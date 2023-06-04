import { Routes, Route, useLocation } from "react-router-dom";
import AppLayout from "../App/AppLayout";
import FeedLayout from "../FeedLayout";
import ProfileOrderLayout from "../profile-order-layout";
import ModalIngredients from "../ModalIngredient/modal-ingredients";
import ModalOrder from "../ModalOrder/modal-order";
import ProtectedRoute from "../../hoc/ProtectedRoute";
import { Account } from "../Account/account";
import {
  ConstructorPage,
  ErrorPage,
  ForgotPassword,
  Ingredients,
  Login,
  Logout,
  OrderFeedPage,
  OrderHistoryPage,
  OrderPage,
  ProfileOrderPage,
  ProfilePage,
  Registration,
  ResetPassword
} from "../../pages/index";

const AppRoutes = () => {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <>
      <Routes location={background || location}>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<ConstructorPage />} />
          <Route path='ingredients/:id' element={<Ingredients />} />
          <Route path='feed' element={<FeedLayout />}>
            <Route index element={<OrderFeedPage />} />
            <Route path=":id" element={<OrderPage />} />
          </Route>
          <Route path="profile" element={<ProtectedRoute>
            <Account />
          </ProtectedRoute>}>
            <Route index element={<ProfilePage />} />
            <Route path="order-history" element={<ProfileOrderLayout />}>
              <Route index element={<OrderHistoryPage />} />
              <Route path=":id" element={<ProfileOrderPage />} />
            </Route>
            <Route path="logout" element={<Logout />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {background && (
        <Routes>
          <Route path='ingredients/:id' element={<ModalIngredients />} />
          <Route path="feed/:id" element={<ModalOrder />} />
          <Route path="profile/order-history/:id" element={<ModalOrder />} />
        </Routes>
      )}
    </>
  );
}

export default AppRoutes;
