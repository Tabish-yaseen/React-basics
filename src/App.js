import React from 'react'
import './App.css';
import ExpenseItem  from './components/Expenses/ExpenseItem';
import Cards from './components/UI/Cards'

function App() {
  const expenses=[
    {title:'food',Amount:100,time:new Date(2024,0,20),location:'delhi'},
    {title:'petrol',Amount:200,time:new Date(2024,0,21),location:'mumbai'},
    {title:'cloth',Amount:500,time:new Date(2024,0,22),location:'srinagar'},
    {title:'books',Amount:200,time:new Date(2024,0,23),location:'amritsar'},
  ]
  return (
    <Cards>
      <h1>hi welcome</h1>
      {expenses.map((element)=>{
        return(
          <ExpenseItem
         title={element.title}
         Amount={element.Amount} 
         time={element.time} 
         location={element.location}
         />

        )
      })}
    </Cards>
    
  );
}

export default App;
