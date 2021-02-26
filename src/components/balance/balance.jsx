import React from 'react'
import './balance-styles.scss'

const Balance = () => {
    return (
        <div className='containerBalance'>

            <div className='plus box'>
                <h2>Incomes</h2>
                <h3 style={{ color: '#77dd77' }}>+$0.00</h3>
            </div>
            <div className='balance box'>
                <h2>Your Balance</h2>
                <h3 style={{ color: '#08cee1' }}>$0.00</h3>
            </div>
            <div className='minus box'>
                <h2>Expenses</h2>
                <h3 style={{ color: '#C44B4F' }}>-$0.00</h3>
            </div>
        </div>
    )
}
export default Balance