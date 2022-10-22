import classes from './header.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const Header = () => {

  return (
    <header className={classes.header}>
      <a className={`${classes.link} ${classes.active}`} href="#">
        <BurgerIcon type="secondary" />
        <p className="text text_type_main-default">
          Конструктор
        </p>
      </a>
      <a className={classes.link} href="#">
        <ListIcon type="secondary" />
        <p className="text text_type_main-default">
          Лента заказов
        </p>
      </a>
      <div className={classes.logo}><Logo /></div>
      <a className={classes.link} href="#">
        <ProfileIcon type="secondary" />
        <p className="text text_type_main-default">
          Личный кабинет
        </p>
      </a>
    </header >
  )
};

export default Header;
