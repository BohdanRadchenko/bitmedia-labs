import React from "react";
import ClicksCharts from "./ClicksCharts/ClicksCharts";
import PageCharts from "./PageCharts/PageCharts";

import css from './Charts.module.css';

const Charts = ({user, stats}) => {

  const labels = stats.map(el => el.date)
  const clicks = stats.map(el => el.clicks)
  const pageViews = stats.map(el => el.page_views)

  console.log('labels', labels)
  const dateNow = new Date().toLocaleDateString().split('.').reverse().join('-')
  console.log('dateNow', dateNow)

  const data = {labels, clicks, pageViews}

  return (
    <section className={css.sections}>
      <div className={css.container}>
        {user && (
          <h1 className={css.name}>
            {`${user[0].first_name} ${user[0].last_name}`}
          </h1>
        )}

        <ClicksCharts {...data}/>
        <PageCharts {...data}/>

      </div>
    </section>

  )
}

export default Charts