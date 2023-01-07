import classes from './header.module.css';
import { NavLink } from 'react-router-dom';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const Header = () => {
  const activeClass = ({ isActive }) => isActive ? `${classes.link} ${classes.active}` : classes.link

  return (
    <header className={classes.header}>
      <NavLink to='/constructor' className={activeClass}>
        <BurgerIcon type="secondary" />
        <p className="text text_type_main-default">
          Конструктор
        </p>
      </NavLink>
      <NavLink to='/feed' className={activeClass}>
        <ListIcon type="secondary" />
        <p className="text text_type_main-default">
          Лента заказов
        </p>
      </NavLink>
      <div className={classes.logo}><Logo /></div>
      <NavLink to='/login' className={activeClass}>
        <ProfileIcon type="secondary" />
        <p className="text text_type_main-default">
          Личный кабинет
        </p>
      </NavLink>
    </header >
  )
};

export default Header;
