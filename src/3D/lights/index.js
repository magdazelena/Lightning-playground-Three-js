import React, { useEffect, useState } from 'react'
import HemisphereLight from './HemishphereLight'
import DirectionalLight from './DirectionalLight'
import PointLight from './PointLight'
import SpotLight from './SpotLight'
import AmbientLight from './AmbientLight'

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
    {enabled.includes('AmbientLight') && (<AmbientLight enableHelper={enabled.includes('enableHelpers')} />)}
    {enabled.includes('DirectionalLight') && (<DirectionalLight enableHelper={enabled.includes('enableHelpers')} />)}
    {enabled.includes('SpotLight') && (<SpotLight enableHelper={enabled.includes('enableHelpers')} />)}
    {enabled.includes('PointLight') && (<PointLight enableHelper={enabled.includes('enableHelpers')} />)}
  </>)
}

export default Lights