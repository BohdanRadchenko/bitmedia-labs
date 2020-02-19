import React, {useState} from "react";
import {connect} from 'react-redux'
import * as controllerActions from '../../redux/controller/controllerActions'
import * as controllerSelectors from '../../redux/controller/controllerSelectors'
import * as usersSelectors from '../../redux/users/usersSelectors'

const PaginationBar = ({items, page, handlerPage }) => {
  console.log('items', items)
  const handleButtonClick = (e) => {
    console.log(e)
  }

  const handlePageClick = e => {
    handlerPage(Number(e.target.textContent))
  }

  return (
    <div>
      <div >
        <button onClick={handleButtonClick}>
          prev
        </button>
        
        {items.users && items.users.map((el, i) => (
          <ul>
            <li key={el.id} onClick={e => handlePageClick(e)}>
              {i+1}
            </li>
          </ul>
        ))}
        
        <button onClick={handleButtonClick}>
          next
        </button>
      </div>
    </div>)
}

const mSTP = state => ({
  page: controllerSelectors.page(state),
  items : usersSelectors.items(state)
})

const mDTP = {
  handlerPage: controllerActions.handlerPage
}

export default connect(mSTP, mDTP)(PaginationBar)