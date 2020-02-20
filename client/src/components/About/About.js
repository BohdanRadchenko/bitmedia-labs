import React from "react";
import css from './About.module.css'

const About = () => {
  return (
    <section className={css.container}>
       <div className={css.desc}>
         <h1 className={css.title}>
           Why <span>small business owners
        love</span> AppCo?
         </h1>
         <p className={css.subtitle}>
           Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!
         </p>
         </div>


         <ul className={css.list}>
           <li className={css.item}>
             <div className={css.design}/>
             <h3 className={css.itemTitle}>
               Clean Design
             </h3>
             <p className={css.itemDesc}>
               Increase sales by showing true dynamics of your website.
             </p>
           </li>

           <li className={css.item}>
             <div className={css.data}/>
             <h3 className={css.itemTitle}>
               Secure Data
             </h3>
             <p className={css.itemDesc}>
               Build your online store’s trust using Social Proof & Urgency.
             </p>
           </li>

           <li className={css.item}>
             <div className={css.retina}/>
             <h3 className={css.itemTitle}>
               Retina Ready
             </h3>
             <p className={css.itemDesc}>
               Realize importance of social proof in customer’s purchase decision.
             </p>
           </li>
         </ul>

    </section>
  )
}

export default About