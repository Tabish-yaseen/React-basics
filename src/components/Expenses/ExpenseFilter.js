import React from 'react'

export default function ExpenseFilter(props) {
    const dropDownChangeHandler=(event)=>{
        props.onChangeFilter(event.target.value)
        // console.log(event.target.value)

    }
  return (
    <div>
        <label >Filter year</label>
        <select name="selectYear" value={props.selectedYear} onChange={dropDownChangeHandler}>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
        </select>
      
    </div>
  )
}
