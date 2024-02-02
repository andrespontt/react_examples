import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const LineChartComponent = () => {
  const [chartData, setChartData] = useState({
    series: [{
      name: 'Count',
      data: []
    }],
    options: {
      chart: {
        type: 'line',
        height: 350
      },
      xaxis: {
        type: 'numeric',
        title: {
          text: 'Time of the Day (minutes)'
        }
      },
      yaxis: {
        title: {
          text: 'Count'
        }
      },
      title: {
        text: 'Line Chart with Time of the Day'
      }
    }
  });

  useEffect(() => {
    // Mock data for demonstration purposes
    const generateData = () => {
      const data = [];
      for (let i = 0; i < 1440; i += 30) { // Assuming data for every 30 minutes in a day
        const count = Math.floor(Math.random() * 100); // Random count for demo
        data.push({ x: i, y: count });
      }
      return data;
    };

    const newData = [...chartData.series];
    newData[0].data = generateData();

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
