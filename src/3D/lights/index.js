import React, { useEffect, useState } from 'react'
import HemisphereLight from './HemishphereLight'
import DirectionalLight from './DirectionalLight'
import PointLight from './PointLight'
import SpotLight from './SpotLight'
import color from '../../utils/colors.json'

const Lights = (props) => {
  const {
    selection
  } = props

  const [enabled, setEnabled] = useState([])

  useEffect(() => {
    setEnabled(selection)
  }, [selection])

  return (<>
    {enabled.includes('HemisphereLight') && (<HemisphereLight enableHelper={enabled.includes('enableHelpers')} />)}
    {enabled.includes('AmbientLight') && (<ambientLight color={color.lavender} intensity={0.4} />)}
    {enabled.includes('DirectionalLight') && (<DirectionalLight enableHelper={enabled.includes('enableHelpers')} />)}
    {enabled.includes('SpotLight') && (<SpotLight enableHelper={enabled.includes('enableHelpers')} />)}
    {enabled.includes('PointLight') && (<PointLight enableHelper={enabled.includes('enableHelpers')} />)}
  </>)
}

export default Lights