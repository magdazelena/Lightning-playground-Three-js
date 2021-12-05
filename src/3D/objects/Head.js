import { useRef } from 'react'
import Model from './Model'
import { Suspense } from 'react'
const Head = (props) => {
  const { color, color2 } = props
  const meshRef = useRef()


  return (
    <mesh ref={meshRef} {...props} >
      <Suspense fallback={null}>
        <Model url='models/11091_FemaleHead_v4.obj'
          material={color2 ? <meshPhongMaterial attach="material" color={color} emissive={color2} shininess={60} /> : <meshLambertMaterial attach="material" color={color} />} />
      </Suspense>
    </mesh>
  )
}
export default Head