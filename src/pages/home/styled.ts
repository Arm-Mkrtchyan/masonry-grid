import styled from "styled-components";
import {colors} from "@/utils/constants/colors.ts";


export const ImagesContainer = styled.div`
    max-width: 1400px;
    min-height: calc(100vh - 7rem);
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
export const EmptyPage = styled.div`
    width: 100%;
    padding: 2rem;
    font-family: monospace;
    font-size: 1.4rem;
    text-align: center;
    color: ${colors.textPrimary};
`