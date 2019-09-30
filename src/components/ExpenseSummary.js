import React from 'react'
import numeral from 'numeral'
import expensesTotal from '../selectors/expenses-total'
import { connect } from 'react-redux'
import selectExpenses from '../selectors/expenses'



const ExpenseSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00')
  return (
    <div>
      <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
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