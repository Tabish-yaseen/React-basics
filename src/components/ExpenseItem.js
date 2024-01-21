import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Cards from './Cards';
import ExpenseDetails from './ExpenseDetails';

function ExpenseItem(props) {
  return (
    <Cards className="expense-container">
      <ExpenseDate time={props.time} />
      <ExpenseDetails Amount={props.Amount} location={props.location} title={props.title} />
    </Cards>
  );
}

export default ExpenseItem;