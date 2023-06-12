import React from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import CustomLink from "../UI/CustomLink/custom-link";
import { profileData } from "../../utils/constants";
import styles from "./acoount.module.css";

const Account = () => {
  const [index, setIndex] = React.useState(0);
  const targetRefs = React.useRef([]);
  const location = useLocation();
  const { id } = useParams();

  const activeLink = ({ isActive }) =>
    isActive
      ? `${styles.link} ${styles.active}`
      : `${styles.link}`

  React.useEffect(() => {
    targetRefs.current.forEach((ref, i) => {
      ref.querySelector('[aria-current="page"]') && setIndex(i);
    })
  }, []);

  if (location.pathname === `/profile/order-history/${id}`) return (<Outlet />);

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          {profileData.map((item, i) =>
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
          )}
        </ul>
        <span className={styles.description}>
          {profileData[index].description}
        </span>
        <Outlet />
      </div>
    </main>
  );
};

export { Account };
