import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList =(props)=>{
        if (props.item.length ===0) {
            return <h2 className="expenses-List__fallback">Page Not Found</h2>}
        return (
        <ul className="expenses-List">
            {props.item.map((expense)=>{
            return(
            <ExpenseItem 
            key={expense.id}
            title={expense.title} 
            amount={expense.amount}
            date={expense.date}
            />
        );
    })}
        </ul>)
};
export default ExpenseList;