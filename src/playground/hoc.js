// Higher Order Component

import React from 'react'
import ReactDOM from 'react-dom'


const Info = (props) => (
  <div>
    <h1>Info component</h1>
    <p>Here are some details: {props.info}</p>
  </div>
)

const withAdminWarning = (WrappedComponent) => (props) => (
    <div>
      {props.isAdmin && <p>The information under is privliged. Please don't share</p>}
      <WrappedComponent {...props}/>
    </div>

  )

const requireAuthentication = (WrappedComponent) => (props) => (
  <div>
    {props.isAuthenticated ? <WrappedComponent {...props}/>: <p>Please log in to view the info</p>}
  </div>
)


const AdminComp = withAdminWarning(Info)
const AuthenticatedHoc = requireAuthentication(Info)

// ReactDOM.render(<AdminComp isAdmin={true} info="The details from props" />, document.querySelector('#app'))
ReactDOM.render(<AuthenticatedHoc isAuthenticated={true} info="Here is the new info"/>, document.querySelector('#app'))