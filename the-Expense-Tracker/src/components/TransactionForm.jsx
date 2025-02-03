import { useState } from "react";
import { Addtransaction } from "../features/TransactionsSlice";
import { useDispatch } from 'react-redux';

export default function TransactionForm() {
  const [form, setForm] = useState({
    amount: 0,
    category: "",
    type: "",
    date: new Date().toISOString().split("T")[0],
  });

  const Dispatch = useDispatch();

  const Handle = () => {
    if (!form.amount || !form.category || !form.type || !form.date) {
      alert("please fill the input");
    } else {
      Dispatch(Addtransaction(form));
      setForm({
        amount: 0,
        category: "",
        type: "",
        date: new Date().toISOString().split("T")[0],
      });
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-md">
      <label className="block text-sm font-medium text-gray-700 mb-2">Add Amount:</label>
      <input
        type="number"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={form.amount}
        onChange={(e) => setForm((prevForm) => ({ ...prevForm, amount: Number(e.target.value) }))}
      />
      <label className="block text-sm font-medium text-gray-700 mt-4">Choose Category:</label>
      <select
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={form.category}
        onChange={(e) => setForm((prevForm) => ({ ...prevForm, category: e.target.value }))}
      >
        <option>Food</option>
        <option>Entertainment</option>
        <option>Salary</option>
        <option>Etc</option>
      </select>
      <label className="block text-sm font-medium text-gray-700 mt-4">Type:</label>
      <select
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={form.type}
        onChange={(e) => setForm((prevForm) => ({ ...prevForm, type: e.target.value }))}
      >
        <option>Income</option>
        <option>Expense</option>
      </select>
      <label className="block text-sm font-medium text-gray-700 mt-4">Date:</label>
      <input
        type="date"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={form.date}
        onChange={(e) => setForm((prevForm) => ({ ...prevForm, date: e.target.value }))}
      />
      <button
        onClick={Handle}
        className="mt-6 w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Add Transaction
      </button>
    </div>
  );
}
