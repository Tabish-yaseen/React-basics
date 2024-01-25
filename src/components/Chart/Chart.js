import React from 'react';
import ChartBar from './ChartBar'; 
import './Chart.css'

const Chart = ({ dataPoints }) => {
    const arrValues=dataPoints.map((element)=>element.value)
    let max=Math.max(...arrValues)

  return (
    <div className='chart'>
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}  
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={max}
        />
      ))}
    </div>
  );
};

export default Chart;
