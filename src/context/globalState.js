import React, { createContext, useReducer } from 'react'
import AppReducer from './appReducer'

const initialState = {
    incomeProcessings: [
        { id: 1, incomeText: "Car sold", incomeAmount: 15000 },
        { id: 2, incomeText: "Salary", incomeAmount: 5000 },
        { id: 3, incomeText: "Bonus", incomeAmount: 13000 }
    ],
    expenseProcessings: [
        { id: 4, expenseText: 'Rent', expenseAmount: 1000 },
        { id: 5, expenseText: 'Bank', expenseAmount: 2000 },
        { id: 6, expenseText: 'Clothes', expenseAmount: 500 }
    ]
}

export const GlobalContext = createContext(initialState)

export const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    const addIncome = (incomeProcessing) => {
        dispatch({
            type: 'ADD_INCOME',
            payload: incomeProcessing
        })
    }
    const addExpense = (expenseProcessing) => {
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expenseProcessing
        })
    }

    return (
        <GlobalContext.Provider value={{
            incomeProcessings: state.incomeProcessings,
            expenseProcessings: state.expenseProcessings,
            addIncome,
            addExpense
        }}>
            {children}
        </GlobalContext.Provider>
    )
}