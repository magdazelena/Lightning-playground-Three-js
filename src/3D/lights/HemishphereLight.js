import React, { useRef, useState } from 'react'
import THREE from '../three'
import { Html, useHelper } from '@react-three/drei'
import color from '../../utils/colors.json'
import { ChromePicker } from 'react-color'

const HemisphereLight = (props) => {
	const { enableHelper } = props
	const [mainColor, setColor] = useState(color.powder)
	const [groundColor, setGroundColor] = useState(color.dark)
	const light = useRef()
	useHelper(enableHelper ? light : {}, THREE.HemisphereLightHelper, 5, 'white')
	return (<>
		<hemisphereLight ref={light} color={mainColor} groundColor={groundColor} />
		<Html as='div' center className='hemispherelight lightcolor'>
			<p>Hemisphere base color</p>
			<ChromePicker color={mainColor} onChange={color => setColor(color.hex)} />
			<p>Hemisphere ground color</p>
			<ChromePicker color={groundColor} onChange={color => setGroundColor(color.hex)} />
		</Html>
	</>
	)
}

export default HemisphereLight
