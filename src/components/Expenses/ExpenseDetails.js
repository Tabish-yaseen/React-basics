import React from 'react'
import './ExpenseDetails.css';

const ExpenseDetails = (props) => {
  return (
    <div className="expense-details-container">
      <div><h1>${props.Amount}</h1></div>
      
      <div className="expense-item">{props.title}</div>
      <div><p className="expense-details-location">Location: {props.location}</p></div>
    </div>
  );
}

export default ExpenseDetails;