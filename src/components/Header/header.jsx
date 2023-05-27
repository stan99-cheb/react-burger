import styles from './header.module.css';
import headerLogo from '../../images/header-logo.svg';
import CustomLink from "../UI/CustomLink/custom-link";

const Header = () => {
  const activeLink = ({ isActive }) =>
    isActive
      ? `${styles.link} ${styles.active}`
      : `${styles.link}`

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <CustomLink
              path='/'
              icon='BurgerIcon'
              extraStyle={activeLink}
            >
              Конструктор
            </CustomLink>
          </li>
          <li>
            <CustomLink
              path='/feed'
              icon='ListIcon'
              extraStyle={activeLink}
            >
              Лента заказов
            </CustomLink>
          </li>
          <li>
            <img className={styles.logo} src={headerLogo} alt="Header Logo" />
          </li>
          <li>
            <CustomLink
              path='/profile'
              icon='ProfileIcon'
              extraStyle={activeLink}
            >
              Личный кабинет
            </CustomLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
