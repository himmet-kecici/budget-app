import React from 'react'

const IncomeP = ({ incomeProcessing }) => {
    return (
        <li className='processing'>
            <div className='processing-values' style={{ color: '#77dd77' }}>
                <span className='processing-text'>{incomeProcessing.incomeText}</span>
                <span className='processing-amount'>${incomeProcessing.incomeAmount}</span>
            </div>
            <div className='delete-btn'>x</div>
        </li>
    )
}

export default IncomeP