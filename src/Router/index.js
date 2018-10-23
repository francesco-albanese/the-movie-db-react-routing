import React from 'react'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

export default class TmdbRouter extends React.Component {

  render() {
    return (
      <Router history={ history }>
        { this.props.children }
      </Router>
    )
  }
}
