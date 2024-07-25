/* eslint-disable no-magic-numbers */
/* eslint-disable no-console */
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
import useUserStore from '../../store/store'
import dayjs from 'dayjs'

export const DataProfile = () => {
	const { user, editUserProfile } = useUserStore()
	const [file, setFile] = useState()
	const [formData, setFormData] = useState({
		username: user?.username || '',
		first_name: user?.first_name || '',
		last_name: user?.last_name || '',
		birth_date: user?.birth_date ? dayjs(user?.birth_date) : null,
		location: user?.location || '',
		level: user?.level || '',
		bio: user?.bio || '',
		image: user?.image || '',
		user: user?.user,
	})
	const [selected, setSelected] = useState('profesional')

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}

	const handleDateChange = (date) => {
		setFormData({
			...formData,
			birth_date: date,
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		const formDataToSend = new FormData()
		Object.entries(formData).forEach(([key, value]) => {
			if (key === 'birth_date' && value) {
				formDataToSend.append(key, value.toISOString())
			} else {
				formDataToSend.append(key, value)
			}
		})
		formDataToSend.append('image', file)

		console.log('Datos enviados:', formDataToSend)
		await editUserProfile(formDataToSend)
	}

	const handleFileImg = (e) => {
		const target = e.target
		setFile(target.files[0])
		console.log('file:', file)
	}

	const handleSelection = (event, newSelection) => {
		if (newSelection !== null) {
			setSelected(newSelection)
		}
	}

	return (
		<div className="w-[100%] flex flex-col justify-center items-center lg:flex-row lg:items-start lg:gap-32">
			<form onSubmit={handleSubmit}>
				<div className="w-[90%] flex flex-col gap-[23px] mt-6 md:w-[50%] lg:w-[35%] lg:mr-4">
					<h2 className="text-[#313031] text-[20px]">
						Datos personales
					</h2>
					<TextField
						id="outlined-basic"
						label="Nombre"
						variant="outlined"
						name="first_name"
						value={formData.first_name}
						onChange={handleChange}
					/>
					<TextField
						id="outlined-basic"
						label="Apellidos"
						variant="outlined"
						name="last_name"
						value={formData.last_name}
						onChange={handleChange}
					/>
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<DatePicker
							label="Fecha de nacimiento"
							value={formData.birth_date}
							onChange={handleDateChange}
						/>
					</LocalizationProvider>
					<TextField
						id="outlined-basic"
						label="Pais de residencia"
						variant="outlined"
						name="location"
						value={formData.location}
						onChange={handleChange}
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
								{selected === 'amateur' && <CheckIcon />}{' '}
								Amateur
							</ToggleButton>
						</ToggleButtonGroup>
						<div className="flex flex-col">
							<TextField
								minRows={2}
								variant="outlined"
								label="Cuentanos un poco de ti..."
								className="w-[100%] mt-[20px]"
								name="bio"
								value={formData.bio}
								onChange={handleChange}
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
							label="Username"
							variant="outlined"
							className="w-[100%]"
							name="username"
							value={formData.username}
							onChange={handleChange}
						/>
						<TextField
							id="outlined-basic"
							label="Instagram"
							variant="outlined"
							className="w-[100%]"
						/>
						<TextField
							id="outlined-basic"
							label="Imagen"
							name="image"
							variant="outlined"
							className="w-[100%]"
							type="file"
							onChange={handleFileImg}
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
							type="submit"
						>
							Guardar
						</Button>
					</div>
				</div>
			</form>
		</div>
	)
}
