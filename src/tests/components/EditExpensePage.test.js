import React from 'react'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'
import {EditExpensePage} from '../../components/EditExpensePage'

let editExpense, history, startRemoveExpense, wrapper

beforeEach(() => {
  editExpense = jest.fn()
  startRemoveExpense = jest.fn()
  history = { push: jest.fn()}
  wrapper = shallow(
    <EditExpensePage 
      editExpense={editExpense} 
      startRemoveExpense={startRemoveExpense}
      history={history}
      expenses={expenses[2]}
    />
  )

})

test('render ExpensePage Correctly', () => {

  expect(wrapper).toMatchSnapshot()
})

test('should handle editExpense spies', () => {
  wrapper.find('ExpenseForm').prop('customSubmit')(expenses[2])
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2])
})

test('should handle startRemoveExpense', () => {
  wrapper.find('button').simulate('click')
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(startRemoveExpense).toHaveBeenLastCalledWith({id: expenses[2].id})
})