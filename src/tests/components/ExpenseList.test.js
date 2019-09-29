import {ExpenseList} from '../../components/ExpenseList'
import React from 'react'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'

test('should render expenselist with expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={expenses}/>)
  expect(wrapper).toMatchSnapshot()
}) 

test('should render expense list with empty array', () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />)
  expect(wrapper).toMatchSnapshot()
})