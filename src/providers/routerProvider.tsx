import { lazy } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  type RouteProps,
  RouterProvider as NativeRouterProvider
} from 'react-router-dom'
import Layout from '@/components/layout'
import ROUTE_PATHS from '@/utils/constants/routes'
import { RootErrorBoundary } from '@/components/rootErrorBoundary'
import App from '@/App'

const Dashboard = lazy(async () => await import('../pages/home'))

type IRoutes = RouteProps[]

export const routes: IRoutes = [
  {
    path: ROUTE_PATHS.HOME,
    element: <Dashboard />
  }
]

const createRoutes = () =>
  createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />} errorElement={<RootErrorBoundary />}>
        <Route path="/" element={<Layout />} errorElement={null}>
          {routes
            .map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
        </Route>
        <Route path="*" element={<RootErrorBoundary />} />
      </Route>
    )
  )
export const RouterProvider = () => {
  return <NativeRouterProvider router={createRoutes()} />
}
