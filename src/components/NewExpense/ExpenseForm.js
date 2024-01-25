import React, { useState } from "react";
import "./Expense.css";

export default function ExpenseForm(props) {
  const [enteredAmount, setenteredAmount] = useState("");
  const [enteredDate, setenteredDate] = useState("");

  const [enteredTitle, setEnteredTitle] = useState("");
  const[enteredLocation,setEnteredLocation]=useState("")

  const locationChangeHandler=(event)=>{
    setEnteredLocation(event.target.value)

  }
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setenteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setenteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      Amount: enteredAmount,
      time: new Date(enteredDate),
      location:enteredLocation
    };
    props.onSaveHandler(expenseData);
    
    setEnteredTitle('')
    setenteredAmount('')
    setenteredDate('')
    setEnteredLocation('')
  };
  
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__control">
        <div className="new-expense__constrol">
          <label>Title</label>
          <input
           type="text" 
           value={enteredTitle}
           onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min={0.01}
            step={0.01}
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>location</label>
          <input
            type="text"
            value={enteredLocation}
            onChange={locationChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expenses</button>
          <button type="button" onClick={props.onCancel}>Cancel</button>
        </div>
        <div className="new-expense__actions">
          
        </div>

      </div>
    </form>
  );
}
