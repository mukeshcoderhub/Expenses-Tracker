import React, { useContext, useState } from "react";
import { DataContextApi } from "../context/DataContext";

const AddExpenses = () => {
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();

    if (expenseName == "" || amount == "" || category == "") {
      alert("Enter valid details");
    } else {
      // const date = new Date().toLocaleDateString();

      const date = new Date().getDate();
      const month = new Date().toLocaleString("default", {month: "short"});
      const year = new Date().getFullYear();


      const expense = {
        name: expenseName,
        amount: amount,
        category: category,
        date: `${date}-${month}-${year}`,
        id: new Date()
      };

      const olddata = localStorage.getItem("expenses");

      const expenses = olddata ? JSON.parse(olddata) : [];

      expenses.unshift(expense);

      localStorage.setItem("expenses", JSON.stringify(expenses));
      alert("Expense added successfully");
      setExpenseName("");
      setAmount("");
      setCategory("");
      window.location.reload();
    }
  };
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-amber-50">
      <div className="w-3/10 h-9/10 border rounded-2xl">
        <div className="flex justify-center items-center w-full p-4">
          <p className="text-xl font-bold">Add Expenses</p>
        </div>
        <form
          autoComplete="off"
          className="w-full"
          onSubmit={(e) => formSubmit(e)}
        >
          <div className="p-6 flex flex-col gap-4">
            <label className="text-xl font-semibold block " htmlFor="expense">
              Expense Name
            </label>
            <input
              className="border border-gray-800 h-12 rounded-xl px-2"
              id="expense"
              type="text"
              placeholder="Enter expense name"
              value={expenseName}
              onChange={(e) => setExpenseName(e.target.value)}
            />
          </div>
          <div className="p-6 flex flex-col gap-4">
            <label className="text-xl font-semibold block " htmlFor="expense">
              Amount
            </label>
            <input
              className="border border-gray-800 h-12 rounded-xl px-2"
              id="expense"
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="p-6 flex flex-col gap-4">
            <label className="text-xl font-semibold block " htmlFor="category">
              Category
            </label>
            <select
              name="category"
              id="category"
              className="border border-gray-800 h-12 rounded-xl px-2 text-gray-600"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select category</option>
              <option value="food">Food</option>
              <option value="travel">Travel</option>
              <option value="shopping">Shoppig</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div className="p-6 flex justify-center items-center">
            <button className="w-9/10 h-14 bg-gray-800 m-auto rounded-xl text-white cursor-pointer">
              Add Expenses
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddExpenses;
