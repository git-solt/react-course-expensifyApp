import { createStore } from 'redux'


//Action Generators - functions that return action objectsy 0 

const incrementCount = ({incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy
})

const decrementCount = ({decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const resetCount = () => ({
  type: 'RESET'
})

const set = ({count} = {}) => ({
  type: 'SET',
  count
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


//Reducers

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':

      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT':

      return {
        count: state.count - action.decrementBy
      }
    case 'SET' :
      return {
        count: action.count
      }
    case 'RESET':
      return {
        count: 0
      }
    default:
      return state
  }
}

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() =>{
  console.log('From subscription >', store.getState())
})

const IncrementCount = () => ({
  type: 'INCREMENT'
})




store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
})

store.dispatch(incrementCount())




store.dispatch(resetCount())

store.dispatch(decrementCount())

store.dispatch(decrementCount({decrementBy: 10}))
  


store.dispatch(set({count:101}))





