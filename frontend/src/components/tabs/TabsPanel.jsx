/* eslint-disable arrow-body-style */

import { Box, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'

import { useState } from 'react'
import { Events, AlbumComponent } from '../../pages'

export const TabsPanel = () => {
	const [value, setValue] = useState('1')
	const handleChange = (event, newValue) => {
		setValue(newValue)
	}
	return (
		<>
			<Box sx={{ mt: '10px' }}>
				<TabContext value={value}>
					<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
						<TabList
							aria-label="Account Tabs"
							onChange={handleChange}
							sx={{
								'& .Mui-selected.MuiTab-fullWidth': {
									color: '#6E9E30',
								},
							}}
							TabIndicatorProps={{
								sx: { backgroundColor: '#6E9E30' },
							}}
							variant="fullWidth"
						>
							<Tab label="Galeria" value="1" />
							<Tab label="Eventos" value="2" />
							{/* <Tab label="Cámaras" value="3" /> */}
						</TabList>
					</Box>
					{/* Aqui se deben importar y colocar los componentes que se mostrarán dentro de las tabs */}
					<TabPanel value="1" sx={{ p: '24px 0' }}>
						<AlbumComponent />
					</TabPanel>
					<TabPanel value="2" sx={{ p: { xs: '0 10px' } }}>
						<Events />
					</TabPanel>
					{/* <TabPanel value="3">Cámaras</TabPanel> */}
				</TabContext>
			</Box>
		</>
	)
}
