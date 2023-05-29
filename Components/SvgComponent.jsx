import * as React from "react"
import { View, Text, TextInput, Image ,StyleSheet } from 'react-native';
const SvgComponent = (props) => (
  
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" {...props}>
    <path
      fill="#09f"
      d="m0 224 48-10.7C96 203 192 181 288 186.7c96 5.3 192 37.3 288 16C672 181 768 107 864 85.3 960 64 1056 96 1152 144s192 112 240 144l48 32H0Z"
    />
  </svg>
)
export default SvgComponent
