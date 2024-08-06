/* eslint-disable no-magic-numbers */
/* eslint-disable no-console */
/* eslint-disable arrow-body-style */

import {
	Box,
	Checkbox,
	Divider,
	FormControlLabel,
	Typography,
} from '@mui/material'
import eventos from './Event_checklist.json'
import { useState } from 'react'
import Button from '@mui/material/Button'
export const EventsChecklist = () => {
	const [checkboxes, setCheckboxes] = useState(eventos)
	const [Checked_items, setChecked_items] = useState([])
	const [EditButton, setEditButton] = useState(false)

	const handleCheckboxChange = (id) => {
		setCheckboxes((prevCheckboxes) =>
			prevCheckboxes.map((checkbox) =>
				checkbox.id === id ?
					{ ...checkbox, checked: !checkbox.checked }
				:	checkbox
			)
		)
	}
	const SaveChecked = () => {
		setChecked_items(checkboxes.filter((e) => e.checked === true))
		console.log(Checked_items)
	}
	const EditChecked = () => {
		setEditButton(true)
	}
	return (
		<>
			<Typography>Checklist</Typography>
			<Box
				sx={{
					display: 'flex',
					flexDirection: { xs: 'column' },
					gap: '1rem',
					px: '10px',
				}}
			>
				{Checked_items.length < 1 &&
					checkboxes.map((e) => (
						<div key={e.id}>
							<FormControlLabel
								value={e.value}
								onChange={() => handleCheckboxChange(e.id)}
								checked={e.checked}
								control={<Checkbox />}
								label={e.label}
								labelPlacement="end"
							/>
							<Divider />
						</div>
					))}
				{Checked_items.length > null &&
					Checked_items.map((e) => (
						<div key={e.id}>
							<FormControlLabel
								value={e.value}
								checked={e.checked}
								control={<Checkbox />}
								label={e.label}
								labelPlacement="end"
							/>
							<Divider />
						</div>
					))}
				{Checked_items.length < 1 ?
					<Button disabled className=" rounded-2xl max-w-[100px]">
						Editar
					</Button>
				:	<Button
						className=" rounded-2xl max-w-[100px]"
						onClick={EditChecked}
					>
						Editar
					</Button>
				}
				<div className="flex justify-end">
					<Button
						className="hover:text-[#6E9E30] rounded-2xl max-w-[100px]"
						onClick={SaveChecked}
						sx={{ backgroundColor: '#6E9E30', color: '#fff' }}
						color="success"
					>
						Guardar
					</Button>
				</div>
			</Box>
		</>
	)
}
