import React, { useRef } from 'react'
import THREE from '../three'
import { useHelper } from '@react-three/drei'
import color from '../../utils/colors.json'

const PointLight = (props) => {
  const { enableHelper } = props
  const light = useRef()
  useHelper(enableHelper ? light : {}, THREE.PointLightHelper, 1, 'red')
  return (<pointLight ref={light} color={color.powder} position={[0, 2, 0]} />)
}

export default PointLight
