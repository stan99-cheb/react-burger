import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { userState } from "../../store/feature/user/user-slice";
import { getUserThunk } from "../../store/feature/user/get-user-thunk";

const ProtectedRoute = ({ children, anonymous = false }) => {
  const dispatch = useDispatch();
  const { isAuth, accessToken } = useSelector(userState);
  const location = useLocation();
  const from = location.state?.from || '/';

  React.useEffect(() => {
    if (!isAuth) {
      accessToken && dispatch(getUserThunk(accessToken))
    };
  }, [isAuth, accessToken, dispatch]);

  if (!accessToken) return null;

  if (anonymous && isAuth) {
    return <Navigate to={from} />;
  };

  if (!anonymous && !isAuth) {
    return <Navigate to="/login" state={{ from: location }} />;
  };

  return children;
};

export default ProtectedRoute;
