/* eslint-disable arrow-body-style */

import {
	Box,
	Fab,
	IconButton,
	Stack,
	Switch,
	TextField,
	Typography,
	InputAdornment,
} from '@mui/material'
import { forwardRef } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import CloseIcon from '@mui/icons-material/Close'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { NavLink } from 'react-router-dom'

export const EventsModal = forwardRef(({ onClose, ...props }, ref) => {
	return (
		<div ref={ref} {...props} className="w-[340px]">
			<Box
				sx={{
					backgroundColor: '#0D4937',
					height: { xs: '120px' },
					display: 'flex',
					flexDirection: { xs: 'column' },
					justifyContent: 'space-between',
				}}
			>
				<IconButton
					onClick={onClose}
					sx={{
						alignSelf: 'flex-end',
					}}
				>
					<CloseIcon sx={{ color: '#fff' }} />
				</IconButton>
				<Typography
					sx={{
						color: '#fff',
						ml: '10px',
						mb: '10px',
						fontSize: '1.75rem',
					}}
				>
					Crear Evento
				</Typography>
			</Box>
			<form className="bg-white px-4 py-8 flex flex-col gap-8">
				<TextField
					helperText="Dale un nombre a tu proyecto"
					label="Nombre de evento"
					variant="outlined"
					sx={{
						'& .MuiFormHelperText-root': {
							color: '#BBC1C7',
						},
					}}
				/>
				<TextField label="Descripcion" variant="outlined" />
				<Box
					sx={{
						backgroundColor: '#F2F5FA',
						borderRadius: '12px',
						p: '16px 8px',
						display: 'flex',
						flexDirection: 'column',
						gap: '20px',
					}}
				>
					<Typography>Destino 1</Typography>
					<Stack direction="row" spacing={2}>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<DatePicker label="Inicio" />
						</LocalizationProvider>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<DatePicker label="Fin" />
						</LocalizationProvider>
					</Stack>
					<TextField
						label="Ingresa Destino"
						variant="outlined"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<LocationOnIcon />
								</InputAdornment>
							),
						}}
					/>
				</Box>
				<Stack spacing={2}>
					<Typography>Privacidad</Typography>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						<Stack>
							<Typography>Hacer evento público</Typography>
							<Typography
								sx={{ fontSize: '12px', color: '#BBC1C7' }}
							>
								Otros usuarios podrán visualizar tu evento
							</Typography>
						</Stack>
						<Switch
							sx={{
								'& .Mui-checked': {
									color: '#6E9E30 !important',
								},
								'& .Mui-checked + .MuiSwitch-track': {
									backgroundColor: '#6e9e30 !important',
								},
							}}
						/>
					</Box>
				</Stack>
				<Fab
					variant="extended"
					component={NavLink}
					to="/create/events"
					sx={{
						backgroundColor: '#6E9E30',
						color: '#fff',
						alignSelf: 'flex-end',
					}}
				>
					Crear
				</Fab>
			</form>
		</div>
	)
})
