import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const Cube = (props) => {
	const {
		color,
		color2
	} = props
	const mesh = useRef()
	useFrame(() => {
		mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
	});
	return <mesh {...props} ref={mesh}>
		<boxGeometry />
		{!color2 && (<meshLambertMaterial color={color} />)}
		{color2 && (<meshPhongMaterial color={color} emissive={color2} shininess={60} />)}
	</mesh>
}

export default Cube
