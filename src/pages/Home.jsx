import React from "react";

const Home = () => {
  return (
    <div className="m-5 mt-10 p-5 flex flex-col gap-10 justify-center items-center">
      <h2 className=" text-gray-600 text-4xl text-center font-semibold">
        Welcome to Your Expense Tracker
      </h2>
      <p className="text-center w-[50vw] text-2xl text-gray-500">
        “Keep track of all your expenses in one place. Add new expenses, view
        all your spending, and manage shared expenses easily. Stay on top of
        your finances with minimal effort!”
      </p>
    </div>
  );
};

export default Home;
