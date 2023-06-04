import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const SvgComponentHistorial = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Rect
      width={32.333}
      height={39}
      x={0.5}
      y={0.5}
      stroke="#0A3143"
      rx={4.5}
    />
    <Path
      fill="#0A3143"
      d="M4 11V8h20v3zM4 17.667v-3h26.667v3zM4 25.667v-3h20v3zM4 33.667v-3h22.667v3z"
    />
  </Svg>
)
export default SvgComponentHistorial
