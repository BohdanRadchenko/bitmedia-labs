import React from "react";
import ClicksCharts from "./ClicksCharts/ClicksCharts";
import PageCharts from "./PageCharts/PageCharts";

import css from './Charts.module.css';

const Charts = ({user}) => {
  return (
    <section className={css.sections}>
      <div className={css.container}>
        {user && (
          <h1 className={css.name}>
            {`${user[0].first_name} ${user[0].last_name}`}
          </h1>
        )}

        <ClicksCharts/>
        <PageCharts/>

      </div>
    </section>

  )
}

export default Charts