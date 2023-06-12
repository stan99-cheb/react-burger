import PropTypes from 'prop-types';

const INGREDIENT_TYPE = PropTypes.shape({
  _id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
  calories: PropTypes.number,
  price: PropTypes.number,
  image: PropTypes.string,
  image_mobile: PropTypes.string,
  image_large: PropTypes.string,
  __v: PropTypes.number
});

const ORDER_TYPE = PropTypes.shape({
  createdAt: PropTypes.string,
  ingredients: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  number: PropTypes.number,
  status: PropTypes.string,
  updatedAt: PropTypes.string,
  _id: PropTypes.string,
});

export { INGREDIENT_TYPE, ORDER_TYPE };