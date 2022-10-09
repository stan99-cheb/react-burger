import React from "react";
import './header.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const Header = () => {

  return (
    <header className="header">
      <a className="header__link" href="https://ya.ru">
        <BurgerIcon type="secondary" />
        <p className="text text_type_main-default">
          Конструктор
        </p>
      </a>
      <a className="header__link" href="https://ya.ru">
        <ListIcon type="secondary" />
        <p className="text text_type_main-default">
          Лента заказов
        </p>
      </a>
      <div className="header__logo"><Logo /></div>
      <a className="header__link" href="https://ya.ru">
        <ProfileIcon type="secondary" />
        <p className="text text_type_main-default">
          Личный кабинет
        </p>
      </a>
    </header >
  )
};

export default Header;
