import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import {
	Button,
	TextField,
	ToggleButton,
	ToggleButtonGroup,
} from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import { useState } from 'react'

export const DataProfile = () => {
	const [selected, setSelected] = useState('profesional')

	const handleSelection = (event, newSelection) => {
		if (newSelection !== null) {
			setSelected(newSelection)
		}
	}

	return (
		<div className="w-[100%] flex flex-col justify-center items-center lg:flex-row lg:items-start lg:gap-32">
			<div className="w-[90%] flex flex-col gap-[23px] mt-6 md:w-[50%] lg:w-[35%] lg:mr-4">
				<h2 className="text-[#313031] text-[20px]">Datos personales</h2>
				<TextField
					id="outlined-basic"
					label="Nombre"
					variant="outlined"
				/>
				<TextField
					id="outlined-basic"
					label="Apellidos"
					variant="outlined"
				/>
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<DatePicker label="Fecha de nacimiento" />
				</LocalizationProvider>
				<TextField
					id="outlined-basic"
					label="Pais de residencia"
					variant="outlined"
				/>
			</div>
			<div className="mt-6 mb-6 w-[90%] flex flex-col gap-[23px] md:w-[50%] lg:w-[35%]">
				<div className="mb-3">
					<h2 className="text-[#313031] text-[20px]">Sobre mi</h2>
					<p className="text-[#49454F] text-[12px] mb-2">
						Soy fotógrafo
					</p>
					<ToggleButtonGroup
						color="primary"
						value={selected}
						exclusive
						onChange={handleSelection}
						aria-label="Platform"
						className="w-[100%] mb-4"
					>
						<ToggleButton
							value="profesional"
							className="w-[50%]"
							sx={{
								borderRadius: '30px',
								backgroundColor:
									selected === 'profesional' ?
										'#6E9E30 !important'
									:	'default',
								color:
									selected === 'profesional' ?
										'#ffffff !important'
									:	'default',
							}}
						>
							{selected === 'profesional' && <CheckIcon />}{' '}
							Profesional
						</ToggleButton>
						<ToggleButton
							value="amateur"
							className="w-[50%]"
							sx={{
								borderRadius: '30px',
								backgroundColor:
									selected === 'amateur' ?
										'#6E9E30 !important'
									:	'default',
								color:
									selected === 'amateur' ?
										'#ffffff !important'
									:	'default',
							}}
						>
							{selected === 'amateur' && <CheckIcon />} Amateur
						</ToggleButton>
					</ToggleButtonGroup>
					<div className="flex flex-col">
						<TextField
							minRows={2}
							variant="outlined"
							label="Cuentanos un poco de ti..."
							className="w-[100%] mt-[20px]"
						/>
						<p
							className="text-xs 
					text-validationText 
					self-end"
						>
							Max 180 caracteres
						</p>
					</div>
				</div>
				<div className="flex flex-col gap-5">
					<h2 className="text-[#313031] text-[20px]">Contacto</h2>
					<TextField
						id="outlined-basic"
						label="Facebook"
						variant="outlined"
						className="w-[100%]"
					/>
					<TextField
						id="outlined-basic"
						label="Instagram"
						variant="outlined"
						className="w-[100%]"
					/>
				</div>

				<div className="flex justify-end">
					<Button
						sx={{
							borderRadius: '30px',
							backgroundColor: '#6E9E30 !important',
							color: '#ffffff !important',
						}}
						className="w-[130px] p-2"
					>
						Guardar
					</Button>
				</div>
			</div>
		</div>
	)
}
