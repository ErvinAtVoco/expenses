import ExpenseItem from "./Expenseitem";
import './Expenses.css'
function Expenses() {
    const expense = [
        {
            date: new Date(2023, 0, 10),
            title: 'New book',
            price: 30.99
        },
        {
            date: new Date(2023, 0, 10),
            title: 'New jeans',
            price: 99.99
        }
    ]

    return(
        <div className="expenses">
            <ExpenseItem expenseData={expense[0]}></ExpenseItem>
            <ExpenseItem expenseData={expense[1]}></ExpenseItem>
        </div>
    )
}

export default Expenses