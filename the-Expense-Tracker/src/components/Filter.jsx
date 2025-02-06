import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterTransactions } from "../features/TransactionsSlice";

const Filters = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleFilterChange = () => {
    dispatch(filterTransactions({ category, startDate, endDate }));
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex flex-wrap items-center gap-4">
    
      <select
        className="border p-2 rounded w-40"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Salary">Salary</option>
        <option value="Food">Food</option>
        <option value="Rent">Rent</option>
        <option value="Entertainment">Entertainment</option>
      </select>

      
      <input
        type="date"
        className="border p-2 rounded w-40"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />

      <input
        type="date"
        className="border p-2 rounded w-40"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />

      
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleFilterChange}
      >
        Apply Filters
      </button>
    </div>
  );
};

export default Filters;
