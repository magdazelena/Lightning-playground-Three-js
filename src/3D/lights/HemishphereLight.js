import React, { useRef } from 'react'
import THREE from '../three'
import { useHelper } from '@react-three/drei'
import color from '../../utils/colors.json'

const HemisphereLight = (props) => {
	const { enableHelper } = props
	const light = useRef()
	useHelper(enableHelper ? light : {}, THREE.HemisphereLightHelper, 5, 'white')
	return (<hemisphereLight ref={light} color={color.powder} groundColor={color.dark} />)
}

export default HemisphereLight
