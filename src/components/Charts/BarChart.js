import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Chart from "react-apexcharts";
import { barChartData, barChartOptions } from "../../variables/charts";

const BarChart = () => {
  const [chartData, setChartData] = useState([]);
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData(barChartData);
    setChartOptions(barChartOptions);
  }, []);
  return (
    <Card py="1rem" height={{ sm: "200px" }} width="100%" position="relative">
      <Chart
        options={chartOptions}
        series={chartData}
        type="bar"
        width="100%"
        height="100%"
      />
    </Card>
  );
};

export default BarChart;
