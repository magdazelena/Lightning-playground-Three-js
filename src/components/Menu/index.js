import React, { useEffect, useState } from 'react'
import './index.css'
import lights from '../../3D/lights/lights.json'
const Menu = (props) => {
	const { onChange } = props
	const [checkedList, setCheckedList] = useState([])

	const toggleCheck = (e) => {
		if (checkedList.includes(e.target.id)) {
			setCheckedList(prevState => prevState.filter(item => item !== e.target.id))
		} else {
			setCheckedList(prevState => [...prevState, e.target.id])
		}
	}
	useEffect(() => {
		onChange(checkedList)
	}, [checkedList])

	return (<nav>
		{lights.map(light => <div
			className={`menuItem
			${checkedList.includes(light.type) ? 'checked' : 'unchecked'}
			`}
			key={light.type}
			id={light.type}
			onClick={toggleCheck}
		>
			{light.name}
		</div>)}
	</nav>)
}
export default Menu
