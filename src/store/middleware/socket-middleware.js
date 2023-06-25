const socketMiddleware = (wsActions) => {
  return (store) => {
    let ws = null;

    return (next) => (action) => {
      const { dispatch, getState } = store;
      const { type, payload } = action;
      const { wsInit, onOpen, onMessage, onClosing, onClose, onError } = wsActions;
      const { accessToken } = getState().user;

      if (type === wsInit().type) {
        ws = new WebSocket(`${payload}?token=${accessToken}`);
      };

      if (type === onClosing().type) {
        ws && ws.close(1000, "Хватит");
        console.log('Closing WebSocket')
      };

      if (ws) {
        ws.onopen = (event) => {
          console.log('Open WebSocket', event);
          dispatch(onOpen());
        };

        ws.onmessage = (event) => {
          dispatch(onMessage(JSON.parse(event.data)));
        };

        ws.onclose = (event) => {
          console.log('Close WebSocket', event);
          dispatch(onClose());
        };

        ws.onerror = (event) => {
          console.log('Error WebSocket', event);
          dispatch(onError());
        };
      };

      next(action);
    };
  };
};

export default socketMiddleware;
