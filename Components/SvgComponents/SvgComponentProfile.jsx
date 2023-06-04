import * as React from "react"
import Svg, { Rect, Circle, Path } from "react-native-svg"
const SvgComponentProfile = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Rect
      width={39}
      height={40.333}
      x={0.5}
      y={0.5}
      stroke="#0A3143"
      rx={4.5}
    />
    <Circle cx={20} cy={17.333} r={6.667} fill="#0A3143" />
    <Path
      fill="#0A3143"
      d="M33.792 41.333c2.692 0 4.912-2.33 3.454-4.592-.938-1.456-2.313-2.779-4.047-3.893-1.733-1.114-3.79-1.998-6.055-2.601A27.912 27.912 0 0 0 20 29.333c-2.451 0-4.879.31-7.143.914-2.265.603-4.323 1.487-6.056 2.601-1.734 1.114-3.109 2.437-4.047 3.893-1.458 2.263.762 4.592 3.454 4.592h27.584Z"
    />
  </Svg>
)
export default SvgComponentProfile
