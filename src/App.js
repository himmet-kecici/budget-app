import React from 'react'
import './App.scss'
import AddProcessing from './components/addProcessing/addProcessing'
import Balance from './components/balance/balance'
import ExpenseList from './components/expenseList/expenseList'
import Header from './components/header/header'
import IncomeList from './components/incomeList/incomeList'
import { GlobalContextProvider } from './context/globalState'
const App = () => {
    return (
        <GlobalContextProvider>
            <div className='container' >
                <Header />
                <div className='app-wrapper'>
                    <Balance />
                    <AddProcessing />
                    <div className='list-container'>
                        <IncomeList />
                        <ExpenseList />
                    </div>
                </div>
            </div>
        </GlobalContextProvider>
    )
}

export default App