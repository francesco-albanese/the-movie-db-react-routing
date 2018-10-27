import Routes from '.'
import { renderRoutes } from '#utils'
import { 
  activeLocale, 
  pages, 
  routesConfig 
} from './__fixtures__/routes.fixtures'

describe('Routes', () => {

  it('renders', () => {
    expect(shallow(
      <Routes 
        activeLocale={ activeLocale }
        pages={ pages }
        routesConfig={ routesConfig } />)
    ).toMatchSnapshot()
  })

  describe.only('renderRoutes', () => {
    it('returns empty array if missing configs', () => {
      const result = renderRoutes()
      expect(result).toEqual([])
    })

    it('returns only 404 if page reference does not match with route.reference', () => {
      const newRoutesConfig = routesConfig
        .filter(({ path }) => path === null)
        .concat({ 
          reference: 'fake-reference',
          exact: true,
          component: (props) => props.children
        })

      const result = renderRoutes({ activeLocale, pages, routesConfig: newRoutesConfig })
      expect(result[ 0 ].key).toEqual('four-oh-four')
    })

    it('returns list of routes', () => {
      const result = renderRoutes({ activeLocale, pages, routesConfig })
      expect(result).toHaveLength(4)
      expect(result).toMatchSnapshot()
    })
  })
})