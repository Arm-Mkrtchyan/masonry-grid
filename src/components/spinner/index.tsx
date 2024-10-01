import styled, { keyframes } from "styled-components";
import { CircleProps } from "@/components/spinner/types.ts";
import { colors } from "@/utils/constants/colors.ts";

const spinAnimation = keyframes`
    from { transform: rotate(0deg)}
    to { rotate(360deg) }
`

export const Spinner = () => {
  return (
    <SpinnerWrapper>
      <Circle
        width={'50px'}
        height={'50px'}
        animation={`${spinAnimation} 1s linear infinite`}
        borderTopColor={colors.white}
        borderRightColor={colors.white}
      />
      <Circle
        width={`60%`}
        height={`60%`}
        borderTopColor={colors.brandColor}
        borderRightColor={colors.brandColor}
        animation={`${spinAnimation} 1s linear infinite reverse`}
      />
      <Circle
        width={`20%`}
        height={`20%`}
        borderTopColor={colors.white}
        borderRightColor={colors.white}
        animation={`${spinAnimation} 1s linear infinite`}
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
`

const Circle = styled.span<CircleProps>`
    position: absolute;
    width: ${(props: CircleProps) => props.width};;
    height: ${(props: CircleProps) => props.height};;
    border-radius: 50%;
    animation: ${(props: CircleProps) => props.animation};
    border: 4px solid transparent;
    border-top-color: ${(props: CircleProps) => props.borderTopColor};
    border-right-color: ${(props: CircleProps) => props.borderRightColor};
`