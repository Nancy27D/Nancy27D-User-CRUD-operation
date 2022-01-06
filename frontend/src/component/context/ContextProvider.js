import React, { useState, createContext } from "react";

export const addData = createContext("");
export const updatedData = createContext("");
export const deletedData = createContext("");

const ContextProvider = ({ children }) => {
  const [udata, setUdata] = useState("");
  const [updata, setUpdata] = useState("");
  const [deldata, setdeldata] = useState("");
  return (
    <addData.Provider value={{ udata, setUdata }}>
      <updatedData.Provider value={{ updata, setUpdata }}>
          <deletedData.Provider value={{deldata, setdeldata}}>
        {children}
        </deletedData.Provider>
      </updatedData.Provider>
    </addData.Provider>
  );
};

export default ContextProvider;
