import React, { useRef, useState } from 'react';
import { Canvas, useThree, useFrame, extend } from '@react-three/fiber'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Cube from './3D/objects/Cube';
import Menu from './components/Menu';
import color from './utils/colors.json'
import Lights from './3D/lights';
const App = () => {
  const [selection, setSelection] = useState([])
  extend({ OrbitControls })
  const CameraControls = () => {
    const {
      camera,
      gl: { domElement },
    } = useThree();
    const controls = useRef();
    useFrame(() => controls.current.update());
    return <orbitControls ref={controls} args={[camera, domElement]} />;
  };
  return (
    <>
      <Menu onChange={setSelection} />
      <div className="background">
        <Canvas style={{ background: color.purple }}>
          <CameraControls />
          <Lights selection={selection} />
          <Cube color={color.violet} />
          <Cube color={color.lavender} color2={color.violet} position={[-2, 0, 0]} />
          <Cube color={color.violet} color2={color.lavender} position={[2, 0, -0.5]} />
        </Canvas>
      </div>
    </>
  );
}

export default App;
