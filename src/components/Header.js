import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'


export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <h1 className="header__title">Expensify</h1>
        <button className="button button--link" onClick={startLogout}>Logout</button>
      </div>
      <div className="navigation__content">
        <NavLink to="/dashboard" activeClassName="is-active" className="button__navigation">Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active" className="button__navigation">Add Expense</NavLink>
      </div>
    </div>
  </header>
)



const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header)