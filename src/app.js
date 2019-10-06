import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { startSetExpenses } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import './styles/styles.scss'
import 'normalize.css/normalize.css'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import './firebase/firebase'






const store = configureStore()

// store.subscribe(() => {
//   const state = store.getState()
//   console.log(getVisibleExpenses(state.expenses, state.filters))
// })



// store.dispatch(addExpense({ description: 'Gas Bill', createdAt: 1000 }))

// store.dispatch(addExpense({description: 'Rent', amount: 109500}))



const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(<p>Loading...</p>, document.querySelector('#app'))
// ReactDOM.render(jsx, document.querySelector('#app'))


store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.querySelector('#app'))
})


