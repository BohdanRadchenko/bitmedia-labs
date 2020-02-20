import React from "react";

import css from './TestChart.module.css'

const TestChart = () => {
  return (
    <div className={css.container}>
      <svg width='500' height='500'>
        <rect x='0' y='450' fill='#8ab200'  height='50' width='100'> </rect>
        <rect x='100' y='350' fill='#8ab200'  height='150' width='100'> </rect>
        <rect x='200' y='0' fill='#8ab200'  height='500' width='100'> </rect>
        <rect x='300' y='300' fill='#8ab200'  height='200' width='100'> </rect>
      </svg>
    </div>
  )
}

export default TestChart