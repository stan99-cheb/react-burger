import { Routes, Route, useLocation } from "react-router-dom";
import AppLayout from "../App/AppLayout";
import ModalIngredients from "../ModalIngredient/modal-ingredients";
import ProtectedRouteElement from "../../hoc/ProtectedRouteElement";
import {
  Account,
  ConstructorPage,
  ErrorPage,
  ForgotPassword,
  Ingredients,
  Login,
  Logout,
  OrderFeed,
  OrderHistory,
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
          <Route path='feed' element={<OrderFeed />} />
          <Route path="profile" element={<ProtectedRouteElement element={<Account />} />}>
            <Route index element={<ProfilePage />} />
            <Route path="order-history" element={<OrderHistory />} />
            <Route path="logout" element={<Logout />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {
        background && (
          <Routes>
            <Route path='ingredients/:id' element={<ModalIngredients />} />
          </Routes>
        )
      }
    </>
  );
}

export default AppRoutes;
