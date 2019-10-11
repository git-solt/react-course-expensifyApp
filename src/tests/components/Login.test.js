import React from 'react'
import LoginPage from '../../components/LoginPage'
import { shallow } from 'enzyme'

test('should render login page', () => {
  const component = shallow(<LoginPage />)

  expect(component).toMatchSnapshot()
})

test('should call startlogin', () => {
  const startLogin = jest.fn()
  const wrapper = shallow(<LoginPage startLogin={startLogin}/>)
  wrapper.find('button').simulate('click')
  expect(startLogin).toHaveBeenCalled()
})