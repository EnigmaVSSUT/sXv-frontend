import React from "react";
import AppContext from "./AppContext";
import { useEffect, useState } from "react";

const AppContextProvider = ({ children }) => {
  useEffect(() => {
    if (localStorage.getItem("token")) setIsAuthenticated(true);
    else setIsAuthenticated(false);
  }, []);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [events, setEvents] = useState([]);
  const [participations, setParticipations] = useState([]);
  const [club, setClub] = useState({});
  const [paymentStatus, setPaymentStatus] = useState(false);
  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        events,
        setIsAuthenticated,
        setEvents,
        paymentStatus,
        setPaymentStatus,
        club,
        setClub,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
