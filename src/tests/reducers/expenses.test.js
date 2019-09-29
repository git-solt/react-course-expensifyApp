import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'
import moment from 'moment'



test('testing default state', () => {
  const state = expensesReducer(undefined, {type: '@@INIT'})
  expect(state).toEqual([])
})

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '1'
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[1], expenses[2]])
}) 

test('see if everything is there if a non valid id is passed', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: 'a4'
  }

  const state = expensesReducer(expenses, action)

  expect(state).toEqual(expenses)
}) 

test('should add expense', () => {
  const expense =  {
    id: expect.any(String),
    description: 'test-expense',
    amount: 34,
    note: '',
    createdAt: moment(0).add(30, 'days').valueOf()
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense: expense
  }

  const state = expensesReducer(expenses, action)
  expect(state).toEqual([...expenses, expense])
})

test('should edit and expense', () => {
  const expense = {
    description: 'Gas bill'
  }

  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: expense
  }

  const state = expensesReducer(expenses, action)
  expect(state[0].description).toBe(expense.description)
})

test('should not edit expense if expense not found', () => {
  const expense = {
    description: 'Better not be this'
  }

  const action = {
    type: 'EDIT_EXPENSE',
    id :'-1a',
    updates: expense 
  }

  const state = expensesReducer(expenses, action)

  expect(state).toEqual(expenses)
})