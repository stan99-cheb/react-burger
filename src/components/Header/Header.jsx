import React from "react";
import './Header.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import HeaderButton from "../UI/HeaderButton/HeaderButton";

const Header = () => {

  return (
    <header className="header">
      <HeaderButton type="button" text={'Конструктор'} icon={<BurgerIcon type="secondary" />} />
      <HeaderButton type="button" text={'Лента заказов'} icon={<ListIcon type="secondary" />} />
      <div className="header__logo"><Logo /></div>
      <HeaderButton type="button" text={'Личный кабинет'} icon={<ProfileIcon type="secondary" />} />
    </header >
  )
};

export default Header;
