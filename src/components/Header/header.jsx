import { useNavigate } from 'react-router-dom';
import headerLogo from '../../images/header-logo.svg';
import CustomLink from "../UI/CustomLink/custom-link";
import styles from './header.module.css';

const Header = () => {
  const navigate = useNavigate()
  const activeLink = ({ isActive }) =>
    isActive
      ? `${styles.link} ${styles.active}`
      : `${styles.link}`

  const onClickLogo = () => {
    navigate('/');
  };

  return (
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
          <img className={styles.logo} src={headerLogo} alt="Header Logo" onClick={onClickLogo} />
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
  );
};

export default Header;
