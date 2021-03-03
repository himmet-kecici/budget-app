import React, { useContext } from 'react'
import { GlobalContext } from '../../context/globalState'
import IncomeP from '../incomeP/incomeP'

const IncomeList = () => {
    const { incomeProcessings } = useContext(GlobalContext)
    console.log(incomeProcessings)
    return (
        <div className='processings processings-income'>

            <h2 style={{ width: '380px' }}>history</h2>
            <ul className='processing-list'>
                {incomeProcessings.map(incomeProcessing => (
                    <IncomeP incomeProcessing={incomeProcessing} key={incomeProcessing.id} />
                ))}
            </ul>
        </div>
    )
}

export default IncomeList 