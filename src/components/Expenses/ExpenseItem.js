import React from 'react'
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Cards from '../UI/Cards';
import ExpenseDetails from './ExpenseDetails';

const ExpenseItem=(props)=> {  
  
  return (
    <Cards className="expense-container">
      <ExpenseDate time={props.time} />
      <ExpenseDetails Amount={props.Amount} location={props.location} title={props.title} />
      <button onClick={()=>{props.deleteExpenses(props.index)}}>delete</button>
     
    </Cards>
  );
}

export default ExpenseItem;