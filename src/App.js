import React,{useState} from 'react'
import './App.css';
import ExpenseItem  from './components/Expenses/ExpenseItem';
import Cards from './components/UI/Cards'
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const previousExpenses=[
    {key:'1',title:'food',Amount:100,time:new Date(2024,0,20),location:'delhi'},
    {key:'2',title:'petrol',Amount:200,time:new Date(2024,0,21),location:'mumbai'},
    {key:'3',title:'cloth',Amount:500,time:new Date(2024,0,22),location:'srinagar'},
    {key:'4',title:'books',Amount:200,time:new Date(2024,0,23),location:'amritsar'},
  ]
  const[updatedExpenses,setExpenses]=useState(previousExpenses)

  const deleteExpenses=(i)=>{
    let newExpenses=[...updatedExpenses]
    let xyz=newExpenses.filter((element)=>{
      return element.key!=i
     })
   setExpenses(xyz)

  }

  return (
    <Cards>
     <NewExpense/>
      {updatedExpenses.map((element,i)=>{
        return(
          <ExpenseItem
         title={element.title}
         Amount={element.Amount} 
         time={element.time} 
         location={element.location}
         index={element.key}
         deleteExpenses={deleteExpenses}
         />

        )
      })}
    </Cards>
    
  );
}

export default App;
