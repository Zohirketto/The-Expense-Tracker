
import { useDispatch, useSelector } from "react-redux"
import { deleteTransaction } from "../features/TransactionsSlice"

export default function TransactionList(){

   const transaction = useSelector(state=>state.transaction.transactions)
     
   const Dispatch = useDispatch()

   const Delete =(id) => {
       Dispatch(deleteTransaction(id))
       
   }
    return (

        <div>
            <table>
            <thead>
                <tr>
                <th>Amount</th>
                <th>Category</th>
                <th>Type</th>
                <th>Date</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {transaction.map((elm,index)=>(
                    <tr id={elm.id} key={index}>
                        <td>{elm.amount}</td>
                        <td >{elm.category}</td>
                        <td>{elm.type}</td>
                        <td>{elm.date}</td>
                        <td><button onClick={()=>Delete(elm.id)}>Delete</button></td>

                    </tr>
                ))}
                
            </tbody>
            </table>


        </div>
    )
}