import { isEmpty } from 'lodash-es'
import React from 'react'
import { Switch } from 'react-router-dom'

import { renderRoutes } from '#utils'

export default class Routes extends React.Component {

  state = {
    routes: [],
    activeLocale: {}
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      activeLocale,
      pages,
      routesConfig
    } = nextProps

    if (activeLocale.code !== prevState.activeLocale.code) {
      return {
        activeLocale,
        routes: renderRoutes({
          activeLocale,
          pages,
          routesConfig
        })
      }
    }

    return null
  }

  render() {
    const { routes } = this.state

    return !isEmpty(routes)
      ? <Switch>{ routes }</Switch>
      : null
  }
}