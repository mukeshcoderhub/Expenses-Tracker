import { createContext, useEffect, useState } from "react";

export const DataContextApi = createContext();

const DataContext = (props) => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
      const data = localStorage.getItem("expenses");
      if (data) {
        setExpenses(JSON.parse(data));
      } else {
        setExpenses([]);
      }
  }, []);

  return (
    <>
      <DataContextApi.Provider value={[expenses]}>
        {props.children}
      </DataContextApi.Provider>
    </>
  );
};

export default DataContext;
