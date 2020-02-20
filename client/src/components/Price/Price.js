import React from "react";
import {NavLink} from "react-router-dom";

import css from './Price.module.css'

const Price = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <div className={css.desc}>
          <h1 className={css.title}>
            <span>Afforadble Pricing and Packages </span>
            choose your best one
          </h1>
          <p className={css.subtitle}>
            Monotonectally grow strategic process improvements vis-a-vis integrated resources.
          </p>
        </div>

        <ul className={css.priceList}>

          <li className={css.priceItem}>
            <h3 className={css.itemTitle}>
              Basic
            </h3>
            <div className={css.basic} />
            <p className={css.cost}>
              <span>&#36;</span>26
            </p>
            <p className={css.text}>
              Push Notifications
              Data Transfer
              SQL Database
              Search & SEO Analytics
              24/7 Phone Support
              2 months technical support
              2+ profitable keyword
            </p>
            <button className={css.button}>
              Purchase now
            </button>
          </li>

          <li className={css.priceItem}>
            <h3 className={css.itemTitle}>
              Standart
            </h3>
            <div className={css.standart} />
            <p className={css.cost}>
              <span>&#36;</span>149
            </p>
            <p className={css.text}>
              Push Notifications
              Data Transfer
              SQL Database
              Search & SEO Analytics
              24/7 Phone Support
              2 months technical support
              2+ profitable keyword
            </p>
            <button className={css.button}>
              Purchase now
            </button>
          </li>

          <li className={css.priceItem}>
            <h3 className={css.itemTitle}>
              Unlimited
            </h3>
            <div className={css.unlimited} />
            <p className={css.cost}>
              <span>&#36;</span>309
            </p>
            <p className={css.text}>
              Push Notifications
              Data Transfer
              SQL Database
              Search & SEO Analytics
              24/7 Phone Support
              2 months technical support
              2+ profitable keyword
            </p>
            <button className={css.button}>
              Purchase now
            </button>
          </li>

        </ul>

       <div className={css.contact}>
         <p className={css.contactText}>
           If you need custom services or Need more?
         </p>
         <NavLink
           to='/home'
           className={css.contactLink}>
            Contact us
         </NavLink>
       </div>
      </div>
    </section>
  )
}

export default Price