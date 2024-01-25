import React, { useState } from 'react'
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Cards from '../UI/Cards';
import ExpenseDetails from './ExpenseDetails';

const ExpenseItem=(props)=> { 
  const[price,setPrice]=useState(props.Amount)
  const clickHandler=()=>{
    setPrice('100')
  }
  
  return (
    <Cards className="expense-container">
      <ExpenseDate time={props.time} />
      <ExpenseDetails Amount={price} location={props.location} title={props.title} />
      <button onClick={()=>{props.deleteExpenses(props.index)}}>delete</button>
      <button onClick={clickHandler}>change Expenses</button>
     
    </Cards>
  );
}

export default ExpenseItem;