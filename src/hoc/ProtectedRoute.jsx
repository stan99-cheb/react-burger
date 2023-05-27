import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { userState } from "../services/slices/user-slice";

const ProtectedRoute = ({ children, anonymous = false }) => {
  const { isAuth } = useSelector(userState);

  const location = useLocation();
  const from = location.state?.from || '/';

  if (anonymous && isAuth) {
    return <Navigate to={from} />;
  };

  if (!anonymous && !isAuth) {
    return <Navigate to="/login" state={{ from: location }} />;
  };

  return children;
};

export default ProtectedRoute;
