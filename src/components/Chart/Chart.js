import "./Chart.css";

import ChartBar from "./ChartBar.js";

const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoints) => (
        <ChartBar
          key={dataPoints.label}
          value={dataPoints.value}
          maxValue={null}
          label={dataPoints.label}
        />
      ))}
    </div>
  );
};

export default Chart;
