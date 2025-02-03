import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    transactions:[
        {amount:100,category:"Food",type:"Expense",date:'2025-01-17'},
    ]
}


const tranSlice = createSlice({
    name:"transactions",
    initialState,
    reducers:{
        Addtransaction:(state,action)=>{
            const Newtransaction = action.payload
            state.transactions=[...state.transactions,Newtransaction]

        },
        deleteTransaction:(state,action)=>{

        },
        filterTransaction:(state,action)=>{

        }
    }
})


export const {Addtransaction,deleteTransaction,filterTransaction} = tranSlice.actions
export default tranSlice.reducer