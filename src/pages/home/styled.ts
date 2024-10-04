import styled from "styled-components";

export const ImagesContainer = styled.div`
    max-width: 1400px;
    min-height: 200px;
    margin: 2rem auto ;
    columns: 5;
    gap: 1rem;
    padding: 0 3rem;

    @media (max-width: 1024px) {
        column-count: 4;
        padding: 0 2rem;
    }
    
    @media (max-width: 768px) {
        column-count: 3;
        padding: 0 2rem;
    }

    @media (max-width: 640px) {
        column-count: 2;
    }
`