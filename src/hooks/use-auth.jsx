import { useDispatch } from "react-redux";
import { loginThunk } from "../store/feature/user/login-thunk";
import { updateTokensThunk } from "../store/feature/user/update-tokens-thunk";

export const useAuth = () => {
  const dispatch = useDispatch();

  const logIn = (formField) => {
    dispatch(loginThunk(formField));
  };

  const checkUser = (refreshToken) => {
    dispatch(updateTokensThunk(refreshToken));
  };

  const logOut = () => {

  };

  return {
    logIn,
    checkUser,
    logOut,
  };
};
