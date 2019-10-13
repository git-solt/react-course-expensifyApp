import React from 'react'
import numeral from 'numeral'
import expensesTotal from '../selectors/expenses-total'
import { connect } from 'react-redux'
import selectExpenses from '../selectors/expenses'



export const ExpenseSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00')
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></h1>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters)

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: expensesTotal(visibleExpenses)
  }

}

export default connect(mapStateToProps)(ExpenseSummary)