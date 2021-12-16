import React, { useRef, useState } from 'react'
import THREE from '../three'
import { useHelper } from '@react-three/drei'
import color from '../../utils/colors.json'
import LightControls from './LightControls'

const PointLight = (props) => {
  const { enableHelper } = props
  const [mainColor, setColor] = useState(color.powder)
  const [intensity, setIntensity] = useState(100)
  const light = useRef()
  useHelper(enableHelper ? light : {}, THREE.PointLightHelper, 1, 'red')
  return (<>
    <pointLight ref={light} color={mainColor} intensity={intensity / 100} position={[0, 2, 0]} />
    <LightControls
      name='point'
      updateMainColor={setColor}
      updateIntensity={setIntensity}
    />
  </>)
}

export default PointLight
