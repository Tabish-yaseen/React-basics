import React from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';

const previousExpenses = [
  { id: '1', title: 'food', Amount: 100, time: new Date(2023, 0, 20), location: 'delhi' },
  { id: '2', title: 'petrol', Amount: 200, time: new Date(2023, 1, 21), location: 'mumbai' },
  { id: '3', title: 'cloth', Amount: 500, time: new Date(2025, 2, 22), location: 'srinagar' },
  { id: '4', title: 'books', Amount: 200, time: new Date(2025, 2, 23), location: 'amritsar' },
];

function App() {
  
  return (
    <Expenses previousExpenses={previousExpenses}/>
    
  );
}

export default App;
