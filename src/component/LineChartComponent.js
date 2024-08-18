import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import singleCountryData from '../data/countries_sm.json';

const LineChartComponent = () => {
  const [chartData, setChartData] = useState({
    series: [{
      name: 'Population',
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
          text: 'Year'
        }
      },
      yaxis: {
        title: {
          text: 'Population'
        }
      },
      title: {
        text: 'Population Over Time'
      }
    }
  });

  useEffect(() => {
    const transformData = () => {
      const data = singleCountryData.data[0].populationCounts.map(item => ({
        x: item.year,
        y: item.value
      }));
      return data;
    };

    const newData = [...chartData.series];
    newData[0].data = transformData();

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