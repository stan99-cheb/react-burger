import React from "react";
import MyImage from "../UI/MyImage/MyImage";
import MyTab from "../UI/MyTab/MyTab";

const BurgerIngredients = ({ data }) => {
  const bunsImage = data.filter((item) => item.type === 'bun');
  const sauceImage = data.filter((item) => item.type === 'sauce');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '550px' }}>
      <MyTab />
      <div>
        <h2 className="text text_type_main-medium">Булки</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {
            bunsImage.map(bun => <MyImage bun={bun} id={bun.id} />)
          }
        </div>
        <h2 className="text text_type_main-medium">Соусы</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {
            sauceImage.map(bun => <MyImage bun={bun} id={bun.id} />)
          }
        </div>
      </div>
    </div>
  )
};

export default BurgerIngredients;
