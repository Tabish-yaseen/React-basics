import React,{useState} from 'react'
import ExpenseList from './ExpenseList';
import ExpenseFilter from './ExpenseFilter';
import Cards from '../UI/Cards';
import NewExpense from '../NewExpense/NewExpense';
import ExpenseChart from './ExpenseChart';


export default function Expenses({previousExpenses}) {
    const [updatedExpenses, setExpenses] = useState(previousExpenses);
  const [selectedValue, setSelectedValue] = useState('2023');

  const addExpense=(expense)=>{
    setExpenses((previousExpenses)=>{
      return[expense,...previousExpenses]
    })

  }

  const changeFilter = (value) => {
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
      <ExpenseFilter selectedYear={selectedValue} onChangeFilter={changeFilter} />
      <NewExpense onAddExpenseHandler={addExpense} />
      <ExpenseChart expenses={updatedExpenses}/>
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
  )
}
