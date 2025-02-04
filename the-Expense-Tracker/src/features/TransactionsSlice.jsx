import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    transactions:[
        {id:0,amount:100,category:"Food",type:"Expense",date:'2025-01-17'},
    ],
    lastId : 1,
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
            const {id} =action.payload
            state.transactions = [state.transactions.filter((elm) => elm.id !== id)];

        },
        filterTransaction:(state,action)=>{

        }
    }
})


export const {Addtransaction,deleteTransaction,filterTransaction} = tranSlice.actions
export default tranSlice.reducer