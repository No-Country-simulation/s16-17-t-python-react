/* eslint-disable no-console */
/* eslint-disable arrow-body-style */

import MoreVertIcon from '@mui/icons-material/MoreVert'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import { Box, Chip, Stack, Tooltip, Typography } from '@mui/material'
import { AccountPhotoProfile } from '../../components/account/AccountPhotoProfile'
import { ProfileStats } from './ProfileStats'
import { NavLink } from 'react-router-dom'
import useUserStore from '../../store/store'

export const AccountCardProfile = () => {
	const { user } = useUserStore()
	const name =
		!user?.first_name && !user?.last_name ?
			'Santiago Martinez'
		:	`${user?.first_name} ${user?.last_name}`

	console.log(user)
	return (
		<>
			<Box
				sx={{
					backgroundColor: '#0D4937',
					borderRadius: '20px',
					display: 'flex',
					flexDirection: 'column',
					alignSelf: { xs: 'center', md: 'flex-start' },
					alignItems: 'center',
					py: '20px',
					px: '10px',
					mt: '70px',
					maxWidth: { xs: '448px', md: '337px' },
					width: '100%',
					height: { md: '744px' },
				}}
			>
				<Stack spacing={2} alignItems="center" sx={{ mb: '2rem' }}>
					<Box position="relative">
						<AccountPhotoProfile />
					</Box>
					<Box>
						<Typography
							component="p"
							sx={{ color: '#FFF', fontSize: '1.5rem' }}
						>
							{name}
						</Typography>
					</Box>
					<Box>
						<Chip
							label={user?.level || 'Amateur'}
							variant="outlined"
							sx={{
								border: '2px solid #A2D95A',
								color: '#FEF7FF',
								width: '105px',
								fontSize: '14px',
								fontWeight: 600,
							}}
						/>
					</Box>
				</Stack>
				<Stack spacing={2} alignItems="center">
					<Box
						sx={{
							width: '249px',
							display: 'flex',
							justifyContent: 'center',
							maxWidth: '281px',
						}}
					>
						<ProfileStats />
					</Box>
					<Box>
						<Typography
							sx={{
								color: '#FFF',
								textAlign: 'center',
								fontSize: '14px',
							}}
						>
							{user?.bio ||
								'Hola soy Santiago, fotógrafo apasionado por capturar paisajes y retratos. Cada foto es una oportunidad para mejorar y explorar nuevas técnicas.'}
						</Typography>
					</Box>
					<Box sx={{ display: 'flex', gap: '1.5rem', color: '#fff' }}>
						<FacebookIcon sx={{ fontSize: '2rem' }} />
						<InstagramIcon sx={{ fontSize: '2rem' }} />
					</Box>
				</Stack>

				<Box sx={{ mt: '3rem', alignSelf: 'flex-end', mr: '1rem' }}>
					<Tooltip title="Editar datos personales">
						<NavLink to="/account/edit" className="flex gap-1 ">
							<DriveFileRenameOutlineIcon className="text-[#FFF]" />
						</NavLink>
					</Tooltip>
				</Box>
			</Box>
		</>
	)
}
