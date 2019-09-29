import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import {connect} from 'react-redux'

const ExpenseDashboardPage = (props) => {

  return (
    <div>
      <ExpenseListFilters />
      <ExpenseList />
    </div>
  )
}

export default ExpenseDashboardPage