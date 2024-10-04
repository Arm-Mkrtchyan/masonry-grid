import styled, {css, keyframes} from "styled-components";

interface CircleProps{
  width: string;
  height: string;
  $animation: string
  $border_top_color: string
  $border_right_color: string
}

export const SpinnerWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 50px;
    height: 50px;
`;

export const spinAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`
const animation = (props: CircleProps) =>
  css<CircleProps>`
      ${ spinAnimation } 1s linear infinite ${ props.$animation };
  `
export const Circle = styled.span<CircleProps>`
    position: absolute;
    width: ${ (props: CircleProps) => props.width };;
    height: ${ (props: CircleProps) => props.height };;
    border-radius: 50%;
    animation: ${ animation };
    border: 4px solid transparent;
    border-top-color: ${ (props: CircleProps) => props.$border_top_color };
    border-right-color: ${ (props: CircleProps) => props.$border_right_color };
`;