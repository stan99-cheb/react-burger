import { Outlet } from "react-router-dom";
import Header from "../Header/header";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default AppLayout;
