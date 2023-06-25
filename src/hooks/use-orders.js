import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { wsConnectionClosing, wsConnectionStart } from "../store/feature/orders/all-orders-slice";
import { ordersState } from "../store/feature/orders/selectors";

const useOrders = (url = '') => {
  const dispatch = useDispatch();
  const { data, wsConnected } = useSelector(ordersState);

  const wsConnectedRef = React.useRef(null);
  wsConnectedRef.current = wsConnected;

  const location = useLocation();

  React.useEffect(() => {
    !wsConnected && dispatch(wsConnectionStart(url));

    return () => {
      wsConnectedRef.current && !location.state && dispatch(wsConnectionClosing());
    };
  }, []);

  return {
    orders: data?.orders,
    total: data?.total,
    totalToday: data?.totalToday,
  };
}

export default useOrders;
