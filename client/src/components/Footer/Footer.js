import React from "react";
import {NavLink} from "react-router-dom";

import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <NavLink
          to='/home'
          className={css.logo}>
          AppCo
        </NavLink>
        <p className={css.title}>
          All rights reserved by ThemeTags
        </p>
        <p className={css.copy}>
          Copyrights © 2019.
        </p>
      </div>
    </footer>
  )
}

export default Footer