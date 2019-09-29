import { addExpense, editExpense, removeExpense } from '../../actions/expenses'
import uuid from 'uuid'


test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' })
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

test('should set up edit expense action object', () => {

  const action = editExpense('editExpenseID', { description: 'shopping' })
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'editExpenseID',
    updates: { description: 'shopping' }
  })
})

test('should set up addExpense object', () => {
  const expenseData = {
    description: 'my description',
    amount: 109500,
    createdAt: 1000,
    note: 'for testing'
  }
  const action = addExpense(expenseData)
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      ...expenseData
    }
  })
})

test('should set up actions object with defaults', () => {
  const action = addExpense()
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  })
})