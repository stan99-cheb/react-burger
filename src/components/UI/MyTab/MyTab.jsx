import React from "react";
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

const MyTab = ({ data }) => {
  const [current, setCurrent] = React.useState('one');

  return (
    <div style={{ display: 'flex' }}>
      <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="sauces" active={current === 'sauces'} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="fillings" active={current === 'fillings'} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  )
};

export default MyTab;
