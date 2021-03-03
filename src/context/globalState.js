import React, { createContext, useReducer, useEffect } from 'react'
import AppReducer from './appReducer'

const initialState = {
    incomeProcessings: JSON.parse(localStorage.getItem('incomeProcessings')) || [],
    expenseProcessings: JSON.parse(localStorage.getItem('expenseProcessings')) || []
}

export const GlobalContext = createContext(initialState)

export const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    useEffect(() => {
        localStorage.setItem('incomeProcessings', JSON.stringify(state.incomeProcessings))
        localStorage.setItem('expenseProcessings', JSON.stringify(state.expenseProcessings))
    })

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

    const deleteProcessing = (id) => {
        dispatch({
            type: 'DELETE_PROCESSING',
            payload: id
        })
    }

    return (
        <GlobalContext.Provider value={{
            incomeProcessings: state.incomeProcessings,
            expenseProcessings: state.expenseProcessings,
            addIncome,
            addExpense,
            deleteProcessing
        }}>
            {children}
        </GlobalContext.Provider>
    )
}