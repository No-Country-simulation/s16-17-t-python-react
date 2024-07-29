/* eslint-disable arrow-body-style */

import { Box, IconButton, Typography } from '@mui/material'
import TuneIcon from '@mui/icons-material/Tune'
import SearchIcon from '@mui/icons-material/Search'

export const EventsFav = () => {
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: '50px',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						width: '100%',
					}}
				>
					<Typography>Galería</Typography>
					<IconButton
						aria-label="filter"
						sx={{ alignSelf: 'flex-end' }}
					>
						<TuneIcon />
					</IconButton>
				</Box>
				<Box
					sx={{
						backgroundColor: '#F2F5FA',
						width: { xs: '189px' },
						height: { xs: '183px' },
						borderRadius: '12px',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						px: '20px',
						gap: '20px',
					}}
				>
					<IconButton
						sx={{
							backgroundColor: '#E5E5E9',
						}}
					>
						<SearchIcon
							sx={{
								color: '#1D1B20',
							}}
						/>
					</IconButton>
					<Typography
						sx={{
							color: '#BBC1C7',
							fontSize: '12px',
							textAlign: 'center',
						}}
					>
						Tu galería esta vacia. Aquí aparecerán las álbumes que
						hayas guardado.
					</Typography>
				</Box>
			</Box>
		</>
	)
}
