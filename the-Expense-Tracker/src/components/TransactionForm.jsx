import { useState } from "react";
import { Addtransaction } from "../features/TransactionsSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function TransactionForm() {
  const [form, setForm] = useState({
    amount: "",
    category: "",
    type: "",
    date: new Date().toISOString().split("T")[0],
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handle = () => {
    if (!form.amount || !form.category || !form.type || !form.date) {
      alert("please fill the input");
    } else {
      dispatch(Addtransaction(form));
      setForm({
        amount: "",
        category: "",
        type: "",
        date: new Date().toISOString().split("T")[0],
      });
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-lg sm:max-w-xl bg-white rounded-xl shadow-xl p-8 sm:p-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800">
          Add Transaction
        </h1>
        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold text-lg sm:text-xl mb-2">
              Amount
            </label>
            <input
              type="number"
              value={form.amount}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  amount: Number(e.target.value),
                }))
              }
              className="w-full px-6 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg sm:text-xl"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold text-lg sm:text-xl mb-2">
              Category
            </label>
            <select
              value={form.category}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, category: e.target.value }))
              }
              className="w-full px-6 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg sm:text-xl"
            >
              <option value="">Select Category</option>
              <option value="Food">Food</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Salary">Salary</option>
              <option value="Etc">Etc</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold text-lg sm:text-xl mb-2">
              Type
            </label>
            <select
              value={form.type}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, type: e.target.value }))
              }
              className="w-full px-6 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg sm:text-xl"
            >
              <option value="">Select Type</option>
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold text-lg sm:text-xl mb-2">
              Date
            </label>
            <input
              type="date"
              value={form.date}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, date: e.target.value }))
              }
              className="w-full px-6 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg sm:text-xl"
            />
          </div>
          <button
            onClick={handle}
            className="w-full py-3 mt-6 bg-purple-600 text-white font-bold rounded-md hover:bg-purple-700 transition duration-200 text-lg sm:text-xl"
          >
            Add Transaction
          </button>
        </div>
      </div>
    </div>
  );
}
