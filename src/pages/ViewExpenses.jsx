import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContextApi } from "../context/DataContext";

const ViewExpenses = () => {
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
                  className="h-4/5 rounded-full "
                  src={imagesURL.food}
                  alt=""
                />
    }
    else if(e.category == "travel"){
        return <img
                  className="h-4/5 rounded-full "
                  src={imagesURL.travel}
                  alt=""
                />
    }else if(e.category == "shopping"){
        return <img
                  className="h-4/5 rounded-full "
                  src={imagesURL.shopping}
                  alt=""
                />
    }
    else{
        return <img
                  className="h-4/5 rounded-full "
                  src={imagesURL.others}
                  alt=""
                />
    }
  }


  
  const RecentExpenses = () => {
    if(expenses.length === 0){
      return (
        <div className="w-full h-80 mt-28">
          <p className="w-full text-center h-16">No record found!</p>
          <div className="w-full flex justify-center items-center">
            <button
            className="w-2/5 h-14 bg-gray-800 m-auto rounded-xl text-white cursor-pointer"
            onClick={() => navigate("/addExpenses")}
          >
            + Add Expenses
          </button>
          </div>
        </div>
      )
    }else{
      return(<>
       {expenses.slice(0, 4).map((e, idx) => {
          return (
            <div onClick={() => handleItemsSelect(e.id)} key={idx} className={`w-9/10 h-18 border border-gray-400 rounded-xl border-dashed m-auto flex my-4 ${isSelectedButton && "cursor-pointer"} ${selectedId.includes(e.id) && isSelectedButton && "bg-blue-300"}`}>
              <div className="w-[20%] h-full flex justify-center items-center">
               {ImageFilter(e)}
              </div>
              <div className="w-[50%] h-full flex flex-col py-4 justify-evenly">
                <p className="font-bold text-md capitalize">{e.name}</p>
                <p className="font-light capitalize">{e.category}</p>
              </div>
              <div className="w-[30%] h-full flex flex-col p-4 justify-evenly">
                <p className="font-bold text-md text-end">₹{e.amount}</p>
                <p className="font-light text-sm text-end">{e.date}</p>
              </div>
            </div>
          );
        })}
        </>
      )
    }
  }


  // delete and select items

  const [selectedId, setselectedId] = useState([])
  const [isSelectedButton, setisSelectedButton] = useState(false)


  const handleSelectButton = () => {
    setisSelectedButton(!isSelectedButton);
    }


    const handleItemsSelect = (id) => {
      if(selectedId.includes(id)){
        setselectedId(prev => prev.filter(itemId => itemId != id))
      } else{
        setselectedId(prev => [...prev, id])
      }
    }
  

    const handleSelectDelete = () => {
      if(!selectedId.length == 0){
      const newExpenses = expenses.filter(prev => !selectedId.includes(prev.id))
      localStorage.setItem("expenses", JSON.stringify(newExpenses));
      setisSelectedButton(false)
      window.location.reload()
    }
      else{
        alert("Please select!")
      }
    }
  return (
    <div className="w-screen h-screen bg-amber-50 p-1">
    <div className={`w-3/5 h-140 border border-gray-500 m-auto my-6 rounded-2xl mb-28 relative`}>
      <div className="flex w-full justify-center items-center p-6">
        <p className="text-md font-bold text-center">Expenses</p>
        {
          !isSelectedButton ? <p onClick={handleSelectButton} className={`text-md  text-blue-500 absolute right-16 underline cursor-pointer ${expenses.length==0 && "hidden"}`}>Select</p> : <p onClick={handleSelectDelete} className={`text-md  text-red-500 font-bold absolute right-16 underline cursor-pointer ${expenses.length==0 && "hidden"}`}>Delete</p>
        }
        
      </div>
      <div id="ScrollBar" className="w-full h-120 flex-col justify-center items-center overflow-y-auto">
       {
        RecentExpenses()
       }
      </div>
    </div>
    </div>
  );
};

export default ViewExpenses;
