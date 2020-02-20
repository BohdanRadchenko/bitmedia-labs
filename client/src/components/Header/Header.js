import React from "react";
import {NavLink} from "react-router-dom";

import css from './Header.module.css'

const Header = () => {
  return (
  <header className={css.header}>
    <div className={css.container}>
      <nav className={css.nav}>
        <NavLink
          to='/home'
          className={css.logo}>
          AppCo
        </NavLink>
      </nav>
    </div>
  </header>
  )
}

export default Header