import './App.css';

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
function App() {
    const expenses = []

    return (
        <div className="App">
            <NewExpense></NewExpense>
            <Expenses expenses={expenses}></Expenses>
        </div>
    );
}

export default App;
