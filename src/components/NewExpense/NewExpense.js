import React from 'react'
import ExpenseForm  from './ExpenseForm'

export default function NewExpense(props) {

  const onSaveExpense=(expense)=>{
    const newexpense={
      ...expense,
      key:Math.random().toString()
    }
    props.onAddExpenseHandler(newexpense)

  }
  return (
    <div className='new-expense'>
        <ExpenseForm  onSaveHandler={onSaveExpense}/>
      
    </div>
  )
}
