import React, {useState, useEffect} from 'react';

import './ExpenseFilter.css'

const ExpensesFilter = (props) => {

    const yearChangeHandler = (event) => {
        console.log(`Year ${event.target.value} in Expenses`)
        props.onChangeFilter(event.target.value)

    }

    return (

        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select className='expenses-filter-select' value={props.selected} onChange={yearChangeHandler}>
                    <option value={2023}>2023</option>
                    <option value={2024}>2024</option>
                    <option value={2025}>2025</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;