import React from 'react'
import { startEditExpense, startRemoveExpense } from '../actions/expenses'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'

export class startEditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expenses.id, expense)
    this.props.history.push('/')
  }

  onRemove = () => {
    this.props.startRemoveExpense({ id: this.props.expenses.id })
    this.props.history.push('/')

  }

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            customSubmit={this.onSubmit}
            expense={this.props.expenses}
          />
          <button className="button button--secondary" onClick={this.onRemove}>Remove Expense</button>
        </div>
      </div>
    )
  }
}

// const startEditExpensePage = (props) => {
//   return (
//     <div>
//       <ExpenseForm
//         customSubmit={(expense) => {
//           props.dispatch(startEditExpense(props.expenses.id, expense))
//           props.history.push('/')
//         }}
//         expense={props.expenses}
//       />
//       <button onClick={() => {
//         props.dispatch(startRemoveExpense({ id: props.expenses.id }))
//         props.history.push('/')

//       }}>Remove</button>
//     </div>
//   )
// }
const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
})

const mapStateToProps = (state, props) => ({
  expenses: state.expenses.find(({ id }) => id === props.match.params.id)
})
export default connect(mapStateToProps, mapDispatchToProps)(startEditExpensePage)