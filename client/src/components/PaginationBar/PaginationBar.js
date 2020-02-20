import React from "react";
import {connect} from 'react-redux'
import * as controllerActions from '../../redux/controller/controllerActions'
import * as controllerSelectors from '../../redux/controller/controllerSelectors'
import * as usersSelectors from '../../redux/users/usersSelectors'

import css from './PaginationBar.module.css'

const PaginationBar = ({items, page, handlerPage}) => {

  const arrayPagesCount = [...new Array(items.total_page).keys()]

  const handleButtonClick = (e) => {
    if (e.target.title === 'prev' && page > 1) {
      handlerPage(Number(page - 1))
    }
    if (e.target.title === 'next' && page < items.total_page) {
      handlerPage(Number(page + 1))
    }
  }

  const handlePageClick = e => {
    handlerPage(Number(e.target.textContent))
  }

  return (
      <div className={css.container}>
        <nav className={css.pagNav}>
          <button
            className={`${css.button} ${css.prev}`}
            title='prev'
            disabled={page <= 1}
            onClick={handleButtonClick}>
          </button>

          <ul className={css.list}>
            {arrayPagesCount.map(el => (
              <li
                className = {
                  page === Number(el + 1) ? css.activeItem
                  : css.item
                }
                key={el}
                onClick={handlePageClick}>
                <p className={css.itemTest}>
                  {el + 1}
                </p>
              </li>
            ))}
          </ul>

          <button
            className={`${css.button} ${css.next}`}
            title='next'
            disabled={page >= items.total_page}
            onClick={handleButtonClick}>
          </button>
        </nav>
      </div>
)
}

const mSTP = state => ({
  page: controllerSelectors.page(state),
  items: usersSelectors.items(state)
})

const mDTP = {
  handlerPage: controllerActions.handlerPage
}

export default connect(mSTP, mDTP)(PaginationBar)