import authReducer from '../../auth/reducers/auth'


test('should set uid for login', () => {
  const action = {
    type: 'LOGIN',
    uid: 'abc123'
  }

  const state = authReducer({}, action)
  expect(state).toEqual({uid: action.uid })
})


test('should clear uid on logout', () => {
  const action = {
    type: 'LOGOUT'
  }
  const state = authReducer({uid: 'dadas3'}, action)
  expect(state).toEqual({ })
})

