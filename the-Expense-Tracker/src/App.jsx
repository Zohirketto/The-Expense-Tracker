import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TransactionForm from './components/TransactionForm'
import './App.css'
import TransactionList from './components/TransactionList'
import Filteri from './components/Filter'
import Balance from './components/Balance'

function App() {
  

  return (
    <>
<div className="w-full max-w-6xl mx-auto p-4 sm:p-6 md:p-8 lg:p-10">
  <Balance />
</div>




    </>
  )
}

export default App
