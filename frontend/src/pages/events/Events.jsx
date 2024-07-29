/* eslint-disable arrow-body-style */

import { Box, Fab, IconButton, Modal, Zoom } from '@mui/material'
import { EventsCard } from './EventsCard'
import TuneIcon from '@mui/icons-material/Tune'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import { useState } from 'react'
import { EventsModal } from './EventsModal'

export const Events = () => {
	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	return (
		<>
			<Box
				sx={{
					display: 'flex',
					flexDirection: { xs: 'column', md: 'row' },
					gap: '15px',
				}}
			>
				<IconButton aria-label="filter" sx={{ alignSelf: 'flex-end' }}>
					<TuneIcon />
				</IconButton>
				<EventsCard />
				<Fab
					variant="extended"
					onClick={handleOpen}
					sx={{
						position: 'fixed',
						bottom: 16,
						right: 16,
						backgroundColor: '#fff',
						color: '#6E9E30',
						width: { xs: '156px', sm: '164px' },
						fontSize: { xs: '12px' },
					}}
				>
					<DriveFileRenameOutlineIcon className="text-[#6E9E30] mr-1" />
					Crear
				</Fab>
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Zoom in={open}>
						<EventsModal onClose={handleClose} />
					</Zoom>
				</Modal>
			</Box>
		</>
	)
}
