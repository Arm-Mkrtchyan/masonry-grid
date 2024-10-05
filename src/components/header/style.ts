import styled from "styled-components";
import {colors} from "@/utils/constants/colors.ts";

export const StyledHeader = styled.header`
    display: flex;
    height: 4rem;
    background-color: ${colors.brandColor};
`
export const ImagePreviewDetails = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`
export const PhotographerName = styled.h2`
    margin: 0 ;
    color: ${ colors.white };
    font-family: cursive;
`
export const PhotoDescription = styled.p`
    margin: 0 ;
    color: ${ colors.textSecondary };
    font-family: cursive;
`
export const BackButton = styled.div`
    display: flex;
    align-items: center;
    padding: .4rem;
    cursor: pointer;
    
    & > svg {
        width: 2.2rem;
        height: 2.2rem;
    }
`
export const Info = styled.div`
    text-align: left;
    
    & > * {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: calc(100vw - 5rem);
    }
`
export const SearchComponent = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    padding: 0 1rem;
`
export const SearchInput = styled.input`
    height: 2rem;
    width: 18rem;
    border-radius: 0.2rem;
    border: none;
    outline: none;
    background-color: #ffe0ff;
    padding: 0 0.6rem;
`