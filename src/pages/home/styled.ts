import styled from "styled-components";

export const ImagesContainer = styled.div`
    column-count: 4;
    column-gap: 10px;
    padding: 0 2rem;
    
    @media (max-width: 768px) {
        column-count: 3;
    }
    @media (max-width: 640px) {
        column-count: 2;
    }
`