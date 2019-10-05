import React from 'react'
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import { startAddExpense } from '../actions/expenses'


export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense)
    // props.dispatch(addExpense(expense))
    this.props.history.push('/')
  }
  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm customSubmit={this.onSubmit} />
      </div>
    )
  }
}


// const AddExpensePage = (props) => (
//   <div>
//     <h1>Add Expense</h1>
//     <ExpenseForm customSubmit={(expense) => {
//       props.onSubmit(expense)
//       // props.dispatch(addExpense(expense))
//       props.history.push('/')
//     }} />
//   </div>
// )

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
})



export default connect(undefined, mapDispatchToProps)(AddExpensePage)