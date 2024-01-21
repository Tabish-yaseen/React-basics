import './ExpenseDetails.css';

import './ExpenseDetails.css';

function ExpenseDetails(props) {
  return (
    <div className="expense-details-container">
      <div className="expense-item">
        <h1>${props.Amount}</h1>
      </div>
      <div className="expense-item">{props.title}</div>
      <div className="expense-details-location">
        <p>Location: {props.location}</p>
      </div>
    </div>
  );
}

export default ExpenseDetails;