import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'


// ADD_EXPENSE 

const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
})




//REMOVE_EXPENSE

const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})


//EDIT_EXPENSE

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})


//SET_TEXT

const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})

//SORT_BY_DATE

const sortByDate = () => ({
  type: 'SORT_BY_DATE'

})

const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
})

const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
})

const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
})


//Defining Reducers

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
    default:
      return state
  }
}

// Filters reducer 

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
    default:
      return state
  }
}


const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((cur) => {
    const startDateMatch = typeof startDate !== 'number' || cur.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || cur.createdAt <= endDate;
    const textMatch = typeof text !== 'string' || cur.description.toLowerCase().includes(text.toLowerCase())

    return startDateMatch && endDateMatch && textMatch
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1

    } else {
      return a.amount > b.amount ? -1 : 1
     }
  })
}



// Creating the store

const store = createStore(combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer

}))



store.subscribe(() => {
  const state = store.getState()
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses)

})



const expense1 = store.dispatch(addExpense({ description: 'rent', amount: 400, createdAt: -21000 }))
const expense2 = store.dispatch(addExpense({ description: 'coffee', amount: 3300, createdAt: -1000 }))



// store.dispatch(removeExpense({id: expense1.id}))

// store.dispatch(editExpense(expense2.id, {description: 'Beer', amount: 1000}))


// store.dispatch(setTextFilter('coFF'))

// store.dispatch(setTextFilter())

// store.dispatch(sortByDate())

store.dispatch(sortByAmount())
store.dispatch(sortByDate())
// store.dispatch(sortByAmount())



// store.dispatch(setStartDate(-1000))
// store.dispatch(setStartDate())

// store.dispatch(setEndDate(0))



const demoState = {
  expenses: [{
    id: '123-sdf-456-tye',
    description: 'January Rent',
    note: 'This was the final payment for that adress',
    amount: 54000,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', /// date or amount
    startDate: undefined,
    endDate: undefined
  }
}

