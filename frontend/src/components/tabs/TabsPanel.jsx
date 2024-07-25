/* eslint-disable arrow-body-style */

import { Box, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'

import { useState } from 'react'
import { AlbumComponent } from '../../pages/galery/AlbumComponent'

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
						</TabList>
					</Box>
					{/* Aqui se deben importar y colocar los componentes que se mostrarán dentro de las tabs */}
					<TabPanel value="1">
						<AlbumComponent />
						{/* <CreateAlbum/> */}
					</TabPanel>
					<TabPanel value="2">Eventos</TabPanel>
				</TabContext>
			</Box>
		</>
	)
}
