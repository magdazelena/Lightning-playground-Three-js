import React, { useRef } from 'react'
import THREE from '../three'
import { useHelper } from '@react-three/drei'
import color from '../../utils/colors.json'

const DirectionalLight = (props) => {
  const { enableHelper } = props
  const light = useRef()
  useHelper(enableHelper ? light : {}, THREE.DirectionalLightHelper, 5, 'yellow')
  return (<directionalLight ref={light} color={color.powder} intensity={0.6} />)
}

export default DirectionalLight
