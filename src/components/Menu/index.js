import React, { useEffect, useState } from 'react'
import './index.css'
const Menu = (props) => {
	const { onChange, items, orientation } = props
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

	return (<nav className={orientation}>
		{items.map(item => <div
			className={`menuItem
			${checkedList.includes(item.type) ? 'checked' : 'unchecked'}
			`}
			key={item.type}
			id={item.type}
			onClick={toggleCheck}
		>
			{item.name}
		</div>)}
	</nav>)
}
export default Menu
