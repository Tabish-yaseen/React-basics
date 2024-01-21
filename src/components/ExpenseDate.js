import './ExpenseDate.css'
function ExpenseDate(props){

    const day = props.time.getDate();
    const month = props.time.toLocaleString('en', { month: 'long' }); // Full month name
    const year = props.time.getFullYear();
    return(
            <div className="nested-expense">
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>

          </div>

       
    )
}
export default ExpenseDate