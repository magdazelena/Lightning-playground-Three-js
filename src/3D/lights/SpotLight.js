import React, { useRef } from 'react'
import THREE from '../three'
import { useHelper } from '@react-three/drei'
import color from '../../utils/colors.json'

const SpotLight = (props) => {
  const { enableHelper } = props
  const light = useRef()
  useHelper(enableHelper ? light : {}, THREE.SpotLightHelper, 'cyan')
  return (<spotLight ref={light} color={color.lavender} position={[0, 3, 0]} castShadow />)
}

export default SpotLight
