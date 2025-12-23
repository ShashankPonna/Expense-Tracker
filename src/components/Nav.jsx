import React, { useState } from "react";
import { Link, Router, Routes } from "react-router-dom";
import AddExpense from "../pages/AddExpense";
const Nav = () => {
  const [ham, setham] = useState(false)
  return (
    <>
      <div className="navbar flex flex-column bg-blue-300 justify-between items-ce px-5 md:px-20 py-5">
        <div className="logo text-blue-900 font-bold text-4xl tracking-wide ">
          E<span className="text-slate-50">x</span>pense Tracker
        </div>

        <div className="links hidden sm:flex justify-between gap-10 items-center text-1xl lg:text-2xl font-semibold text-blue-800">
          <Link to="/AddExpense">Add Expense</Link>
          <Link to="/Shared">Shared Expense</Link>
          {/* <Link to="/AllExpense">All Expense</Link> */}
        </div>
        <div className="sm:hidden flex justify-center items-center">
          <button id="menu-btn" className="text-2xl " onClick={() => {setham(!ham)}}>
            ☰
          </button>
        </div>
      </div>
        <div className={`links flex flex-col w-full bg-blue-300 justify-center  items-center text-2xl lg:text-2xl font-semibold text-blue-800 ${ham ? "flex" : "hidden"}`}>
          <Link to="/AddExpense" className="p-2 border-t-2 w-full text-center">Add Expense</Link>
          <Link to="/Shared" className="p-2 border-t-2 w-full text-center">Shared Expense</Link>
          {/* <Link to="/AllExpense" className="p-2 border-2 w-full text-center">All Expense</Link> */}
        </div>
    </>
  );
};

export default Nav;
