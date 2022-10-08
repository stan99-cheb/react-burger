import React from "react";
import './BurgerIngredients.css';
import MyImage from "../UI/MyImage/MyImage";
import MyTab from "../UI/MyTab/MyTab";

const BurgerIngredients = ({ data }) => {
  const bunsImage = data.filter((item) => item.type === 'bun');
  const sauceImage = data.filter((item) => item.type === 'sauce');

  return (
    <div className="container">
      <div className="container__tab">
        <MyTab />
      </div>
      <div>
        <h2 className="text text_type_main-medium">Булки</h2>
        <div className="container__bun">
          {
            bunsImage.map(bun => <MyImage ingredient={bun} key={bun._id} />)
          }
        </div>
        <h2 className="text text_type_main-medium">Соусы</h2>
        <div className="container__sauce">
          {
            sauceImage.map(sauce => <MyImage ingredient={sauce} key={sauce._id} />)
          }
        </div>
      </div>
    </div>
  )
};

export default BurgerIngredients;
