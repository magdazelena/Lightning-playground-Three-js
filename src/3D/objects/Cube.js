import THREE from '../three'

const Cube = (color, color2 = null) => {

	return <mesh>
		<boxGeometry args={[1, 2, 3]} />
		{!color2 && (<meshLambertMaterial color={color} />)}
		{color2 && (<meshPhongMaterial color={color} emissive={color2} shininess={60} />)}
	</mesh>
}

export default Cube
