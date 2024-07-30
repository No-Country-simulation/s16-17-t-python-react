/* eslint-disable arrow-body-style */
import { Box, Fab, Link, styled, TextField, Typography } from '@mui/material'

export const ContactForm = () => {
	const StyledTextField = styled(TextField)`
		& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
			border-color: #fff;
		}
		& .MuiFormLabel-root {
			color: #fff;
		}
		& .Mui-focused .MuiOutlinedInput-notchedOutline {
			border-color: #fff;
		}
		& .MuiInputBase-input {
			color: #fff;
		}
		& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
			border-color: #fff;
		}
		& .MuiInputLabel-outlined:hover {
			color: #fff;
		}
		& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input {
			color: #fff;
		}
		& .MuiInputLabel-outlined.Mui-focused {
			color: #fff;
		}
	`
	return (
		<Box
			sx={{
				backgroundColor: '#0D4937',
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				px: '1rem',
				py: '3rem',
				gap: '1rem',
			}}
		>
			<Typography sx={{ color: '#fff', fontSize: '1.25rem' }}>
				Contactanos:
			</Typography>
			<StyledTextField label="Nombre" variant="outlined" />
			<StyledTextField label="Email" variant="outlined" />
			<StyledTextField label="Mensaje" variant="outlined" />
			<Fab
				variant="extended"
				sx={{
					backgroundColor: '#6E9E30',
					color: '#fff',
					width: { xs: '152px' },
					fontSize: { xs: '12px' },
					alignSelf: 'flex-end',
				}}
			>
				Enviar
			</Fab>
			<footer className="text-white flex flex-col items-center gap-2 mt-10 text-xs">
				<Typography fontSize="12px">
					&#169; S16-17-Python-React 2024
				</Typography>
				<Link href="#" underline="none" color="inherit">
					Términos y condiciones
				</Link>
				<Link href="#" underline="none" color="inherit">
					Mapa del Sitio
				</Link>
				<Link href="#" underline="none" color="inherit">
					Privacidad
				</Link>
			</footer>
		</Box>
	)
}
