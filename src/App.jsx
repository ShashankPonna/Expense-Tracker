import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import AddExpense from "./pages/AddExpense";
import AllExpense from "./pages/AllExpense";
import Shared from "./pages/Shared";
import Home from "./pages/Home";

const App = () => {
  const [ishome, setishome] = useState(0)
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/AddExpense" element={<AddExpense />} />
        <Route path="/Shared" element={<Shared/>} />
        <Route path="/AllExpense" element={<AllExpense />} />
      </Routes>
    </>
  );
};

export default App;
