import React, { useState } from 'react'
import { Html } from '@react-three/drei'
import { ChromePicker } from 'react-color'
import color from '../../utils/colors.json'
import { useEffect } from 'react/cjs/react.development'

export default function LightControls(props) {
  const { updateMainColor, updateGroundColor, updateIntensity, name } = props
  const [mainColor, setColor] = useState(color.powder)
  const [groundColor, setGroundColor] = useState(color.dark)
  const [intensity, setIntensity] = useState(100)

  useEffect(() => {
    if (mainColor) updateMainColor(mainColor)
  }, [mainColor, updateMainColor])

  useEffect(() => {
    if (!updateGroundColor) return
    if (groundColor) updateGroundColor(groundColor)
  }, [groundColor, updateGroundColor])

  useEffect(() => {
    if (intensity) updateIntensity(intensity)
  }, [intensity, updateIntensity])

  return <Html as='div' center className={`${name}light lightcolor`}>
    <p>{name} base color</p>
    <ChromePicker color={mainColor} onChange={color => setColor(color.hex)} />
    {updateGroundColor && (<>
      <p>{name} ground color</p>
      <ChromePicker color={groundColor} onChange={color => setGroundColor(color.hex)} />
    </>)}

    <p><label for="intensity">Intensity: {intensity / 100}</label></p>
    <input type="range" id="intensity" name="intensity"
      value={intensity}
      onChange={e => setIntensity(e.target.value)}
      min="0" max="100" />
  </Html>
}