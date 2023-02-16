import React, {useState} from 'react';

import './ExpenseFilter.css';

const ExpensesFilter = () => {

    const [year, setYear] = useState(2023);

    const yearChangeHandler = (event) => {
        console.log(`Year ${event.target.value} in Expenses`)
        setYear(event.target.value)
    }
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={yearChangeHandler}>
                    <option value='2023'>2023</option>
                    <option value='2024'>2024</option>
                    <option value='2025'>2025</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;