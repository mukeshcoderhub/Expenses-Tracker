import React, { useContext } from "react";
import { DataContextApi } from "../context/DataContext";

const Summary = () => {
  const [expenses] = useContext(DataContextApi);
  let FoodAmount;
  let TravelAmount;
  let ShoppingAmount;
  let othersAmount;

  if (expenses.length === 0) {
    FoodAmount = 0;
    TravelAmount = 0;
    ShoppingAmount = 0;
    othersAmount = 0;
  } else {
    FoodAmount = expenses.reduce(
      (sum, expense) =>
        expense.category == "food" ? sum + Number(expense.amount) : sum,
      0,
    );
    TravelAmount = expenses.reduce(
      (sum, expense) =>
        expense.category == "travel" ? sum + Number(expense.amount) : sum,
      0,
    );
    ShoppingAmount = expenses.reduce(
      (sum, expense) =>
        expense.category == "shopping" ? sum + Number(expense.amount) : sum,
      0,
    );
    othersAmount = expenses.reduce(
      (sum, expense) =>
        expense.category == "others" ? sum + Number(expense.amount) : sum,
      0,
    );
  }

  return (
    <div className="w-9/10 md:w-3/5 h-56 border border-gray-400 m-auto my-6 rounded-2xl bg-[url('https://i.pinimg.com/736x/61/b6/09/61b6098b20eaab4e1fb6d3849a6ed538.jpg')] bg-cover bg-center">
      <p className="m-4 text-sm md:text-lg font-semibold ">Summary by Category</p>
      <div className="ScrollBar w-full flex justify-around items-center px-4 md:px-6 gap-2 overflow-x-auto ">
        <div className="w-22 h-32 md:w-32  md:h-36 rounded-xl border border-gray-300 p-4 shadow-xl bg-[rgba(255,255,255,0.5)]  ">
          <div className="w-full h-[40%] rounded-full flex justify-center items-center">
            <img
              className="h-full object-cover rounded-full "
              src="https://www.nicepng.com/png/detail/131-1314271_food-icon-food-court-icon-png.png"
              alt=""
            />
          </div>
          <p className="text-center my-2 text-[12px] md:text-xl font-semibold">Food</p>
          <p className="text-center text-[12px] md:text-lg font-semibold">₹{FoodAmount}</p>
        </div>
        <div className="w-22 h-32 md:w-32 md:h-36 rounded-xl border border-gray-300 p-4 shadow-xl  bg-[rgba(255,255,255,0.5)] ">
          <div className="w-full h-[40%] rounded-full flex justify-center items-center">
            <img
              className="h-full object-cover rounded-full "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfOICaHx6H9rL0ohJ5z4vN6nxoMiQsfrdlN5lUd-DjPA&s=10"
              alt=""
            />
          </div>
          <p className="text-center my-2 text-[12px] md:text-xl font-semibold">Travel</p>
          <p className="text-center text-[12px] md:text-lg font-semibold">₹{TravelAmount}</p>
        </div>
        <div className="w-22 h-32 md:w-32 md:h-36 rounded-xl border border-gray-300 p-4 shadow-xl  bg-[rgba(255,255,255,0.5)] ">
          <div className="w-full h-[40%] rounded-full flex justify-center items-center">
            <img
              className="h-full object-cover rounded-full "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQP9l08Xkb4xPe26OXOvf3HsNrrlbHDrXtjG38vi_YVA&s=10"
              alt=""
            />
          </div>
          <p className="text-center my-2 text-[12px] md:text-xl font-semibold">Shoping</p>
          <p className="text-center text-[12px] md:text-lg font-semibold">₹{ShoppingAmount}</p>
        </div>
        <div className="w-22 h-32 md:w-32 md:h-36 rounded-xl border border-gray-300 p-4 shadow-xl  bg-[rgba(255,255,255,0.5)] ">
          <div className="w-full h-[40%] rounded-full flex justify-center items-center">
            <img
              className="h-full object-cover rounded-full "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ959b5iERIKrASGuQsse3ruHdKLbtyKjODEABToYlPqw&s=10"
              alt=""
            />
          </div>
          <p className="text-center my-2 text-[12px] md:text-xl font-semibold">Others</p>
          <p className="text-center text-[12px] md:text-lg font-semibold">₹{othersAmount}</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
