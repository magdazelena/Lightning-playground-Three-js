import React, { useRef, useState } from 'react'
import THREE from '../three'
import { useHelper } from '@react-three/drei'
import color from '../../utils/colors.json'
import LightControls from './LightControls'

const PointLight = (props) => {
  const { enableHelper, modify } = props
  const [mainColor, setColor] = useState(color.powder)
  const [intensity, setIntensity] = useState(100)
  const [position, setPosition] = useState([0, 2, 0])
  const light = useRef()
  useHelper(enableHelper ? light : {}, THREE.PointLightHelper, 1, 'red')
  return (<>
    <pointLight ref={light} color={mainColor} intensity={intensity / 100} position={position} />
    {modify && <LightControls
      name='point'
      updateMainColor={setColor}
      updateIntensity={setIntensity}
      updatePosition={setPosition}
      initialPosition={[0, 2, 0]}
    />}
  </>)
}

export default PointLight
