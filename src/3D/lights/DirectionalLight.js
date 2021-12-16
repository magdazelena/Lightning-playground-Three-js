import React, { useRef, useState } from 'react'
import THREE from '../three'
import { useHelper } from '@react-three/drei'
import color from '../../utils/colors.json'
import LightControls from './LightControls'

const DirectionalLight = (props) => {
  const { enableHelper } = props
  const [mainColor, setColor] = useState(color.powder)
  const [intensity, setIntensity] = useState(100)
  const light = useRef()
  useHelper(enableHelper ? light : {}, THREE.DirectionalLightHelper, 5, 'yellow')
  return (<><directionalLight ref={light} color={mainColor} intensity={intensity} />
    <LightControls
      name='directional'
      updateMainColor={setColor}
      updateIntensity={setIntensity}
    />
  </>)
}

export default DirectionalLight
