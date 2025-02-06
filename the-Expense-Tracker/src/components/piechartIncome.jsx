import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const CategoryPieChartI = ({ transactions }) => {
  
  const expenseByCategory = transactions
    .filter((t) => t.type === "Income")
    .reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + Number(t.amount);
      return acc;
    }, {});

 
  const totalExpenses = Object.values(expenseByCategory).reduce((acc, value) => acc + value, 0);

  
  const chartData = Object.keys(expenseByCategory).map((category) => ({
    name: category,
    value: expenseByCategory[category],
    percentage: ((expenseByCategory[category] / totalExpenses) * 100).toFixed(2),
  }));

  
  const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#FF9800", "#9C27B0"];

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Income by Category</h2>
      {chartData.length > 0 ? (
        <PieChart width={400} height={400}>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            outerRadius={120}
            dataKey="value"
            label={({ name, percentage }) => `${name}: ${percentage}%`}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `${value} (${(value / totalExpenses * 100).toFixed(2)}%)`} />
          <Legend />
        </PieChart>
      ) : (
        <p className="text-gray-700">No income recorded yet.</p>
      )}
    </div>
  );
};

export default CategoryPieChartI;
