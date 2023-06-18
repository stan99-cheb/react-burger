import React from "react";
import { Outlet } from "react-router-dom";
import CustomLink from "../../UI/CustomLink/custom-link";
import { profileData } from "../../../utils/constants";
import styles from "./account-layout.module.css";

const AccountLayout = () => {
  const [index, setIndex] = React.useState(0);
  const targetRefs = React.useRef([]);

  const activeLink = ({ isActive }) =>
    isActive
      ? `${styles.link} ${styles.active}`
      : `${styles.link}`

  React.useEffect(() => {
    targetRefs.current.forEach((ref, i) => {
      ref.querySelector('[aria-current="page"]') && setIndex(i);
    })
  }, []);

  const renderedLink = profileData.map((item, i) =>
    <li
      className={styles.item}
      key={item.name}
      onClick={() => setIndex(i)}
      ref={element => targetRefs.current[i] = element}
    >
      <CustomLink
        path={item.path}
        extraStyle={activeLink}
      >
        {item.name}
      </CustomLink>
    </li>
  );

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          {renderedLink}
        </ul>
        <span className={styles.description}>
          {profileData[index].description}
        </span>
      </div>
      <Outlet />
    </section>
  );
};

export default AccountLayout;
