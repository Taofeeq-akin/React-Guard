import "./Chart.css";

import ChartBar from "./ChartBar.js";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value); // this will give us value in array and no more in object
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoints) => (
        <ChartBar
          key={dataPoints.label}
          value={dataPoints.value}
          maxValue={totalMaximum}
          label={dataPoints.label}
        />
      ))}
    </div>
  );
};

export default Chart;
