import React, { Children, createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  localStorage.clear();
  const [userData, setUserData] = useState({ employees: [], admin: [] });

  useEffect(() => {
    const { employeesData} = getLocalStorage();
    setUserData(employeesData);
  }, []);


  return (
    <div>
      <AuthContext.Provider value={[userData,setUserData]}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
