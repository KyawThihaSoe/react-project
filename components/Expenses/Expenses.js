import ExpenseList from "./ExpenseList";
import React, {useState} from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
import Card from "../UI/Card"
import "./Expenses.css";
const Expenses = (props)=>{
  const [filterYear,setFilterYear] = useState("2020");
  const filterChangeHandler = (selectedYear) =>{
    setFilterYear(selectedYear);
  };
  const filterExpense = props.expenses.filter((expense)=>{
    return expense.date.getFullYear().toString() === filterYear;
  });
  return(
    <Card className="expenses">
      <ExpenseFilter selected={filterYear} onChangeFilter={filterChangeHandler} />
      <ExpenseChart expenses={filterExpense} />
      <ExpenseList item={filterExpense}/>
    </Card>
  );
};

export default Expenses;