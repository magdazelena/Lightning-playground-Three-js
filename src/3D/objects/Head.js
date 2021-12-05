import { useRef } from 'react'
import Model from './Model'
import { Suspense } from 'react'
import { useFrame } from '@react-three/fiber'
const Head = (props) => {
  const { color, color2 } = props
  const mesh = useRef()

  useFrame(() => {
    mesh.current.rotation.z += 0.01;
  });
  return (
    <mesh ref={mesh} scale={0.2} rotation={[-89.5, 0, 22]}>
      <Suspense fallback={null}>
        <Model url='models/11091_FemaleHead_v4.obj'
          material={color2 ? <meshPhongMaterial attach="material" color={color} emissive={color2} shininess={60} /> : <meshLambertMaterial attach="material" color={color} />} />
      </Suspense>
    </mesh>
  )
}
export default Head