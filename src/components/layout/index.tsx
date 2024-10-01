import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header'
import Footer from "..//footer";
import { RouteLoading } from '@/components/routeLoading'

const Layout = () =>  {
  const loading = false

  return (
    <>
      <Header/>
      { loading ? (
        <RouteLoading/>
      ) : (
        <Suspense fallback={ <RouteLoading/> }>
          <Outlet/>
        </Suspense>
      ) }
      <Footer/>
    </>
  )
}

export default Layout
