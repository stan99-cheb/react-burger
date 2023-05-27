import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { userState } from "../services/slices/user-slice";

const ProtectedRouteElement = ({ element }) => {
  const { isAuth } = useSelector(userState);
  const location = useLocation();

  return isAuth
    ? element
    : <Navigate to='/login' replace state={{ from: location }} />;
};

export default ProtectedRouteElement;
