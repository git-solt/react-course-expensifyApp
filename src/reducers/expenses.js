// Expenses reducer

const expensesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state, action.expense
      ]
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id)  // un-destructured: return state.filter((cur) => cur.id !== action.id)
    case 'EDIT_EXPENSE':
      return state.map((cur) => {
        if (cur.id === action.id) {
          return {
            ...cur,
            ...action.updates
          }
        } else {
          return cur
        }
      })
    case 'SET_EXPENSES':
      return action.expenses
    default:
      return state
  }
}

export default expensesReducer