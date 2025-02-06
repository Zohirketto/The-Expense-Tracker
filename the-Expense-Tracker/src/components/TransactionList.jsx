import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTransaction} from "../features/TransactionsSlice";
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
    <div className="max-w-6xl mx-auto p-6">
      <Filters />
      <div className="mt-6 bg-white rounded-lg shadow-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Amount</th>
              <th className="py-3 px-4 text-left">Category</th>
              <th className="py-3 px-4 text-left">Type</th>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr
                key={transaction.id}
                className={`border-b ${
                  transaction.type === "Expense" ? "bg-red-50" : "bg-green-50"
                }`}
              >
                <td className="py-3 px-4">{transaction.amount}</td>
                <td className="py-3 px-4">{transaction.category}</td>
                <td className="py-3 px-4">{transaction.type}</td>
                <td className="py-3 px-4">{transaction.date}</td>
                <td className="py-3 px-4 text-center">
                  <button
                    onClick={() => handleDelete(transaction.id)}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {transactions.length === 0 && (
              <tr>
                <td colSpan="5" className="py-4 text-center text-gray-500">
                  No transactions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
