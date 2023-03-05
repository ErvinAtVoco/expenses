import React, {useState} from 'react';
import ExpenseItem from "./Expenseitem";
import './Expenses.css'
import Card from "../UI/Card"
import ExpensesFilter from "./ExpensesFilter";
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState(2023)

    console.log('Year data in Expenses.js' + filteredYear)

    const filterChangeHandler = (selectedYear) => {
        console.log('Filter change handled by Expenses.js')
        console.log(selectedYear + ' in Expenses.js')
        setFilteredYear(selectedYear)
    }

    console.log('expenses')
    console.log(props.expenses)


    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
            {props.expenses.filter(expenses => expenses.date.getFullYear() === parseInt(filteredYear)).map((expense) => {
                    return <ExpenseItem key={expense.id} title={expense.title} date={expense.date} amount={expense.amount}></ExpenseItem>
                })}
        </Card>
    );
}
export default Expenses