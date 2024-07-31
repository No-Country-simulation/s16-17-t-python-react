/* eslint-disable arrow-body-style */

import { Box, Tab, Typography } from '@mui/material'
import { NavBar } from '../../../components'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { useState } from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined'
import { EventsTravel } from './EventsTravel'
import { EventsFav } from './EventsFav'
import { EventsChecklist } from './EventsChecklist'

export const EventsForm = () => {
	const [value, setValue] = useState('1')
	const handleChange = (event, newValue) => {
		setValue(newValue)
	}
	return (
		<>
			<NavBar />
			<Box
				sx={{
					backgroundColor: '#F0F2F4',
					height: '196px',
					display: 'flex',
					flexDirection: { xs: 'column' },
					mt: '60px',
					pt: '20px',
					alignItems: 'center',
					gap: '20px',
					px: { xs: '1rem' },
				}}
			>
				<Typography
					component="h2"
					sx={{
						color: '#1D1B20',
						fontSize: '1.75rem',
					}}
				>
					Lumières de Paris
				</Typography>
				<Typography
					sx={{
						color: '#807D84',
						fontSize: '14px',
						textAlign: 'center',
					}}
				>
					Únete a nuestra aventura fotográfica en París. Captura la
					magia de la ciudad luz en grupo, desde la Torre Eiffel hasta
					Montmartre.
				</Typography>
			</Box>
			<TabContext value={value}>
				<Box sx={{ px: { xs: '1rem' } }}>
					<TabList
						aria-label="Account Tabs"
						onChange={handleChange}
						sx={{
							'& .Mui-selected.MuiTab-fullWidth': {
								color: '#fff',
								backgroundColor: '#6E9E30',
								border: '1px solid transparent',
								borderRadius: '10px',
							},
						}}
						TabIndicatorProps={{
							sx: { backgroundColor: 'transparent' },
						}}
						variant="fullWidth"
					>
						<Tab
							icon={<LocationOnOutlinedIcon />}
							label="Itinerario"
							value="1"
							sx={{
								mx: '5px',
								border: '2px solid #BBC1C7',
								borderRadius: '10px',
								height: '100px',
								color: '#807D84',
							}}
						/>
						<Tab
							icon={<InsertPhotoOutlinedIcon />}
							label="Galería"
							value="2"
							sx={{
								mx: '5px',
								border: '2px solid #BBC1C7',
								borderRadius: '10px',
								height: '100px',
								color: '#807D84',
							}}
						/>
						<Tab
							icon={<CheckBoxOutlinedIcon />}
							label="Checklist"
							value="3"
							sx={{
								mx: '5px',
								border: '2px solid #BBC1C7',
								borderRadius: '10px',
								height: '100px',
								color: '#807D84',
							}}
						/>
					</TabList>
				</Box>
				{/* Aqui se deben importar y colocar los componentes que se mostrarán dentro de las tabs */}
				<TabPanel value="1">
					<EventsTravel />
				</TabPanel>
				<TabPanel value="2">
					<EventsFav />
				</TabPanel>
				<TabPanel value="3">
					<EventsChecklist />
				</TabPanel>
			</TabContext>
		</>
	)
}
