const initialState = { cost: 0 };

const costReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return { cost: state.cost + action.payload };
    case "decrement":
      return { cost: state.cost - action.payload };
    default:
      return state;
  };
};

export { costReducer };