import React, { useContext } from 'react'
import { GlobalContext } from '../../context/globalState'


const IncomeP = ({ incomeProcessing }) => {
    const { deleteProcessing } = useContext(GlobalContext)

    return (

        <li className='processing'>
            <div className='processing-values' style={{ color: '#77dd77' }}>
                <span className='processing-text'>{incomeProcessing.incomeText}</span>
                <span className='processing-amount'>${incomeProcessing.incomeAmount}</span>
            </div>
            <div className='delete-btn' onClick={() => deleteProcessing(incomeProcessing.id)}>x</div>
        </li>
    )
}

export default IncomeP