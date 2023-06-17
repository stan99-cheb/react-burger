import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ingredientsState } from './services/slices/ingredients';
import { getIngredients } from './services/thunk/get-ingredients';
import Loader from './components/UI/Loader/loader';
import { useAuth } from './hooks/use-auth';
import { Route, Routes } from 'react-router-dom';
import AppLayout from './components/Layouts/AppLayout/app-layout';
import { ConstructorPage } from './pages';
import './App.css'

function App() {
  const dispatch = useDispatch();
  const { status } = useSelector(ingredientsState);
  const { checkUser } = useAuth();

  React.useEffect(() => {
    const refreshToken = localStorage.getItem('refreshToken');
    refreshToken && checkUser(refreshToken);
    dispatch(getIngredients());
  }, []);

  if (status === 'loading') return (<Loader />)

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<AppLayout />}
        >
          <Route
            index
            element={<ConstructorPage />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
