import React, { useRef, useState } from 'react'
import THREE from '../three'
import { Html, useHelper } from '@react-three/drei'
import color from '../../utils/colors.json'
import { ChromePicker } from 'react-color'

const DirectionalLight = (props) => {
  const { enableHelper } = props
  const [mainColor, setColor] = useState(color.powder)
  const [intensity, setIntensity] = useState(100)
  const light = useRef()
  useHelper(enableHelper ? light : {}, THREE.DirectionalLightHelper, 5, 'yellow')
  return (<><directionalLight ref={light} color={mainColor} intensity={intensity} />
    <Html as='div' center className='directionallight lightcolor'>
      <p>Directional base color</p>
      <ChromePicker color={mainColor} onChange={color => setColor(color.hex)} />
      <p><label for="intensity">Intensity: {intensity / 100}</label></p>
      <input type="range" id="intensity" name="intensity"
        value={intensity}
        onChange={e => setIntensity(e.target.value)}
        min="0" max="100" />
    </Html>
  </>)
}

export default DirectionalLight
