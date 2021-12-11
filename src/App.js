import React, { useRef, useState } from 'react';
import { Canvas, useThree, useFrame, extend } from '@react-three/fiber'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Menu from './components/Menu';
import color from './utils/colors.json'
import Lights from './3D/lights';
import lights from './3D/lights/lights.json'
import Shape from './3D/objects';
import shapes from './3D/objects/shapes.json'
import { ChromePicker } from 'react-color';
const App = () => {
  const [selection, setSelection] = useState([])
  const [shapeSelection, setShapeSelection] = useState('')
  const [modelColorBase, setModelColorBase] = useState(color.lavender)
  const [modelColorEmitt, setModelColorEmitt] = useState(color.violet)
  const [hasEmitt, setEmitt] = useState(true)
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
      <Menu items={lights} orientation='horizontal' onChange={setSelection} />
      <Menu items={shapes} singleChoice={true} orientation='vertical' onChange={setShapeSelection} />
      <div className="background">
        <Canvas style={{ background: color.purple }}>
          <CameraControls />
          <Lights selection={selection} />
          <Shape type={shapeSelection} color={modelColorBase} color2={hasEmitt ? modelColorEmitt : null} />
        </Canvas>
        <div className='colorpicker basecolor'>
          <p>Model base color</p>
          <ChromePicker color={modelColorBase} onChange={color => setModelColorBase(color.hex)} />
        </div>
        <div className='colorpicker emittcolor'>
          <p>Model emitt color
            <input type='checkbox' checked={hasEmitt} onChange={() => setEmitt(!hasEmitt)} /> Enable
          </p>
          <ChromePicker color={modelColorEmitt} onChange={color => setModelColorEmitt(color.hex)} />
        </div>
      </div>
    </>
  );
}

export default App;
