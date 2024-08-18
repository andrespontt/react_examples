import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const LineChartComponent = () => {
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: 'basic-bar'
      },
      xaxis: {
        categories: []
      }
    },
    series: [
      {
        name: 'series-1',
        data: []
      }
    ]
  });

  const transformData = () => {
    // Example transformation logic
    return [10, 20, 30, 40, 50];
  };

  useEffect(() => {
    console.log('Initial chartData:', chartData);

    const newData = [...chartData.series];
    newData[0].data = transformData();

    console.log('Transformed data:', newData[0].data);

    setChartData({
      ...chartData,
      series: newData
    });
  }, []); // useEffect will run only once on mount

  return (
    <div id="chart">
      <Chart options={chartData.options} series={chartData.series} type="line" height={350} />
    </div>
  );
};

export default LineChartComponent;