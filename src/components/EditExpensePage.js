import React from 'react'
import { editExpense, removeExpense } from '../actions/expenses'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expenses.id, expense)
    this.props.history.push('/')
  }

  onRemove = () => {
    this.props.removeExpense({ id: this.props.expenses.id })
    this.props.history.push('/')

  }

  render() {
    return (
      <div>
        <ExpenseForm
          customSubmit={this.onSubmit}
          expense={this.props.expenses}
        />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    )
  }
}

// const EditExpensePage = (props) => {
//   return (
//     <div>
//       <ExpenseForm
//         customSubmit={(expense) => {
//           props.dispatch(editExpense(props.expenses.id, expense))
//           props.history.push('/')
//         }}
//         expense={props.expenses}
//       />
//       <button onClick={() => {
//         props.dispatch(removeExpense({ id: props.expenses.id }))
//         props.history.push('/')

//       }}>Remove</button>
//     </div>
//   )
// }
const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: (data) => dispatch(removeExpense(data))
})

const mapStateToProps = (state, props) => ({
  expenses: state.expenses.find(({ id }) => id === props.match.params.id)
})
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)