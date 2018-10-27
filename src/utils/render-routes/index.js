import React from 'react'
import { Route } from 'react-router-dom'

/**
 * Renders a list of routes which changes depending
 * on the current active locale
 * 
 * @param {Object} containing activeLocale, pages and routesConfig
 * @returns {Array} or formatted <Route /> components
 */

export const renderRoutes = ({ activeLocale, pages, routesConfig }) => {
  return routesConfig.map(route => {
    if (route.path === null) {
      return (
        <Route
          key={ route.reference }
          exact={ route.exact }
          component={ route.component }
          path={ route.path } />
      )
    }

    const page = pages.find(page => page.reference === route.reference)

    if (!route.path && page) {
      return (
        <Route
          key={ route.reference }
          exact={ route.exact }
          component={ route.component }
          path={ page.paths[ activeLocale.code ] } />
      )
    }

    return null
  })
}