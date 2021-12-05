import React, { useMemo } from 'react'
import { useLoader } from "@react-three/fiber"
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

export default function Model(props) {
  const { url, material } = props
  const obj = useLoader(OBJLoader, url)


  const geometry = useMemo(() => {
    let g = null
    if (!obj) return null
    obj.traverse((c) => {
      if (c.type === "Mesh") {
        const _c = c
        g = _c.geometry;
        g.center()
      }
    });
    return g
  }, [obj])



  return (
    <mesh geometry={geometry} scale={1}>
      {material}
    </mesh>
  )
}