import React from "react";
import './ChartBar.css'

export default function ChartBar({ value, label, maxValue }) {
  let barFillHeight = "0%";
  if (maxValue > 0) {
    barFillHeight = Math.floor((value / maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{height: barFillHeight}}
        ></div>
        <div className="chart-bar__label">{label}</div>
      </div>
    </div>
  );
}
