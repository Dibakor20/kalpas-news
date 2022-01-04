import React, { createContext, useState } from "react";
import Feedback from "../components/feedback/Feedback";
import Sidebar from "../components/sidebar/Sidebar";

export const UserContext = createContext();

const AppContext = ({ children }) => {
  const [drawerState, setDrawerState] = useState(false)


  const feedbackOpen = () => {
    setDrawerState(true)
  }

  const feedbackClose = () => {
    setDrawerState(false)
  }

  return (
    <>
     <UserContext.Provider value={{
          drawerState, setDrawerState
          }}>
        <Sidebar feedbackOpen={ feedbackOpen}/>
        <Feedback drawerState={drawerState} feedbackClose={ feedbackClose}/>
    </UserContext.Provider>
    </>
  );
};

export default AppContext;
