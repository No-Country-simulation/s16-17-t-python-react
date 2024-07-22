/* eslint-disable arrow-body-style */

import { Box, Grid, Typography } from '@mui/material'

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
				maxWidth: '281px',
			}}
		>
			<Grid container justifyContent="space-between" alignItems="center">
				<Grid item xs={4} textAlign="center">
					<Typography variant="h5" sx={{ color: '#A2D95A' }}>
						0
					</Typography>
					<Typography sx={{ color: '#A2D95A' }}>Galerias</Typography>
				</Grid>
				<Grid item xs={4} textAlign="center">
					<Typography variant="h5" sx={{ color: '#A2D95A' }}>
						4.8
					</Typography>
					<Typography sx={{ color: '#A2D95A' }}>
						Valoración
					</Typography>
				</Grid>
				<Grid item xs={4} textAlign="center">
					<Typography variant="h5" sx={{ color: '#A2D95A' }}>
						0
					</Typography>
					<Typography sx={{ color: '#A2D95A' }}>Eventos</Typography>
				</Grid>
			</Grid>
		</Box>
	)
}
