

const loggerMiddleware = (store) => {
  return (next) => {
    return (action) => {
      console.log('dispatching', action);
      // console.log('next state', store.getState());
      return next(action);
    };
  };
};

export default loggerMiddleware;
