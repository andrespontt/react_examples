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
          text: 'Y)'
        }
      },
      yaxis: {
        title: {
          text: 'Count'
        }
      },
      title: {
        text: 'My chart'
      }
    }
  });

  useEffect(() => {
    
    const generateData = () => {
      const data = [];
      for (let i = 0; i < 1440; i += 30) { 
        const count = Math.floor(Math.random() * 100);
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
