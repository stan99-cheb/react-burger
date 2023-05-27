import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ingredientsState } from '../../services/slices/ingredients';
import { getIngredients } from '../../services/thunk/get-ingredients';
import AppRoutes from '../AppRoutes/app-routes';
import Loader from '../UI/Loader/loader';
import { useAuth } from '../../hooks/use-auth';
import './App.css';

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
    <AppRoutes />
  );
};

export default App;
