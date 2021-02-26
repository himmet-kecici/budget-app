import React from 'react'
import './App.scss'
import AddProcessing from './components/addProcessing/addProcessing'
import Balance from './components/balance/balance'
import Header from './components/header/header'

const App = () => {
    return (
        <div className='container' >
            <Header />
            <div className='app-wrapper'>
                <Balance />
                <AddProcessing />
            </div>
        </div>
    )
}

export default App