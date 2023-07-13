import React from "react";
import { Chart } from "react-google-charts";

const Linechart = () => {
  const data = [
    ["none", "", ""],
    [0, 0, 0],
    [1, 10, 5],
    [2, 23, 15],
    [3, 17, 9],
    [4, 18, 10],
    [5, 9, 5],
    [6, 11, 3],
    [7, 27, 19],
  ];
  const options = {
    series: {
      0: { curveType: "function" },
      1: { curveType: "function" },
    },
  };
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
};

export default Linechart;
