import {Suspense} from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../header'
import {Loader} from '@/components/loader'
import {Container} from "@/components/layout/styled.ts";
import {useImages} from "@/providers/imagesProvider.tsx";

function Layout() {
  const {loading} = useImages()

  return (
    <Container>
      <Header/>
      {loading ? (
        <Loader/>
      ) : (
        <Suspense fallback={<Loader/>}>
          <Outlet/>
        </Suspense>
      )}
      {/*<Footer/>*/}
    </Container>
  )
}


export default Layout
