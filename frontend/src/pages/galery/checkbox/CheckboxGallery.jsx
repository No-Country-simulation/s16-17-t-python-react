import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import style from '../style.module.css'
const { checkbox_styles } = style

export const CheckboxGallery = ({ handleOptions, label, optionName }) => (
	<Checkbox
		id={`checkbox-${label}`}
		name={optionName}
		className={checkbox_styles}
		onChange={handleOptions}
		label={label}
	/>
)
