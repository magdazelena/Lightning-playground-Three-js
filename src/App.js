import React, {useEffect, useState} from 'react';
import { Canvas, Box } from '@react-three/fiber'
import HemisphereLight from './3D/lights/HemishphereLight';
import Cube from './3D/objects/Cube';
import THREE from './3D/three';
import Menu from './components/Menu';
const App = () => {
  const [selection, setSelection] = useState([])
  return (
    <>
    <Menu onChange={setSelection}/>
    <div className="background">
      <Canvas>
        {selection.includes('HemisphereLight') && (<hemisphereLight color1={0xffffbb} color2={0x080820}/>)}
        <Cube color={0xffffff}/>
      </Canvas>
    </div>
    </>
  );
}

export default App;
