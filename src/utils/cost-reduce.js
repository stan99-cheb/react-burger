const costInitialState = { count: 0 };

const costReducer = (costState, action) => {
  switch (action.type) {
    case "increment":
      return { count: costState.count + action.payload };
    case "decrement":
      return { count: costState.count - action.payload };
    default:
      throw new Error(`Wrong type of action: ${action.type}`);
  };
};

export { costInitialState, costReducer };