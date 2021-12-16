import React, { useRef, useState } from 'react'
import color from '../../utils/colors.json'
import LightControls from './LightControls'

const AmbientLight = (props) => {
  const { modify } = props
  const [mainColor, setColor] = useState(color.powder)
  const [intensity, setIntensity] = useState(40)
  const light = useRef()
  return (<><ambientLight ref={light} color={mainColor} intensity={intensity / 100} />
    {modify && (<LightControls
      name='ambient'
      updateMainColor={setColor}
      updateIntensity={setIntensity}
    />)}
  </>)
}

export default AmbientLight
