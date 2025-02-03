import {configureStore} from '@reduxjs/toolkit'
import tranSliceReducer  from '../features/TransactionsSlice'
export const store = configureStore({
    reducer:{
        transaction:tranSliceReducer,
    }
})