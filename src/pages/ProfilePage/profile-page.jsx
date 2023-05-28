import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Profile } from "../../components/Profile/profile"
import { userState } from "../../services/slices/user-slice";
import { getUserThunk } from "../../services/thunk/get-user-thunk";
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
