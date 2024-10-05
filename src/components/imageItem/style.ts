import styled, { keyframes } from "styled-components";
import { colors } from "@/utils/constants/colors.ts";

export const backgroundAnimation = keyframes`
    from {
        background-color: ${colors.brandColorTransparent};
    }
    to {
        background-color: ${colors.redTransparent};
    }
`

export const Figure = styled.figure`
    position: relative;
    display: flex;
    margin: 0 0 1rem;
    cursor: pointer;
    border-radius: 0.4rem;
    animation: ${ backgroundAnimation } 1s linear infinite;
    background-color: ${colors.brandColor};

    & img {
        width: 100%;
        height: 100%;
        max-height: 100%;
        border-radius: 0.4rem;
    }
`