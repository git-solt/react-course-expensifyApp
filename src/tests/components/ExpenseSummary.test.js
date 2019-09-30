import React from 'react'
import { shallow } from 'enzyme'

import { ExpenseSummary } from '../../components/ExpenseSummary'


test('should correctly render ExpenseSumary with 1 expense ', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={235}/>)
  expect(wrapper).toMatchSnapshot()
})

test('should correctly render ExpenseSumary with multiple expense ', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={23} expensesTotal={21244135}/>)
  expect(wrapper).toMatchSnapshot()
}) 