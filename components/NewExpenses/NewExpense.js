import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) =>{
    const saveExpensesDataHandler = (enteredExpensesData) =>{
        const expensesData = {
            ...enteredExpensesData,
            id:Math.random().toString(),
        };
        props.onAddExpense(expensesData);
    };
    return(
        <div className="new-expense">
            <ExpenseForm  onSaveExpensesData={saveExpensesDataHandler} />
        </div>
    )
};
export default NewExpense;