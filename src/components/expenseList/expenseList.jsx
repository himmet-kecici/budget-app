import React from 'react'

const ExpenseList = () => {
    return (
        <div className='processings processings-expense'>
            <h2>history</h2>
            <ul className='processing-list'>
                <li className='processing'>
                    <div className='processing-values' style={{ color: '#c44b4f' }}>
                        <span className='processing-text'>rent</span>
                        <span className='processing-amount'>$69</span>
                    </div>
                    <div className='delete-btn'>X</div>
                </li>
            </ul>
        </div>
    )
}

export default ExpenseList 