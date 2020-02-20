import React from "react";

import css from './Faster.module.css'

const Faster = () => {
  return (
    <section className={css.sections}>
      <div className={css.container}>

        <div className={css.macbook}/>

      <div className={css.desc}>
        <h1 className={css.title}>
          Start Managing your apps business, more faster
        </h1>
        <p className={css.subtitle}>
          Objectively deliver professional value with diverse web-readiness. Collaboratively transition wireless customer service without goal-oriented catalysts for change. Collaboratively.
        </p>
      </div>

        <button className={css.button}>
          Learn more
        </button>
      </div>
    </section>
  )
}

export default Faster