import classes from './header.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const Header = () => {

  return (
    <header className={classes.header}>
      <a className={classes.header__link} href="http://ya.ru">
        <BurgerIcon type="secondary" />
        <p className="text text_type_main-default">
          Конструктор
        </p>
      </a>
      <a className={classes.header__link} href="http://ya.ru">
        <ListIcon type="secondary" />
        <p className="text text_type_main-default">
          Лента заказов
        </p>
      </a>
      <div className={classes.header__logo}><Logo /></div>
      <a className={classes.header__link} href="http://ya.ru">
        <ProfileIcon type="secondary" />
        <p className="text text_type_main-default">
          Личный кабинет
        </p>
      </a>
    </header >
  )
};

export default Header;
