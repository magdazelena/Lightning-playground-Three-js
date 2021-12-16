import React, { useRef, useState } from 'react'
import THREE from '../three'
import { useHelper } from '@react-three/drei'
import color from '../../utils/colors.json'
import LightControls from './LightControls'

const HemisphereLight = (props) => {
	const { enableHelper } = props
	const [mainColor, setColor] = useState(color.powder)
	const [groundColor, setGroundColor] = useState(color.dark)
	const [intensity, setIntensity] = useState(100)
	const light = useRef()
	useHelper(enableHelper ? light : {}, THREE.HemisphereLightHelper, 5, 'white')
	return (<>
		<hemisphereLight ref={light} color={mainColor} groundColor={groundColor} intensity={intensity / 100} />
		<LightControls
			name='hemisphere'
			updateMainColor={setColor}
			updateGroundColor={setGroundColor}
			updateIntensity={setIntensity}
		/>
	</>
	)
}

export default HemisphereLight
