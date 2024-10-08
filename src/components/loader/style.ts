import styled from "styled-components";

export const LoaderWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99;
    backdrop-filter: blur(2px);
    background-color: rgba(0,0,0,.1);
`