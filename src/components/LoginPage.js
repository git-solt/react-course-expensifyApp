import React from 'react'
import {connect} from 'react-redux'
import {startLogin } from '../actions/auth'

const LoginPage = ({startLogin}) => (
  <div>
    <button onClick={startLogin}>Sign in</button>
    <p>Don't have an account? Sing up <a href="">here</a></p>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()) 
})

export default connect(undefined, mapDispatchToProps)(LoginPage)