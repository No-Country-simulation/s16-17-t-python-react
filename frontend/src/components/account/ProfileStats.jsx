/* eslint-disable arrow-body-style */

import { Box, Grid, Typography } from '@mui/material'
import datos from '../../pages/galery/galery.json'
import events from '../../pages/events/events.json'

export const ProfileStats = () => {
	return (
		<Box
			sx={{
				backgroundColor: '#f1f2f516',
				borderRadius: '10px',
				padding: '10px 20px',
				display: 'flex',
				justifyContent: 'space-between',
				width: '100%',
			}}
		>
			<Grid container justifyContent="space-between" alignItems="center">
				<Grid item xs={4} textAlign="center">
					<Typography
						variant="h5"
						sx={{ color: '#A2D95A', fontSize: '14px' }}
					>
						{datos.length}
					</Typography>
					<Typography sx={{ color: '#A2D95A', fontSize: '14px' }}>
						Galerias
					</Typography>
				</Grid>
				<Grid item xs={4} textAlign="center">
					<Typography
						variant="h5"
						sx={{ color: '#A2D95A', fontSize: '14px' }}
					>
						39
					</Typography>
					<Typography sx={{ color: '#A2D95A', fontSize: '14px' }}>
						Seguidores
					</Typography>
				</Grid>
				<Grid item xs={4} textAlign="center">
					<Typography
						variant="h5"
						sx={{ color: '#A2D95A', fontSize: '14px' }}
					>
						{events.length}
					</Typography>
					<Typography sx={{ color: '#A2D95A', fontSize: '14px' }}>
						Eventos
					</Typography>
				</Grid>
			</Grid>
		</Box>
	)
}
