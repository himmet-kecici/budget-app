import React from 'react'

const ExpenseP = ({ expenseProcessing }) => {
    return (
        <li className='processing'>
            <div className='processing-values' style={{ color: '#77dd77' }}>
                <span className='processing-text'>{expenseProcessing.expenseText}</span>
                <span className='processing-amount'>${expenseProcessing.expenseAmount}</span>
            </div>
            <div className='delete-btn'>x</div>
        </li>
    )
}

export default ExpenseP