import { colors } from "@/utils/constants/colors.ts";
import { Circle, SpinnerWrapper } from "./styles.ts";

const Spinner = () => {
  return (
    <SpinnerWrapper>
      <Circle
        width={ '50px' }
        height={ '50px' }
        $animation=''
        $border_top_color={ colors.brandColor }
        $border_right_color={ colors.brandColor }
      />
      <Circle
        width={ `60%` }
        height={ `60%` }
        $border_top_color={ colors.white }
        $border_right_color={ colors.white }
        $animation='reverse'
      />
      <Circle
        width={ `20%` }
        height={ `20%` }
        $border_top_color={ colors.brandColor }
        $border_right_color={ colors.brandColor }
        $animation=''
      />
    </SpinnerWrapper>
  )
}

export default Spinner