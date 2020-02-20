import React from "react";
import {NavLink} from "react-router-dom";

import css from './NavBar.module.css'

const NavBar = ({user}) => {

  return (
    <section className={css.navigations}>
      <div className={css.container}>
        <div className={css.nav}>
          <NavLink
            className={`${css.navLink} ${css.main}`}
            to='/home'>
            Main page
          </NavLink>

            <NavLink
              className = {user ? `${css.navLink} ${css.main}`
                : `${css.navLink} ${css.stats}`}
              to='/users'>
              User satistics
            </NavLink>

          {user && (
            <>
            {user.map(el => (
                <NavLink
                  key={el.id}
                  className={`${css.navLink} ${css.name}`}
                  to={`/users/${el.id}`} >
                  <p>
                    {`${el.first_name} ${el.last_name}`}
                  </p>
                </NavLink>
              ))}
              </>
          )}

        </div>
      </div>
    </section>
  )
}

export default NavBar