import './App.css';

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
function App() {
    const expenses = []

    const addExpensehandler = (expense) => {
        console.log('In App.js')
        console.log(expense)
    }

    return (
        <div className="App">
            <NewExpense onAddExpense={addExpensehandler}></NewExpense>
            <Expenses expenses={expenses}></Expenses>
        </div>
    );
}

export default App;
