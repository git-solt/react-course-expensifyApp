
import database from '../firebase/firebase'

// ADD_EXPENSE 

export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense: {
    ...expense
  }
})

//Redux thunk dispatch a function instead of an object

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const { description = '', note = '', amount = 0, createdAt = 0  } = expenseData
    const expense = {
      description,
      note,
      amount,
      createdAt
    }
    return database.ref('expenses').push(expense)
      .then((data) => {
        dispatch(addExpense({
          id: data.key,
          ...expense
        }))
      })
  }
}


//REMOVE_EXPENSE

export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})


//EDIT_EXPENSE

export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})