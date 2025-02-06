import React from "react";
import { useSelector } from "react-redux";
import TransactionList from "./TransactionList";
import { Link } from "react-router-dom";

export default function Balance() {
  const transactions = useSelector((state) => state.transaction.transactions);
  const income = transactions
    .filter((t) => t.type === "Income")
    .reduce((acc, t) => acc + Number(t.amount), 0);
  const expense = transactions
    .filter((t) => t.type === "Expense")
    .reduce((acc, t) => acc + Number(t.amount), 0);
  const total = income - expense;

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 flex flex-col">
      <header className="bg-blue-700 p-6 text-white text-3xl font-bold">
        Expense Tracker Dashboard
      </header>
      <div className="flex flex-col sm:flex-row p-4 gap-4">
        {/* Sidebar */}
        <aside className="w-full sm:w-1/4 lg:w-1/5 bg-blue-800 text-white p-6 rounded-lg shadow-md">
          <nav>
            <ul>
              <li className="mb-6">
                <Link to="/add" className="hover:underline text-lg">
                  Add Transaction
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white bg-opacity-80 backdrop-blur-lg p-6 rounded-xl shadow-xl flex flex-col items-center">
              <h2 className="text-2xl font-bold text-gray-700 mb-4">Income</h2>
              <p className="text-green-600 text-4xl font-semibold">
                ${income.toFixed(2)}
              </p>
            </div>
            <div className="bg-white bg-opacity-80 backdrop-blur-lg p-6 rounded-xl shadow-xl flex flex-col items-center">
              <h2 className="text-2xl font-bold text-gray-700 mb-4">Total Balance</h2>
              <p className="text-gray-800 text-4xl font-semibold">
                ${total.toFixed(2)}
              </p>
            </div>
            <div className="bg-white bg-opacity-80 backdrop-blur-lg p-6 rounded-xl shadow-xl flex flex-col items-center">
              <h2 className="text-2xl font-bold text-gray-700 mb-4">Expenses</h2>
              <p className="text-red-600 text-4xl font-semibold">
                ${expense.toFixed(2)}
              </p>
            </div>
          </div>
        </main>
      </div>
      <TransactionList />
    </div>
  );
}