import React, { useContext } from 'react'
import { GlobalContext } from '../../context/globalState'

const ExpenseP = ({ expenseProcessing }) => {

    const { deleteProcessing } = useContext(GlobalContext)

    return (
        <li className='processing'>
            <div className='processing-values' style={{ color: '#77dd77' }}>
                <span className='processing-text'>{expenseProcessing.expenseText}</span>
                <span className='processing-amount'>${expenseProcessing.expenseAmount}</span>
            </div>
            <div className='delete-btn' onClick={() => deleteProcessing(expenseProcessing.id)}>x</div>
        </li>
    )
}

export default ExpenseP