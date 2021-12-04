import React, { useEffect, useState } from 'react'
import './index.css'
const Menu = (props) => {
	const { onChange, items, orientation, singleChoice } = props
	const [checkedList, setCheckedList] = useState([])
	const [checkedChoice, setCheckedChoice] = useState('')
	const toggleChecklist = (e) => {
		if (checkedList.includes(e.target.id)) {
			setCheckedList(prevState => prevState.filter(item => item !== e.target.id))
		} else {
			setCheckedList(prevState => [...prevState, e.target.id])
		}
	}
	const toggleCheckedChoice = (e) => {
		setCheckedChoice(e.target.id)
	}
	useEffect(() => {
		if (singleChoice) return onChange(checkedChoice)
		onChange(checkedList)
	}, [checkedList, checkedChoice])

	return (<nav className={orientation}>
		{items.map(item => <div
			className={`menuItem
			${singleChoice ?
					checkedChoice === item.type ? 'checked' : 'unchecked'
					: checkedList.includes(item.type) ? 'checked' : 'unchecked'}
			`}
			key={item.type}
			id={item.type}
			onClick={singleChoice ? toggleCheckedChoice : toggleChecklist}
		>
			{item.name}
		</div>)}
	</nav>)
}
export default Menu
