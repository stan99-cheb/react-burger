const SET_INGREDIENTS = 'SET_INGREDIENTS';

const initialState = {
  ingredients: [],
};

const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INGREDIENTS:
      return { ingredients: [...state.ingredients, ...action.payload] };
    default:
      return state;
  };
};

export { ingredientsReducer };