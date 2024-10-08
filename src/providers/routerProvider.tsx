import { lazy } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  type RouteProps,
  RouterProvider as NativeRouterProvider
} from 'react-router-dom'
// Internals
import { Layout, RootErrorBoundary } from '@/components'
import ROUTE_PATHS from '@/utils/constants/routes'
import App from '@/App'

const Home = lazy(async () => await import('@/pages/home'))
const ImagePreview = lazy(async () => await import('@/pages/imagePreview'))

type IRoutes = RouteProps[]

export const routes: IRoutes = [
  {
    path: ROUTE_PATHS.HOME,
    element: <Home />
  },
  {
    path: `${ROUTE_PATHS.PREVIEW}/:imageId`,
    element: <ImagePreview />
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
