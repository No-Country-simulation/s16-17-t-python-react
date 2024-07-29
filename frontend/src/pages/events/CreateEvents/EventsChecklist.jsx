/* eslint-disable arrow-body-style */

import {
	Box,
	Checkbox,
	Divider,
	FormControlLabel,
	Typography,
} from '@mui/material'

export const EventsChecklist = () => {
	return (
		<>
			<Typography>Checklist</Typography>
			<Box
				sx={{
					display: 'flex',
					flexDirection: { xs: 'column' },
					px: '10px',
				}}
			>
				<FormControlLabel
					value="camara"
					control={<Checkbox />}
					label="Cámara"
					labelPlacement="end"
				/>
				<Divider />
				<FormControlLabel
					value="objetivo"
					control={<Checkbox />}
					label="Objetivo"
					labelPlacement="end"
				/>
				<Divider />
				<FormControlLabel
					value="bateria"
					control={<Checkbox />}
					label="Baterías de repuesto"
					labelPlacement="end"
				/>
				<Divider />
				<FormControlLabel
					value="paños"
					control={<Checkbox />}
					label="Paños para limpiar los lentes"
					labelPlacement="end"
				/>
				<Divider />
				<FormControlLabel
					value="tarjetas"
					control={<Checkbox />}
					label="Tarjetas de memoria"
					labelPlacement="end"
				/>
				<Divider />
				<FormControlLabel
					value="tripode"
					control={<Checkbox />}
					label="Trípode"
					labelPlacement="end"
				/>
				<Divider />
				<FormControlLabel
					value="filtros"
					control={<Checkbox />}
					label="Filtros"
					labelPlacement="end"
				/>
				<Divider />
				<FormControlLabel
					value="dispositivo"
					control={<Checkbox />}
					label="Dispositivos de respaldo"
					labelPlacement="end"
				/>
				<Divider />
				<FormControlLabel
					value="bolsas"
					control={<Checkbox />}
					label="Bolsas de plástico"
					labelPlacement="end"
				/>
				<Divider />
				<FormControlLabel
					value="bitacora"
					control={<Checkbox />}
					label="Bitacora"
					labelPlacement="end"
				/>
				<Divider />
			</Box>
		</>
	)
}
