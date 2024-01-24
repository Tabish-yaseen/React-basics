import React, { useState } from 'react';
import './App.css';
import ExpenseList from './components/Expenses/ExpenseList';
import ExpenseFilter from './components/Expenses/ExpenseFilter';
import Cards from './components/UI/Cards';
import NewExpense from './components/NewExpense/NewExpense';

const previousExpenses = [
  { id: '1', title: 'food', Amount: 100, time: new Date(2025, 0, 20), location: 'delhi' },
  { id: '2', title: 'petrol', Amount: 200, time: new Date(2024, 0, 21), location: 'mumbai' },
  { id: '3', title: 'cloth', Amount: 500, time: new Date(2025, 0, 22), location: 'srinagar' },
  { id: '4', title: 'books', Amount: 200, time: new Date(2024, 0, 23), location: 'amritsar' },
];

function App() {
  const [updatedExpenses, setExpenses] = useState(previousExpenses);
  const [selectedValue, setSelectedValue] = useState('2023');


  const addExpense=(expense)=>{
    setExpenses((previousExpenses)=>{
      return[expense,...previousExpenses]
    })

  }

  const changleFilter = (value) => {
    setSelectedValue(value);
    setExpenses(previousExpenses.filter((expense) => {
      return expense.time.getFullYear() === parseInt(value);
    }));
  };
  const deleteExpenses = (key) => {
    setExpenses((prevExpenses) => {
      return prevExpenses.filter((expense) => expense.id !== key);
    });
  };

  return (
    <Cards>
      <ExpenseFilter selectedYear={selectedValue} onChangeFilter={changleFilter} />
      <NewExpense onAddExpenseHandler={addExpense} />
      <ExpenseList updatedExpenses={updatedExpenses} deleteExpenses={deleteExpenses}/>
      
      {/* {updatedExpenses.length === 0 && <p>No expenses</p>}
       {updatedExpenses.length > 0 &&
      updatedExpenses.map((element) => (
        <ExpenseItem
          key={element.id}
          title={element.title}
          Amount={element.Amount}
          time={element.time}
          location={element.location}
          index={element.id}
          deleteExpenses={deleteExpenses}
        />
      ))} */}
    </Cards>
  );
}

export default App;
