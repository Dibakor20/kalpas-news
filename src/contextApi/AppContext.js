import React, { createContext, useEffect, useState } from "react";
import Feedback from "../components/feedback/Feedback";
import Sidebar from "../components/sidebar/Sidebar";
import Users from "../components/users/Users";

export const UserContext = createContext();

const AppContext = ({ children }) => {
  const [toggleState, setToggleState] = useState('horizental')
  const [drawerState, setDrawerState] = useState(false)
  const [userData,setUserData] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setUserData(data))
  },[toggleState])
 

  return (
    <>
     <UserContext.Provider value={{ 
          toggleState, setToggleState,drawerState, setDrawerState
          }}>
        <Sidebar />
        <Feedback />
        <Users userData={userData} setUserData={setUserData}/>
    </UserContext.Provider>
    </>
  );
};

export default AppContext;
