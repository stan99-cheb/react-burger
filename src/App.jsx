import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useLocation, useMatch, useNavigate } from 'react-router-dom';
import { getIngredients } from './store/feature/ingredients/get-ingredients-thunk';
import Loader from './components/UI/Loader/loader';
import AppLayout from './components/Layouts/AppLayout/app-layout';
import { ConstructorPage, FeedPage, ForgotPasswordPage, LoginPage, LogoutPage, ProfileOrdersPages, ProfilePage, RegistrationPage, ResetPasswordPage } from './pages';
import './App.css'
import IngredientInfo from './components/IngredientInfo/ingredient-info';
import Modal from './components/UI/Modal/modal';
import AccountLayout from './components/Layouts/AccountLayout/account-layout';
import { updateTokensThunk } from './store/feature/user/update-tokens-thunk';
import ProtectedRoute from './components/ProtectedRoute/protected-route';
import { ingredientsState, statusState } from './store/feature/ingredients/selectors';
import OrderInfo from './components/OrderInfo/order-info';
import withIngredients from './components/HOC/with-ingredients';

function App() {
  const dispatch = useDispatch();
  const status = useSelector(statusState);
  const ingredients = useSelector(ingredientsState);
  const navigate = useNavigate();
  const location = useLocation();
  const background = location.state && location.state.background;
  const id = useMatch('ingredients/:id')?.params?.id;

  React.useEffect(() => {
    const refreshToken = localStorage.getItem('refreshToken');
    refreshToken && dispatch(updateTokensThunk(refreshToken));
    dispatch(getIngredients());
  }, []);

  const closeModal = () => navigate(-1);

  if (status === 'loading') return (<Loader />)

  return (
    <>
      <Routes location={background || location}>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<ConstructorPage />} />
          <Route path='feed' element={<FeedPage />} />
          <Route path='feed/:number' element={<OrderInfo url='wss://norma.nomoreparties.space/orders/all' />} />
          <Route path='profile' element={<ProtectedRoute><AccountLayout /></ProtectedRoute>}>
            <Route index element={<ProfilePage />} />
            <Route path='orders' element={<ProfileOrdersPages />} />
            <Route path='logout' element={<LogoutPage />} />
          </Route>
          <Route path='login' element={<ProtectedRoute anonymous={true}><LoginPage /></ProtectedRoute>} />
          <Route path='registration' element={<ProtectedRoute anonymous={true}><RegistrationPage /></ProtectedRoute>} />
          <Route path='forgot-password' element={<ProtectedRoute anonymous={true}><ForgotPasswordPage /></ProtectedRoute>} />
          <Route path='reset-password' element={<ProtectedRoute anonymous={true}><ResetPasswordPage /></ProtectedRoute>} />
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route
            path='ingredients/:id'
            element={
              <Modal
                closeModal={closeModal}
                options={{ closeable: true }}
              >
                {withIngredients(IngredientInfo)(ingredients)(id)}
              </Modal>
            }
          />
          <Route
            path='feed/:number'
            element={
              <Modal
                closeModal={closeModal}
                options={{ closeable: true }}
              >
                <OrderInfo />
              </Modal>
            }
          />
          <Route
            path='profile/orders/:number'
            element={
              <Modal
                closeModal={closeModal}
                options={{ closeable: true }}
              >
                <OrderInfo />
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
};

export default App;
