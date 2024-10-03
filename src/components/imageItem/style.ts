import styled from "styled-components";

export const Figure = styled.figure`
    margin: 0 0 1rem;
    display: grid;
    grid-template-rows: 1fr auto;
    break-inside: avoid;
  & img {
      width: 100%;
      max-height: 100%;
      display: block;
      grid-row: 1 / -1;
      grid-column: 1;
  }
`