import React from 'react'
import './addProcessing-styles.scss'
const AddProcessing = () => {
    return (
        <div className='form-wrapper'>
            <form>
                <div className='input-group income'>
                    <input type='text' placeholder='Add Income' autoComplete='off' />
                    <input type='number' placeholder='Amount' autoComplete='off' />
                    <input type='submit' value='Submit' style={{ backgroundColor: '#77dd77' }} />
                </div>
            </form>
            <form>
                <div className='input-group expense'>
                    <input type='text' placeholder='Add Expense' autoComplete='off' />
                    <input type='number' placeholder='Amount' autoComplete='off' />
                    <input type='submit' value='Submit' style={{ backgroundColor: '#C44B4F' }} />
                </div>
            </form>
        </div>
    )
}

export default AddProcessing