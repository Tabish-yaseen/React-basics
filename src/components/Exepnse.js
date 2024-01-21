import './Expense.css'
function Expense(props) {
    const time = props.time.toISOString();

    return (
      <div className="expense-container">
        <div className="expense-item">{props.title}</div>
        <div className="expense-item">
          <h1>${props.Amount}</h1>
          <div className="nested-expense">{time}</div>
          <p>Location: {props.location}</p> 
        </div>
      </div>
    );
  }
  
  export default Expense; 