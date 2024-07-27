/* eslint-disable arrow-body-style */

import {
	Box,
	List,
	ListItem,
	ListItemText,
	Stack,
	Typography,
} from '@mui/material'
import { PhotoSwipe } from './PhotoSwipe'
import { NavBar } from '../../components/navigation/NavBar'
import CameraAltIcon from '@mui/icons-material/CameraAlt'
import CameraIcon from '@mui/icons-material/Camera'

export const AlbumForm = () => {
	return (
		<>
			<NavBar />
			<Box sx={{ mt: '60px', backgroundColor: '#FBFCFF', pb: '20px' }}>
				<Box
					sx={{
						backgroundColor: '#F2F5FA',
					}}
				>
					<Stack spacing={1} sx={{ py: '1rem' }}>
						<Typography
							sx={{
								fontSize: '28px',
								fontWeight: '700',
								textAlign: 'center',
							}}
						>
							Nombre
						</Typography>
						<Typography
							component="p"
							sx={{ fontSize: '14px', textAlign: 'center' }}
						>
							El contanos que ya puso en el formulario iría aca
							rellenando esto.
						</Typography>
						<List>
							<ListItem sx={{ gap: '20px' }}>
								<CameraAltIcon sx={{ fontSize: '18px' }} />
								<ListItemText
									primary="Canon EOS 5D Mark IV"
									sx={{
										'& .MuiListItemText-primary': {
											fontSize: '14px',
										},
									}}
								/>
							</ListItem>
							<ListItem sx={{ gap: '20px' }}>
								<CameraIcon sx={{ fontSize: '18px' }} />
								<ListItemText
									primary="Canon EF 24-70mm f/2.8L II USM"
									sx={{
										'& .MuiListItemText-primary': {
											fontSize: '14px',
										},
									}}
								/>
							</ListItem>
						</List>
					</Stack>
				</Box>
				<PhotoSwipe />
			</Box>
		</>
	)
}
