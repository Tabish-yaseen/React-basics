import React, { useState } from 'react'
import ExpenseForm  from './ExpenseForm'

export default function NewExpense(props) {
  const[showForm,setShowForm]=useState(false)

  const onSaveExpense=(expense)=>{
    const newexpense={
      ...expense,
      id:Math.random().toString()
    }
    props.onAddExpenseHandler(newexpense)
    setShowForm(false)

  }
  const addHandler=()=>{
    setShowForm(true)
  }
  const cancelHandler=()=>{
    setShowForm(false)
  }
  return (
    <div className='new-expense'>
      {!showForm && <button onClick={addHandler}>Add more Expenses</button>}
      {showForm && <ExpenseForm onSaveHandler={onSaveExpense} onCancel={cancelHandler}/>}
      
        
      
    </div>
  )
}
