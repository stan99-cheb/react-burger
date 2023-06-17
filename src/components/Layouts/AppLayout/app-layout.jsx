import { Outlet } from "react-router-dom";
import Header from "../../Header/header";
import styles from "./app-layout.module.css";

const AppLayout = () => {
  return (
    <>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
