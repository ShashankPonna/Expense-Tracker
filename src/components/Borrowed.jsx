import React, { useEffect, useState } from "react";

const Borrowed = () => {
  const [ename, setename] = useState("");
  const [cost, setcost] = useState("");
  const [bname, setbname] = useState("");
  const [date, setdate] = useState("");
  const [expense, setexpense] = useState(() => {
    const stored = localStorage.getItem("expense");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    const stored = localStorage.setItem("expense", JSON.stringify(expense));
  }, [expense]);

  function onClickHandler() {
    if (!ename || !cost || !bname || !date) {
      alert("All fields are required");
      return;
    }
    const newExpense = {
      exname: ename,
      excost: cost,
      exbname: bname,
      exdate: date,
    };
    setexpense((expense) => [...expense, newExpense]);
    setename("");
    setcost("");
    setbname("");
    setdate("");
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="expense xl:flex flex-col text-center gap-4 justify-between items-center px-5 md:px-20 py-5 sm:flex-row">
          <div className="expenseName text-[20px] text-blue-500 font-semibold p-3">
            <label
              id="expense-name"
              className="border-l-4 border-b-4 border-blue-700 p-3 rounded-full"
            >
              Expense Name :{" "}
            </label>
            <input
              value={ename}
              type="text"
              id="expense-name"
              placeholder="Enter expense name"
              className="border-t-4 border-r-4 px-5 py-3 border-blue-700 rounded-full"
              onChange={(e) => {
                setename(e.target.value);
              }}
            ></input>
          </div>
          <div className="expenseName text-[20px] text-blue-500 font-semibold p-3">
            <label
              id="expense-cost"
              className="border-l-4 border-b-4 border-blue-700 p-3 rounded-full"
            >
              Expense Cost :{" "}
            </label>
            <input
              value={cost}
              type="text"
              id="expense-cost"
              placeholder="Enter expense cost"
              className="border-t-4 border-r-4 px-5 py-3 border-blue-700 rounded-full"
              onChange={(e) => {
                setcost(e.target.value);
              }}
            ></input>
          </div>
          <div className="expenseName text-[20px] text-blue-500 font-semibold p-3">
            <label
              id="expense-name"
              className="border-l-4 border-b-4 border-blue-700 p-3 rounded-full"
            >
              Name of Lender :{" "}
            </label>
            <input
              value={bname}
              type="text"
              id="expense-name"
              placeholder="Enter lender's name"
              className="border-t-4 border-r-4 px-5 py-3 border-blue-700 rounded-full"
              onChange={(e) => {
                setbname(e.target.value);
              }}
            ></input>
          </div>
          <div className="expenseDate text-[20px] text-blue-500 font-semibold p-3">
            <label
              id="expense-name"
              className="border-l-4 border-b-4 border-blue-700 p-3 rounded-full"
            >
              Expense Name :{" "}
            </label>
            <input
              value={date}
              type="date"
              id="expense-date"
              placeholder="20-5-2005"
              className="border-t-4 border-r-4 px-5 py-3 border-blue-700 rounded-full"
              onChange={(e) => {
                setdate(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <button
          className="bg-green-500 m-4 text-[20px] text-white rounded-full font-bold px-7 text-center py-3"
          onClick={onClickHandler}
        >
          Add Expense
        </button>
        <button className="text-white font-semibold rounded-full px-5 py-2 bg-red-600">
          Clear History
        </button>
      </div>
      {/* <div className="recent-expense m-5 lg:m-20"> */}
      <h1 className="text-3xl text-blue-800 font-bold border-l-8 px-5 my-5 border-blue-700">
        Recent Expense
      </h1>
      <div className="box grid grid-cols-5 py-2 px-5 gap-5 break-words bg-blue-500 rounded-3xl m-2 w-[98vw]">
        <div className="box-name bg-blue-700 text-blue-100 font-bold py-2 px-2 sd:px-4 rounded-2xl">
          Expense Name
        </div>
        <div className="box-cost bg-blue-700 text-blue-100 font-bold py-2 px-2 sd:px-4 rounded-2xl">
          Expense Cost
        </div>
        <div className="box-date bg-blue-700 text-blue-100 font-bold py-2 px-2 sd:px-4 rounded-2xl">
          From
        </div>
        <div className="box-date bg-blue-700 text-blue-100 font-bold py-2 px-2 sd:px-4 rounded-2xl">
          Expense Date
        </div>
        <div className="box-date flex bg-blue-700 text-blue-100 font-bold py-2 px-2 sd:px-4 rounded-2xl">
          <div className="">Edit</div>
          <div className="">Delete</div>
        </div>
      </div>
      {/* </div> */}
      {expense.map((exp, index) => {
        return (
          <div className="box grid grid-cols-5 py-2 px-5 gap-5 break-words w-[98vw] bg-blue-500 rounded-3xl m-2">
            <div className="box-name bg-blue-300 py-2 px-4 rounded-2xl">
              {exp.exname}
            </div>
            <div className="box-cost bg-blue-300 py-2 px-4 rounded-2xl">
              {exp.excost}
            </div>
            <div className="box-cost bg-blue-300 py-2 px-4 rounded-2xl">
              {exp.exlname}
            </div>
            <div className="box-date bg-blue-300 py-2 px-4 rounded-2xl">
              {exp.exdate}
            </div>
            <div className="box-date bg-blue-300 py-2 px-4 rounded-2xl flex justify-around items-center">
              <button>
                <i class="fa-solid fa-pen"></i>
              </button>
              <button>
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Borrowed;
