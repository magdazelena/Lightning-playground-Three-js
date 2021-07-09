import THREE from '../three'

const HemisphereLight = (color1, color2) => {
	return new THREE.HemisphereLight( color1, color2, 1 )
}

export default HemisphereLight
