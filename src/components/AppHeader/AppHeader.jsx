import React from "react";
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import HeaderButton from "../UI/HeaderButton/HeaderButton";

const AppHeader = () => {

  return (
    <header style={{
      margin: '0 auto 40px',
      maxWidth: '1920px',
      height: '88px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      columnGap: '8px',
      backgroundColor: '#1c1c21'
    }}>
      <HeaderButton text={'Конструктор'} icon={<BurgerIcon type="secondary" />} />
      <HeaderButton text={'Лента заказов'} icon={<ListIcon type="secondary" />} />
      <div style={{ margin: '0 290px 0 110px' }}><Logo /></div>
      <HeaderButton text={'Личный кабинет'} icon={<ProfileIcon type="secondary" />} />
    </header >
  )
};

export default AppHeader;
