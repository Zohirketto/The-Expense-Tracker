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
    <div className="min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
      <header className="bg-blue-700 p-6 text-white text-3xl font-bold">
        Expense Tracker Dashboard
      </header>
      <div className="flex">
        <aside className="w-1/5 bg-blue-800 text-white p-6">
          <nav>
            <ul>
              <li className="mb-6">
                <Link to="/add" className="hover:underline">
                  Add Transaction
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="flex-1 p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-80 backdrop-blur-lg p-10 rounded-xl shadow-xl flex flex-col items-center">
              <h2 className="text-2xl font-bold text-gray-700">Income</h2>
              <p className="text-green-600 text-4xl font-semibold mt-6">
                ${income.toFixed(2)}
              </p>
            </div>
            <div className="bg-white bg-opacity-80 backdrop-blur-lg p-10 rounded-xl shadow-xl flex flex-col items-center">
              <h2 className="text-2xl font-bold text-gray-700">Total Balance</h2>
              <p className="text-gray-800 text-4xl font-semibold mt-6">
                ${total.toFixed(2)}
              </p>
            </div>
            <div className="bg-white bg-opacity-80 backdrop-blur-lg p-10 rounded-xl shadow-xl flex flex-col items-center">
              <h2 className="text-2xl font-bold text-gray-700">Expenses</h2>
              <p className="text-red-600 text-4xl font-semibold mt-6">
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
