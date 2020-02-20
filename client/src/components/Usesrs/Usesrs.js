import React from "react";
import {useHistory} from 'react-router-dom'

import css from './Usesrs.module.css'

const Users = ({users}) => {
  const history = useHistory()

  const handleClick = el => {
    history.push(`/users/${el.id}`)
  }

  return (
    <section className={css.section}>
      <div className={css.container}>

        <h1 className={css.title}>
          Users statistics
        </h1>

        <table className={css.table}>
           <thead className={css.tableHead}>
           <tr>
             <th className={css.tableId}>id</th>
             <th className={css.tableFirstName}>First name </th>
             <th className={css.tableLastName}>Last name </th>
             <th className={css.tableEmail}>Email</th>
             <th className={css.tableGender}>Gender</th>
             <th className={css.tableIp}>IP address</th>
             <th className={css.tableClicks}>Total clicks</th>
             <th className={css.tablePage}>Total page views</th>
           </tr>
           </thead>

          <tbody>
          {users.map((el, i) => {
            return (
              <tr
                className={css.tableTr}
                key={el.id}
                  onClick={() => handleClick(el)}>
                <td>{el.id}</td>
                <td>{el.first_name}</td>
                <td>{el.last_name}</td>
                <td>{el.email}</td>
                <td>{el.gender}</td>
                <td>{el.ip_address}</td>
                <td>{el.clicks}</td>
                <td>{el.page_views}</td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Users