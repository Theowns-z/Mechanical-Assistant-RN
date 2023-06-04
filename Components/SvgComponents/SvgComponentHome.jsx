import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const SvgComponentHome = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Rect width={49} height={49} x={0.5} y={0.5} stroke="#0A3143" rx={9.5} />
    <Path fill="#0A3143" d="M35 18.334h3.75v25H35z" />
    <Path
      fill="#0A3143"
      d="m22.87 8.856 3.198-3.196 18.139 18.139-3.197 3.197z"
    />
    <Path
      fill="#0A3143"
      d="m26.05 5.637 3.147 3.147-18.212 18.212-3.147-3.148z"
    />
    <Path fill="#0A3143" d="M13.333 18.334h3.75v25h-3.75z" />
  </Svg>
)
export default SvgComponentHome
