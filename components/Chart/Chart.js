import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) =>{
    const dataPointValue = props.dataPoints.map((dataPoint) => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValue);
    return(
        <div className="chart">
            {props.dataPoints.map((dataPoint)=>{
                return(
                <ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                maxvalue={totalMaximum}
                Label={dataPoint.label}
                />
                )
                
            })}
        </div>
    )
};
export default Chart;