const SET_INGREDIENTS = 'SET_INGREDIENTS';
const SET_SELECTED_INGREDIENTS = 'SET_SELECTED_INGREDIENTS';

const initialState = {
  ingredients: [],
  selectedIngredients: [],
  detailIngredient: null,
};

const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INGREDIENTS:
      return { ...state, ingredients: [...state.ingredients, ...action.payload] };
    case SET_SELECTED_INGREDIENTS:
      return { ...state, selectedIngredients: [...state.selectedIngredients, ...action.payload] };
    default:
      return state;
  };
};

export { ingredientsReducer };