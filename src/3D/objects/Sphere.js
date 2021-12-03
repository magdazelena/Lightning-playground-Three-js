import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const SphereShape = (props) => {
  const {
    color,
    color2
  } = props
  const mesh = useRef()
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });
  return <mesh {...props} ref={mesh}>
    <sphereBufferGeometry attach="geometry" args={[1, 50, 50]} />
    {!color2 && (<meshLambertMaterial attach="material" color={color} />)}
    {color2 && (<meshPhongMaterial attach="material" color={color} emissive={color2} shininess={60} />)}
  </mesh>
}

export default SphereShape
