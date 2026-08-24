import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContextApi } from "../context/DataContext";

const Recent = () => {
  const [expenses] = useContext(DataContextApi);
  const navigate = useNavigate();


  const imagesURL = {
    food: "https://www.nicepng.com/png/detail/131-1314271_food-icon-food-court-icon-png.png",
    travel: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfOICaHx6H9rL0ohJ5z4vN6nxoMiQsfrdlN5lUd-DjPA&s=10",
    shopping: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQP9l08Xkb4xPe26OXOvf3HsNrrlbHDrXtjG38vi_YVA&s=10",
    others: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ959b5iERIKrASGuQsse3ruHdKLbtyKjODEABToYlPqw&s=10"
  }

  const ImageFilter = (e) => {
    if(e.category == "food"){
        return <img
                  className="h-6/10 md:h-4/5 rounded-full "
                  src={imagesURL.food}
                  alt=""
                />
    }
    else if(e.category == "travel"){
        return <img
                  className="h-6/10 md:h-4/5rounded-full "
                  src={imagesURL.travel}
                  alt=""
                />
    }else if(e.category == "shopping"){
        return <img
                  className="h-6/10 md:h-4/5 rounded-full "
                  src={imagesURL.shopping}
                  alt=""
                />
    }
    else{
        return <img
                  className="h-6/10 md:h-4/5 rounded-full "
                  src={imagesURL.others}
                  alt=""
                />
    }
  }


  const RecentExpenses = () => {
    if(expenses.length === 0){
      return (
        <div className="w-full h-80 flex justify-center items-center">No record found!</div>
      )
    }else{
      return(<>
       {expenses.slice(0, 4).map((e, idx) => {
          return (
            <div key={idx} className="w-9/10 h-18 border border-gray-400 rounded-xl border-dashed m-auto flex my-4">
              <div className="w-[20%] h-full flex justify-center items-center">
               {ImageFilter(e)}
              </div>
              <div className="w-[50%] h-full flex flex-col py-4 justify-evenly">
                <p className="font-bold text-md capitalize">{e.name}</p>
                <p className="font-light text-sm md:text-base capitalize">{e.category}</p>
              </div>
              <div className="w-[30%] h-full flex flex-col p-4 justify-evenly">
                <p className="font-bold text-md text-end">₹{e.amount}</p>
                <p className="font-light text-[10px] md:text-sm text-end">{e.date}</p>
              </div>
            </div>
          );
        })}
        </>
      )
    }
  }

  return (
    <div className="w-9/10 md:w-3/5 h-130 border border-gray-500 m-auto my-6 rounded-2xl mb-12">
      <div className="flex w-full justify-between items-center p-6">
        <p className="text-sm md:text-md font-bold">Recent Expenses</p>
        <p onClick={() => navigate("/viewExpenses")} className="text-sm md:text-md font-bold text-blue-500 cursor-pointer">
          View All
        </p>
      </div>
      <div className="w-full h-auto flex-col justify-center items-center">
        
        {
          RecentExpenses()
        }

        <div className="w-full flex justify-center items-center">
          <button
            className="w-9/10 h-14 bg-gray-800 m-auto rounded-xl text-white cursor-pointer"
            onClick={() => navigate("/addExpenses")}
          >
            + Add Expenses
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recent;
