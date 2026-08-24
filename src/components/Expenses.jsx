import React, { useContext } from "react";
import { DataContextApi } from "../context/DataContext";

const Expenses = () => {
  const [expenses] = useContext(DataContextApi);
  const month = new Date().toLocaleString("default", {month:"long"})
  let sumAmount;
  if (expenses.length === 0) {
     sumAmount = 0;
  } else {
     sumAmount = expenses.reduce(
      (sum, expense) => sum + Number(expense.amount),
      0,
    );
  }

  return (
    <div className="w-9/10 md:w-3/5 h-36 bg-gray-800 m-auto my-6 rounded-2xl text-white flex bg-[url('https://i.pinimg.com/1200x/5d/a6/ff/5da6ff82796f1a9cf7f160abb56cc39e.jpg')] bg-cover bg-center">
      <div className="flex w-1/2 flex-col justify-evenly p-6">
        <p className="text-md">Total Expenses</p>
        <p className="text-2xl font-bold">₹{sumAmount}</p>
      </div>
      <div className="w-1/2 flex justify-end p-6">
        <p className="bg-gray-700 rounded-full px-6 md:px-14 text-sm md:text-lg h-12 flex justify-center items-center font-bold capitalize">
          {month}
        </p>
      </div>
    </div>
  );
};

export default Expenses;
