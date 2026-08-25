import { createContext, useEffect, useState } from "react";

export const DataContextApi = createContext();

const DataContext = (props) => {
  const [expenses, setExpenses] = useState(() => {
    const data = localStorage.getItem("expenses");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses))
  }, [expenses]);

  return (
    <>
      <DataContextApi.Provider value={{expenses, setExpenses}}>
        {props.children}
      </DataContextApi.Provider>
    </>
  );
};

export default DataContext;
