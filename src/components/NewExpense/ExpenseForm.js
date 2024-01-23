import React,{useState} from 'react'
import './Expense.css'

export default function ExpenseForm() {
    // const[enteredTitle,setEnteredTitle]=useState('')
    // const[enteredAmount,setenteredAmount]=useState('')
    // const[enteredDate,setenteredDate]=useState('')

    const[userInput,setUserInput]=useState({
        enteredTitle:'',
        enteredAmount:'',
        enteredDate:'',
    })
    const titleChangeHandler=(event)=>{
        setUserInput({
            ...userInput,
            enteredTitle:event.target.value
        }
        )

    }
    const amountChangeHandler=(event)=>{
        setUserInput(
            {
            ...userInput,
            enteredAmount:event.target.value
            }
        )
    }
    const dateChangeHandler=(event)=>{
        setUserInput({
            ...userInput,
            enteredDate:event.target.value
        }
        )
    }
  return (
   <form >
    <div className='new-expense__control'>
        <div className='new-expense__constrol'>
            <label >Title</label>
            <input type="text" onChange={titleChangeHandler} />

        </div>
        <div className='new-expense__control'>
            <label >Amount</label>
            <input type="number" min={0.01} step={0.01} onChange={amountChangeHandler} />
        </div>
        <div className='new-expense__control'>
            <label >Date</label>
            <input type="date" min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} />
        </div>
        <div className='new-expense__actions'>
        <button type='submit'>Add Expenses</button>
        </div>
        
        
    </div>
   </form>
  )
}