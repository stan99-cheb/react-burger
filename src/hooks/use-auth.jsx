import { useDispatch } from "react-redux";
import { loginThunk } from "../services/thunk/login-thunk";
import { updateTokensThunk } from "../services/thunk/update-tokens-thunk";

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
