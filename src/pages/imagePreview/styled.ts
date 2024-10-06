import styled from "styled-components";

interface PreviewImageProps {
  $background?: string
  $loading: boolean
}

export const PreviewImage = styled.div<PreviewImageProps>`
    position: relative;
    height: calc(100vh - 6rem);
    background-color: ${(props: PreviewImageProps) => props.$background};
    display: flex;
    justify-content: center;
    padding-top: 2rem;

    & img {
        max-width: calc(100% - 4rem);
        max-height: calc(100% - 4rem);
        border-radius: 0.4rem;
        object-fit: contain;
        object-position: top;
        opacity: ${(props: PreviewImageProps) => props.$loading ? '0' : '1'};
        transition: opacity .2s;
    }
`