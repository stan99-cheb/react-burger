const ADD_SELECTED_INGREDIENTS = 'ADD_SELECTED_INGREDIENTS';

const defaultState = {
  bun: null,
  otherIngredients: []
};

const selectedIngredientsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_SELECTED_INGREDIENTS:
      if (action.payload.type === "bun") {
        return {
          ...state,
          bun: action.payload,
        };
      }
      return {
        ...state,
        otherIngredients: state.bun ? [...state.otherIngredients, action.payload] : [...state.otherIngredients],
      };
    case 'UPDATE':
      return { ...state, otherIngredients: [...action.payload] };
    default:
      return state;
  };
};

export { selectedIngredientsReducer };
