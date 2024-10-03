import styled, {css, keyframes} from "styled-components";
import {CircleProps} from "@/components/spinner/types.ts";
import {colors} from "@/utils/constants/colors.ts";


export const Spinner = () => {
  return (
    <SpinnerWrapper>
      <Circle
        width={ '50px' }
        height={ '50px' }
        animation=''
        border_top_color={ colors.brandColor }
        border_right_color={ colors.brandColor }
      />
      <Circle
        width={ `60%` }
        height={ `60%` }
        border_top_color={ colors.white }
        border_right_color={ colors.white }
        animation='reverse'
      />
      <Circle
        width={ `20%` }
        height={ `20%` }
        border_top_color={ colors.brandColor }
        border_right_color={ colors.brandColor }
        animation=''
      />
    </SpinnerWrapper>
  )
}

const SpinnerWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 50px;
    height: 50px;
`;

const spinAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`
const animation = props =>
  css<CircleProps>`
      ${ spinAnimation } 1s linear infinite ${ props.animation };
  `
const Circle = styled.span<CircleProps>`
    position: absolute;
    width: ${ (props: CircleProps) => props.width };;
    height: ${ (props: CircleProps) => props.height };;
    border-radius: 50%;
    animation: ${ animation };
    border: 4px solid transparent;
    border-top-color: ${ (props: CircleProps) => props.border_top_color };
    border-right-color: ${ (props: CircleProps) => props.border_right_color };
`;