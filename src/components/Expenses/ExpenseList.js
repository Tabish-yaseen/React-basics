import React from 'react'
import ExpenseItem from './ExpenseItem';

export default function ExpenseList(props) {
   
  if (props.updatedExpenses.length ===0) {
    return <p>No expenses</p>   
  }
  
  return (
    <div>
        {props.updatedExpenses.map((element) => (
      <ExpenseItem
        key={element.id}
        title={element.title}
        Amount={element.Amount}
        time={element.time}
        location={element.location}
        index={element.id}
        deleteExpenses={props.deleteExpenses}
      />
      ))
        }
        {props.updatedExpenses.length===1 &&(<p>Only single expense here. Please add more...</p>) }
    </div>
  )
}
