import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    transactions:[
        {id:0,amount:100,category:"Food",type:"Expense",date:'2025-01-17'},
    ],
    lastId : 1,
    filteredTransactions: [],
}


const tranSlice = createSlice({
    name:"transactions",
    initialState,
    reducers:{
        Addtransaction:(state,action)=>{
            const Newtransaction = {...action.payload,id:state.lastId}
            state.transactions=[...state.transactions,Newtransaction]
            state.lastId +=1

        },
        deleteTransaction:(state,action)=>{
            const id  = action.payload
            state.transactions = state.transactions.filter((elm) => elm.id !== id);

        },
        filterTransactions:(state,action)=>{
        const { category, startDate, endDate } = action.payload;

        const filtered = state.transactions.filter((transaction) => {
        const transactionDate = new Date(transaction.date);
        const filterStartDate = startDate ? new Date(startDate) : null;
        const filterEndDate = endDate ? new Date(endDate) : null;
        const matchesCategory = category ? transaction.category === category : true;
        const matchesDateRange =
          (!filterStartDate || transactionDate >= filterStartDate) &&
          (!filterEndDate || transactionDate <= filterEndDate);

        return matchesCategory && matchesDateRange;
      });
      state.filteredTransactions = filtered;
      }
}})


export const {Addtransaction,deleteTransaction,filterTransactions} = tranSlice.actions
export default tranSlice.reducer