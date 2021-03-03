import React, { useContext } from 'react'
import './balance-styles.scss'
import { GlobalContext } from '../../context/globalState'
const Balance = () => {
    const { incomeProcessings, expenseProcessings } = useContext(GlobalContext)

    const incomeAmounts = incomeProcessings.map(
        incomeProcessing => incomeProcessing.incomeAmount
    )

    const expenseAmounts = expenseProcessings.map(
        expenseProcessing => expenseProcessing.expenseAmount
    )

    const totalAmount = (total) => (
        total.reduce((acc, item) => (acc += item), 0).toFixed(2)
    )
    return (
        <div className='containerBalance'>

            <div className='plus box'>
                <h2>Incomes</h2>
                <h3 style={{ color: '#77dd77' }}>+${totalAmount(incomeAmounts)}</h3>
            </div>
            <div className='balance box'>
                <h2>Your Balance</h2>
                <h3 style={{ color: '#08cee1' }}>${(totalAmount(incomeAmounts) - totalAmount(expenseAmounts)).toFixed(2)}</h3>
            </div>
            <div className='minus box'>
                <h2>Expenses</h2>
                <h3 style={{ color: '#C44B4F' }}>-${totalAmount(expenseAmounts)}</h3>
            </div>
        </div>
    )
}
export default Balance