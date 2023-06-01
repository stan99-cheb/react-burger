import { wsConnectionClosed, wsConnectionSuccess, wsGetMessage } from "../slice/socket-slice";


const socketMiddleware = (store) => {
  let ws = null;

  return (next) => (action) => {
    const { dispatch } = store;
    const { type, payload } = action;

    if (type === 'socket/wsConnectionStart') {
      ws = new WebSocket(payload);
    };

    if (type === 'socket/wsConnectionClosing') {
      ws && ws.close();
      dispatch(wsConnectionClosed());
    };

    if (ws) {
      ws.onopen = (event) => {
        dispatch(wsConnectionSuccess());
      };

      ws.onmessage = (event) => {
        dispatch(wsGetMessage(JSON.parse(event.data)));
      };

      ws.onclose = (event) => {
        console.log(event);
      };

      ws.onerror = (event) => {
        console.log('Получена ошибка');
      };
    };

    next(action);
  };
}

export default socketMiddleware;
