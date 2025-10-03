import React, { useEffect, useState } from "react";

const AddExpense = () => {
  const [expenseName, setexpenseName] = useState("");
  const [expenseCost, setexpenseCost] = useState("");
  const [expenseDate, setexpenseDate] = useState("");
  const [expense, setexpense] = useState(()=>{
    const stored = localStorage.getItem("expense");
    return stored ? JSON.parse(stored) : [];
  });
  useEffect(() => {
    localStorage.setItem("expense",JSON.stringify(expense))
  }, [expense])
  
  function onClickHandler() {
    if (!expenseName || !expenseCost || !expenseDate) {
      alert("All fields are required");
      return;
    }

    const newExpense = {
      exname: expenseName,
      excost: expenseCost,
      exdate: expenseDate,
    };

    setexpense(expense=>[...expense, newExpense]);

    setexpenseName("");
    setexpenseCost("");
    setexpenseDate("");
  }
  return (
    <>
      <div className="head border-l-8 border-blue-700 text-[22px] p-3 px-10 m-2 text-blue-400 font-semibold">
        Add Expense
      </div>
      <div className="expense xl:flex flex-col gap-4 justify-between items-center px-5 md:px-20 py-5 sm:flex-row">
        <div className="expenseName text-[20px] text-blue-500 font-semibold p-3">
          <label
            id="expense-name"
            className="border-l-4 border-b-4 border-blue-700 p-3 rounded-full"
          >
            Expense Name :{" "}
          </label>
          <input
            type="text"
            id="expense-name"
            placeholder="Enter expense name"
            className="border-t-4 border-r-4 px-5 py-3 border-blue-700 rounded-full"
            value={expenseName}
            onChange={(e) => {
              setexpenseName(e.target.value);
            }}
          ></input>
        </div>
        <div className="expenseCost text-[20px] text-blue-500 font-semibold p-3">
          <label
            id="expense-cost"
            className="border-l-4 border-b-4 border-blue-700 p-3 rounded-full"
          >
            Expense Cost :{" "}
          </label>
          <input
            type="text"
            id="expense-cost"
            placeholder="Enter expense cost"
            className="border-t-4 border-r-4 px-5 py-3 border-blue-700 rounded-full"
            value={expenseCost}
            onChange={(e) => {
              setexpenseCost(e.target.value);
            }}
          ></input>
        </div>
        <div className="expenseDate text-[20px] text-blue-500 font-semibold p-3">
          <label
            id="expense-date"
            className="border-l-4 border-b-4 border-blue-700 p-3 rounded-full"
          >
            Expense Date :{" "}
          </label>
          <input
            type="date"
            id="expense-date"
            placeholder="20-5-2005"
            className="border-t-4 border-r-4 px-5 py-3 border-blue-700 rounded-full"
            value={expenseDate}
            onChange={(e) => {
              setexpenseDate(e.target.value);
            }}
          ></input>
        </div>
        <button
          className="bg-green-500 text-white rounded-full font-semibold px-6 py-2"
          onClick={onClickHandler}
        >
          Add Expense
        </button>
      </div>
      <div className="recent-expense m-5 lg:m-20">
        <h1 className="text-3xl text-blue-800 font-bold border-l-8 px-5 my-5 border-blue-700">
          Recent Expense
        </h1>
        <div className="cont rounded-3xl border-4 border-blue-400 ">
          <div className="box-head grid grid-cols-4 py-2 gap-5 text-sm sm:text-xl rounded-3xl m-2">
            <div className="box-name bg-blue-700 text-blue-100 font-bold py-2 px-2 sd:px-4 rounded-2xl">
              Expense Name
            </div>
            <div className="box-cost bg-blue-700 text-blue-100 font-bold py-2 px-2 sd:px-4 rounded-2xl">
              Expense Cost
            </div>
            <div className="box-date bg-blue-700 text-blue-100 font-bold py-2 px-2 sd:px-4 rounded-2xl">
              Expense Date
            </div>
            <div className="box-date bg-blue-700 text-blue-100 font-bold py-2 px-2 sd:px-4 rounded-2xl">
              Edit Delete
            </div>
          </div>
          {expense.map((exp, index) => {
            return (
              <>
              
              <div className="box grid grid-cols-4 py-2 px-5 gap-5 break-words bg-blue-500 rounded-3xl m-2">
                <div className="box-name bg-blue-300 py-2 px-4 rounded-2xl">
                  {exp.exname}
                </div>
                <div className="box-cost bg-blue-300 py-2 px-4 rounded-2xl">
                  {exp.excost}
                </div>
                <div className="box-date bg-blue-300 py-2 px-4 rounded-2xl">
                  {exp.exdate}
                </div>
                <div className="box-date bg-blue-300 py-2 px-4 rounded-2xl flex justify-around items-center">
                  <button><i class="fa-solid fa-pen"></i></button>
                  <button><i class="fa-solid fa-trash"></i></button>
                  
                </div>
              </div>

              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AddExpense;
