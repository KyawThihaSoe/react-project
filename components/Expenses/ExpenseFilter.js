import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) =>{
    const dropdownChangeHandler = (event) =>{
        props.onChangeFilter(event.target.value);
    };
    return(
        <div className="expense-filter">
            <div className="expense-filter__control">
                <label>Filter By Year</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    <option valut="2022">2022</option>
                    <option valut="2021">2021</option>
                    <option valut="2020">2020</option>
                    <option valut="2019">2019</option>
                </select>
            </div>
        </div>
    )
};
export default ExpenseFilter;