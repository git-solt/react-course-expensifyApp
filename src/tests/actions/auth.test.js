import {login, logout} from '../../actions/auth'

test('should gnerat login action object', () => {
  const uid = '324252wda'
  const result = login(uid) 

  expect(result).toEqual({
    type: 'LOGIN',
    uid
  })
})

test('should generate logout action object', () => {
  const result = logout()
  expect(result).toEqual({type: 'LOGOUT'})
})