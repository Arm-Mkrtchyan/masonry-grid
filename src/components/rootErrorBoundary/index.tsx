import { useNavigate } from 'react-router-dom'
import styled from "styled-components";

// Internal
import ROUTE_PATHS from '@/utils/constants/routes'
import { TextProps } from "@/components/rootErrorBoundary/types.ts";
import { colors } from "@/utils/constants/colors.ts";

export const RootErrorBoundary = () => {
  const navigate = useNavigate()

  const goToHome = () => {
    navigate(ROUTE_PATHS.HOME)
  }

  return (
    <Flex>
      <Text>
        Something went wrong!
      </Text>
      <Text
        fontSize='1.4rem'
        color={ colors.textSecondary }
      >
        There was a problem processing this request. <br/>
        Please try again later or go back to the main page.
      </Text>
      <Button
        onClick={ goToHome }
      >
        Go to Home
      </Button>
    </Flex>
  )
}

const Flex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vh;
    height: 100vh;
    padding: 1.2rem
`

const Text = styled.p<TextProps>`
    margin-top: 1.6rem;
    font-size: ${ (props: TextProps) => props.fontSize ?? '1.6rem' };
    color: ${ (props: TextProps) => props.color ?? colors.textPrimary };
    line-height: 2rem;
    text-align: center;
    font-weight: 600;
    padding: 1.2rem 0;
`


const Button = styled.span`
    margin-top: 1.6rem;
    font-size: ${ (props: TextProps) => props.fontSize ?? '1.6rem' };
    color: ${ (props: TextProps) => props.color ?? colors.textPrimary };
    line-height: 2rem;
    text-align: center;
    font-weight: 600;
    padding: 1.2rem 0;
`
