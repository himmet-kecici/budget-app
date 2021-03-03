import React, { useContext } from 'react'
import { GlobalContext } from '../../context/globalState'
import ExpenseP from '../expenseP/expenseP'


const ExpenseList = () => {
    const { expenseProcessings } = useContext(GlobalContext)
    console.log(expenseProcessings)
    return (
        <div className='processings processings-expense'>
            <h2 style={{ width: '380px' }}>history</h2>
            <ul className='processing-list'>
                {expenseProcessings.map(expenseProcessing => (
                    <ExpenseP expenseProcessing={expenseProcessing} key={expenseProcessing.id} />
                ))}
            </ul>
        </div>
    )
}

export default ExpenseList 