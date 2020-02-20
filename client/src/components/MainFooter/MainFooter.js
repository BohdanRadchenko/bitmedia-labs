import React from "react";

import css from './MainFooter.module.css'
import {NavLink} from "react-router-dom";

const MainFooter = () => {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <NavLink
          to='/home'
          className={css.logo}>
          AppCo
        </NavLink>
        <p>
          All rights reserved by ThemeTags
        </p>
        <p>
          Copyrights © 2019.
        </p>
      </div>
      
      <form className={css.form}>
        <input
          placeholder='Enter your email'
          className={css.input}
          type="email"/>
        <button className={css.subscribe}>
          Subscribe
        </button>
        
      </form>
    </footer>
  )
}

export default MainFooter