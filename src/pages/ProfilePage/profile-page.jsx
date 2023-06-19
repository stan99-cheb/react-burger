import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Profile from "../../components/Profile/profile"
import { userState } from "../../store/feature/user/user-slice";
import { getUserThunk } from "../../store/feature/user/get-user-thunk";
import Loader from "../../components/UI/Loader/loader";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { user, accessToken } = useSelector(userState);

  React.useEffect(() => {
    !user.name && dispatch(getUserThunk(accessToken));
  }, [user.name, accessToken, dispatch]);

  if (!user.name) return <Loader />;

  return (
    <Profile />
  );
}

export { ProfilePage };
