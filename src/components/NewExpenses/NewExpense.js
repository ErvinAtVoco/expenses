import React, {useState} from "react";

import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
    const saveExpenseDatahandler = (enteredExpenseData) => {
       const expenseData = {
           ...enteredExpenseData,
           id: Math.random().toString()
       }
       props.onAddExpense(expenseData)
    }
    const [state, setState] = useState('Closed')

    const changeMenuState = (menuState) => {
        setState(menuState)
        return state
    }


    return (
        <div className="new-expense">
            {state === 'Closed' && <button id="expense-form-button" onClick={() => changeMenuState('Open')}>Add new expense</button>}
            {state === 'Open' && <ExpenseForm onSaveExpenseData={saveExpenseDatahandler} changeMenuState={changeMenuState}></ExpenseForm>}
        </div>
    )
}

export default NewExpense