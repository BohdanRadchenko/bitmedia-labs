import React from "react";
import {NavLink} from "react-router-dom";

import css from './MainBunner.module.css'

const MainBunner = () => {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <header className={css.header}>
          <NavLink
            to='/home'
            className={css.logo}>
            AppCo
          </NavLink>
        </header>

        <div className={css.desc}>
          <h1 className={css.title}>
            <span>Brainstorming</span> for desired perfect Usability
          </h1>
          <p className={css.subtitle}>
            Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!
          </p>
        </div>

        <NavLink
          to='/users'
          className={css.button}>
          View Stats
        </NavLink>

        <div className={css.phone}>

        </div>
      </div>
    </main>
  )
}

export default MainBunner

