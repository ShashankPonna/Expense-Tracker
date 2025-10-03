import React, { useEffect, useState } from "react";

const Lended = () => {
  const [ename, setename] = useState("");
  const [cost, setcost] = useState("");
  const [lname, setlname] = useState("");
  const [date, setdate] = useState("");
  const [expense, setexpense] = useState(() => {
    const stored = localStorage.getItem("lendedExpenses");
    return stored ? JSON.parse(stored) : [];
  });

  // Save to localStorage whenever expense changes
  useEffect(() => {
    localStorage.setItem("lendedExpenses", JSON.stringify(expense));
  }, [expense]);

  function onClickHandler() {
    if (!ename || !cost || !lname || !date) {
      alert("All fields are required");
      return;
    }
    const newExpense = {
      exname: ename,
      excost: cost,
      exlname: lname,
      exdate: date,
    };
    setexpense((prev) => [...prev, newExpense]);

    // Reset form fields
    setename("");
    setcost("");
    setlname("");
    setdate("");
  }

  function clearLend() {
    setexpense([]);
    localStorage.removeItem("lendedExpenses");
  }

  function deleteExpense(index) {
    const updated = expense.filter((_, i) => i !== index);
    setexpense(updated);
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        {/* Form */}
        <div className="expense xl:flex xl:flex-wrap flex-col text-center gap-4 justify-center items-center px-5 md:px-20 py-5 sm:flex-row">
          <div className="expenseName text-[20px] text-blue-500 font-semibold p-3">
            <label className="border-l-4 border-b-4 border-blue-700 p-3 rounded-full">
              Expense Name:
            </label>
            <input
              type="text"
              placeholder="Enter expense name"
              className="border-t-4 border-r-4 px-5 py-3 border-blue-700 rounded-full"
              value={ename}
              onChange={(e) => setename(e.target.value)}
            />
          </div>
          <div className="expenseName text-[20px] text-blue-500 font-semibold p-3">
            <label className="border-l-4 border-b-4 border-blue-700 p-3 rounded-full">
              Expense Cost:
            </label>
            <input
              type="text"
              placeholder="Enter expense cost"
              className="border-t-4 border-r-4 px-5 py-3 border-blue-700 rounded-full"
              value={cost}
              onChange={(e) => setcost(e.target.value)}
            />
          </div>
          <div className="expenseName text-[20px] text-blue-500 font-semibold p-3">
            <label className="border-l-4 border-b-4 border-blue-700 p-3 rounded-full">
              Name of Receiver:
            </label>
            <input
              type="text"
              placeholder="Enter receiver's name"
              className="border-t-4 border-r-4 px-5 py-3 border-blue-700 rounded-full"
              value={lname}
              onChange={(e) => setlname(e.target.value)}
            />
          </div>
          <div className="expenseDate text-[20px] text-blue-500 font-semibold p-3">
            <label className="border-l-4 border-b-4 border-blue-700 p-3 rounded-full">
              Expense Date:
            </label>
            <input
              type="date"
              className="border-t-4 border-r-4 px-5 py-3 border-blue-700 rounded-full"
              value={date}
              onChange={(e) => setdate(e.target.value)}
            />
          </div>
        </div>

        {/* Buttons */}
        <button
          className="bg-green-500 m-4 text-[20px] hover:bg-green-600 text-white rounded-full font-bold px-7 text-center py-3"
          onClick={onClickHandler}
        >
          Add Expense
        </button>
        <button
          className="text-white font-semibold rounded-full px-5 py-2 hover:bg-red-700 bg-red-600"
          onClick={clearLend}
        >
          Clear History
        </button>

        {/* Recent Expenses */}
        <h1 className="text-3xl text-blue-800 font-bold border-l-8 px-5 my-5 border-blue-700 w-full m-2">
          Recent Expense
        </h1>
        <div className="box grid grid-cols-5 py-2 px-5 gap-5 break-words bg-blue-500 rounded-3xl m-2 w-[98vw]">
          <div className="bg-blue-700 text-blue-100 font-bold py-2 px-2 rounded-2xl">
            Expense Name
          </div>
          <div className="bg-blue-700 text-blue-100 font-bold py-2 px-2 rounded-2xl">
            Expense Cost
          </div>
          <div className="bg-blue-700 text-blue-100 font-bold py-2 px-2 rounded-2xl">
            From
          </div>
          <div className="bg-blue-700 text-blue-100 font-bold py-2 px-2 rounded-2xl">
            Expense Date
          </div>
          <div className="flex bg-blue-700 text-blue-100 font-bold py-2 px-2 rounded-2xl justify-around">
            <div>Edit</div>
            <div>Delete</div>
          </div>
        </div>

        {expense.map((exp, index) => (
          <div
            className="box grid grid-cols-5 py-2 px-5 gap-5 w-[98vw] break-words bg-blue-500 rounded-3xl m-2"
            key={index}
          >
            <div className="bg-blue-300 py-2 px-4 rounded-2xl">{exp.exname}</div>
            <div className="bg-blue-300 py-2 px-4 rounded-2xl">{exp.excost}</div>
            <div className="bg-blue-300 py-2 px-4 rounded-2xl">{exp.exlname}</div>
            <div className="bg-blue-300 py-2 px-4 rounded-2xl">{exp.exdate}</div>
            <div className="bg-blue-300 py-2 px-4 rounded-2xl flex justify-around items-center">
              <button>
                <i className="fa-solid fa-pen"></i>
              </button>
              <button onClick={() => deleteExpense(index)}>
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Lended;
