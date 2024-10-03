import styled from "styled-components";

export const PreviewImage = styled.div`
    position: relative;
    height: calc(100vh - 4rem);
    background-color: rgba(255, 190, 245, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;

    & img {
        max-width: calc(100% - 4rem);
        max-height: calc(100% - 4rem);
        border-radius: 0.4rem;
    }
`
export const PreviewHeader = styled.div`
    position: absolute;
    top: 0;
    left: 0;
`