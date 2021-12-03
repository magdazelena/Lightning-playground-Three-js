import Cube from "./Cube"
import SphereShape from "./Sphere"

const Shape = (props) => {
  const { type, color, color2 } = props
  return (<>
    {type === 'cube' && <Cube color={color} color2={color2} />}
    {type === 'sphere' && <SphereShape color={color} color2={color2} />}
  </>)
}

export default Shape