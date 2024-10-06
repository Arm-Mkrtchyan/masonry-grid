import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
// Internal
import { useImages } from "@/providers/imagesProvider.tsx";
import { Header, Loader } from '@/components'
import { Container } from "./styled.ts";

function Layout() {
  const { loading } = useImages()

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
