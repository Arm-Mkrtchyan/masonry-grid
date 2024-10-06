import { useNavigate } from 'react-router-dom'
// Internal
import ROUTE_PATHS from '@/utils/constants/routes'
import { colors } from "@/utils/constants/colors.ts";
import { Button, Container, Text } from "./style.ts";

const RootErrorBoundary = () => {
  const navigate = useNavigate()

  const goToHome = () => {
    navigate(ROUTE_PATHS.HOME)
  }

  return (
    <Container>
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
    </Container>
  )
}

export default RootErrorBoundary
