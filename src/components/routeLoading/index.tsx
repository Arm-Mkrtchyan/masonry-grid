import { Spinner } from '@/components/spinner'
import styled from "styled-components";

export const RouteLoading = () => (
  <RouterLoading>
    <Spinner/>
  </RouterLoading>
)

const RouterLoading = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99;
    backdrop-filter: blur(2px);
`