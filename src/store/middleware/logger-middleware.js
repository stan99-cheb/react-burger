const loggerMiddleware = (store) => {
  return (next) => {
    return (action) => {
      console.log('dispatching', action);

      return next(action);
    };
  };
};

export default loggerMiddleware;
