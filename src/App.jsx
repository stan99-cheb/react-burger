import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useLocation, useMatch, useNavigate } from 'react-router-dom';
import { dataIngredientsState, ingredientsState } from './store/feature/ingredients/ingredients-slice';
import { getIngredients } from './store/feature/ingredients/get-ingredients-thunk';
import Loader from './components/UI/Loader/loader';
import AppLayout from './components/Layouts/AppLayout/app-layout';
import { ConstructorPage, LoginPage, ProfilePage } from './pages';
import './App.css'
import IngredientInfo from './components/IngredientInfo/ingredient-info';
import Modal from './components/UI/Modal/modal';
import withData from './components/HOC/with-data';
import AccountLayout from './components/Layouts/AccountLayout/account-layout';
import { updateTokensThunk } from './store/feature/user/update-tokens-thunk';
import ProtectedRoute from './components/HOC/with-protected-route';

function App() {
  const dispatch = useDispatch();
  const { status } = useSelector(ingredientsState);
  const data = useSelector(dataIngredientsState);
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
          <Route path='profile' element={<AccountLayout />}>
            <Route index element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            } />
          </Route>
          <Route path='login' element={<LoginPage />} />
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
                {withData(IngredientInfo)(data)(id)}
              </Modal>
            }
          />
        </Routes >
      )
      }
    </>
  );
};

export default App;
