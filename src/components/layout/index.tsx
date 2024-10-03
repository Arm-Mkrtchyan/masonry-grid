import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header'
import Footer from "..//footer";
import { RouteLoading } from '@/components/routeLoading'
import { Container } from "@/components/layout/styled.ts";
import { useImages } from "@/providers/imagesProvider.tsx";

function Layout(){
  const { loading } = useImages()

  return (
    <Container>
      <Header/>
      { loading ? (
        <RouteLoading/>
      ) : (
       <div>
         <Suspense fallback={ <RouteLoading/> }>
           <Outlet/>
         </Suspense>
       </div>
      ) }
      <Footer/>
    </Container>
  )
}


export default Layout
