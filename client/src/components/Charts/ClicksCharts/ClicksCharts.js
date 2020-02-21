import React from "react";
import { Line } from 'react-chartjs-2';

import css from './ClicksCharts.module.css'

const ClicksCharts = ({labels, clicks}) => {

  const options = {
    line: {
      borderColor: '#170357',
    },
    data: {
      // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      labels: labels,
      datasets: [{
        label: 'Clicks',
        // data: [12, 19, 3, 5, 2, 3],
        data: clicks,
        backgroundColor: [
          'transparent'
        ],
        borderColor: [
          '#3A80BA'
          // 'rgba(255, 99, 132, 1)',
          // 'rgba(54, 162, 235, 1)',
          // 'rgba(255, 206, 86, 1)',
          // 'rgba(75, 192, 192, 1)',
          // 'rgba(153, 102, 255, 1)',
          // 'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 4,
        borderRadius: '50%'
      }]
    },
    // options: {
    //   scales: {
    //     yAxes: [{
    //       ticks: {
    //         beginAtZero: true
    //       }
    //     }]
    //   }
    // }
    options: {
      scales: {
        yAxes: [{
          stacked: true
        }]
      }
    }
  }



  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Clicks
      </h1>
      {/*<Line {...options} />*/}
      <Line data={options.data} />
    </div>
  )
}

export default ClicksCharts

