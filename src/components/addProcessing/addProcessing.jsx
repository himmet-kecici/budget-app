import React, { useState, useContext } from 'react'
import './addProcessing-styles.scss'
import { v4 as uuidv4 } from 'uuid';
import { GlobalContext } from '../../context/globalState'


const AddProcessing = () => {
    const { addIncome, addExpense } = useContext(GlobalContext)
    const [income, setIncome] = useState({
        incomeText: '',
        incomeAmount: []
    })

    const { incomeText, incomeAmount } = income

    const onChangeIncome = e => {
        setIncome({
            ...income,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitIncome = e => {
        e.preventDefault()
        const newIncomeProcess = {
            id: uuidv4(),
            incomeText,
            incomeAmount: incomeAmount * 1
        }

        addIncome(newIncomeProcess)
        setIncome({
            incomeText: '',
            incomeAmount: []
        })
    }

    const [expense, setExpense] = useState({
        expenseText: '',
        expenseAmount: []
    })

    const { expenseText, expenseAmount } = expense

    const onChangeExpense = e => {
        setExpense({
            ...expense,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitExpense = e => {
        e.preventDefault()
        const newExpenseProcess = {
            id: uuidv4(),
            expenseText,
            expenseAmount: expenseAmount * 1
        }

        addExpense(newExpenseProcess)
        setExpense({
            expenseText: '',
            expenseAmount: []
        })
    }

    return (
        <div className='form-wrapper'>
            <form onSubmit={onSubmitIncome}>
                <div className='input-group income'>
                    <input name='incomeText' type='text' value={incomeText} placeholder='Add Income' autoComplete='off' onChange={onChangeIncome} />
                    <input name='incomeAmount' type='number' value={incomeAmount} placeholder='Amount' autoComplete='off' onChange={onChangeIncome} />
                    <input type='submit' value='Submit' style={{ backgroundColor: '#77dd77' }} />
                </div>
            </form>
            <form onSubmit={onSubmitExpense}>
                <div className='input-group expense'>
                    <input name='expenseText' type='text' value={expenseText} placeholder='Add Expense' autoComplete='off' onChange={onChangeExpense} />
                    <input name='expenseAmount' type='number' value={expenseAmount} placeholder='Amount' autoComplete='off' onChange={onChangeExpense} />
                    <input type='submit' value='Submit' style={{ backgroundColor: '#C44B4F' }} />
                </div>
            </form>
        </div>
    )
}

export default AddProcessing