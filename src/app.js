import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter, { history } from './routers/AppRouter'
import configureStore from './store/configureStore'
import { startSetExpenses } from './actions/expenses'
import { login, logout } from './actions/auth'
import './styles/styles.scss'
import 'normalize.css/normalize.css'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import LoadingPage from './components/LoadingPage'
import { firebase } from './firebase/firebase'






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

let hasRendered = false
const renderApp = () => {
  if (hasRendered === false) {
    ReactDOM.render(jsx, document.querySelector('#app'))
    hasRendered = true
  }
}

ReactDOM.render(<LoadingPage />, document.querySelector('#app'))
// ReactDOM.render(jsx, document.querySelector('#app'))





firebase.auth().onAuthStateChanged((user) => {
  if (user) {
      console.log('user:', user.uid)
      store.dispatch(login(user.uid))
      store.dispatch(startSetExpenses()).then(() => {
        renderApp()
      })
      if(history.location.pathname === '/') {
        history.push('/dashboard')
      }
    

  } else {
    store.dispatch(logout())
    renderApp()
    history.push('/')
  }
})