import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const useOrders = (state, wsConnectionStart, wsConnectionClosing) => {
  const dispatch = useDispatch();
  const { data, wsConnected } = useSelector(state);

  console.log('wsConnected', wsConnected);

  const wsConnectedRef = React.useRef(null);
  wsConnectedRef.current = wsConnected;

  const location = useLocation();

  React.useEffect(() => {
    !wsConnected && dispatch(wsConnectionStart());

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
