import React, { createContext } from "react";
import ChildA from "./ChildA";

export const data = createContext();
export const data1 = createContext();

export const UseContext = () => {
  
  let name = "kishan";
  let surname = "bhalala";
  return (
    <div>
      <data.Provider value={name}>
        <data1.Provider value={surname}>
          <ChildA />
        </data1.Provider>
      </data.Provider>
    </div>
  );
};


// export { data, data1 };
