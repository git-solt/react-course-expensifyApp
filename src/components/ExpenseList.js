import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectedExpenses from '../selectors/expenses'



export const ExpenseList = (props) => (
  <div>
    {
      props.expenses.length === 0 ? 
      <p>No expenses listed</p>
    : props.expenses.map((cur) =>
        <ExpenseListItem
          key={cur.id}
          {...cur}

        />)
    }
    {}
  </div>
)

const mapStateToProps = (state) => ({
  expenses: selectedExpenses(state.expenses, state.filters)
})

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList)

export default ConnectedExpenseList