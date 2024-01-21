import './Expense.css'
function Expense() {
    const currentDate = new Date(2023, 0, 20);
    const title = 'Food';
    const amount = 1000;
    const locationOfExpenditure = 'Grocery Store'; 
  
    
    const formattedDate = currentDate.toLocaleDateString();
  
    return (
      <div className="expense-container">
        <div className="expense-item">{title}</div>
        <div className="expense-item">
          <h1>{formattedDate}</h1>
          <div className="nested-expense">${amount}</div>
          <p>Location: {locationOfExpenditure}</p> 
        </div>
      </div>
    );
  }
  
  export default Expense;