import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTransaction } from "../features/TransactionsSlice";
import Filters from "./Filter";

export default function TransactionList() {
  const state = useSelector((state) => state.transaction);
  const transactions =
    state.filteredTransactions.length > 0
      ? state.filteredTransactions
      : state.transactions;
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTransaction(id));
  };

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6">
      <Filters />
      <div className="mt-6 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
              <tr>
                <th className="py-3 px-4 text-left text-xs sm:text-sm md:text-base">Amount</th>
                <th className="py-3 px-4 text-left text-xs sm:text-sm md:text-base">Category</th>
                <th className="py-3 px-4 text-left text-xs sm:text-sm md:text-base">Type</th>
                <th className="py-3 px-4 text-left text-xs sm:text-sm md:text-base">Date</th>
                <th className="py-3 px-4 text-center text-xs sm:text-sm md:text-base">Action</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr
                  key={transaction.id}
                  className={`border-b ${
                    transaction.type === "Expense" ? "bg-red-400 bg-opacity-50" : "bg-green-400 bg-opacity-50"
                  }`}
                >
                  <td className="py-3 px-4 text-xs sm:text-sm md:text-base">{transaction.amount}</td>
                  <td className="py-3 px-4 text-xs sm:text-sm md:text-base">{transaction.category}</td>
                  <td className="py-3 px-4 text-xs sm:text-sm md:text-base">{transaction.type}</td>
                  <td className="py-3 px-4 text-xs sm:text-sm md:text-base">{transaction.date}</td>
                  <td className="py-3 px-4 text-center">
                    <button
                      onClick={() => handleDelete(transaction.id)}
                      className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 sm:py-2 px-2 sm:px-4 rounded text-xs sm:text-sm md:text-base"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {transactions.length === 0 && (
                <tr>
                  <td colSpan="5" className="py-4 text-center text-gray-500 text-xs sm:text-sm md:text-base">
                    No transactions found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
