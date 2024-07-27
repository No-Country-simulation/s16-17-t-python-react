import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox'
import style from '../style.module.css'
const { checkbox_styles } = style
export const CheckboxGallery = ({ isChecked, label, handCheck, index }) => {
	const CheckHandler = () => {
		setchecked_state(!checked_state)
	}
	return (
		<>
			<div className="flex items-center gap-2">
				<Checkbox
					value={isChecked}
					checked={CheckHandler}
					id={`checkbox${index}`}
					onChange={handCheck}
					sx={{
						':checked': {
							caretShapeolor: '#6E9E30 !important',
							padding: '5px',
						},
					}}
					className={checkbox_styles}
				/>
				<label htmlFor="checkbox">{label}</label>
			</div>
		</>
	)
}
