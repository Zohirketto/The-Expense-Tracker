import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TransactionForm from './components/TransactionForm'
import './App.css'
import TransactionList from './components/TransactionList'

function App() {
  

  return (
    <>

    <div>
     
      <TransactionForm/>
      <TransactionList/>
    </div>


    </>
  )
}

export default App
