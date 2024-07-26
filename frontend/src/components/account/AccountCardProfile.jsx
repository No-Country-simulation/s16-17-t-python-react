/* eslint-disable no-console */
/* eslint-disable arrow-body-style */

import MoreVertIcon from '@mui/icons-material/MoreVert'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import { Box, Chip, Stack, Typography } from '@mui/material'
import { AccountPhotoProfile } from '../../components/account/AccountPhotoProfile'
import { ProfileStats } from './ProfileStats'
import { NavLink } from 'react-router-dom'
import useUserStore from '../../store/store'

export const AccountCardProfile = () => {
	const { user } = useUserStore()
	const name =
		!user?.first_name && !user?.last_name ?
			'Invitado'
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
					alignItems: 'center',
					py: '20px',
					px: '10px',
					maxWidth: '448px',
				}}
			>
				<Stack spacing={2} alignItems="center" sx={{ mb: '2rem' }}>
					<Box position="relative">
						<AccountPhotoProfile />
					</Box>
					<Box>
						<Typography
							component="p"
							sx={{ color: '#FFF', fontSize: '2rem' }}
						>
							{name}
						</Typography>
					</Box>
					<Box>
						<Chip
							label={user?.level}
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
							{user?.bio}
						</Typography>
					</Box>
					<Box sx={{ display: 'flex', gap: '1.5rem', color: '#fff' }}>
						<FacebookIcon sx={{ fontSize: '2rem' }} />
						<InstagramIcon sx={{ fontSize: '2rem' }} />
					</Box>
				</Stack>

				<Box sx={{ mt: '3rem' }}>
					<NavLink to="/account/edit" className="flex gap-1">
						<Typography sx={{ color: '#FFF' }}>
							Editar datos personales
						</Typography>
						<DriveFileRenameOutlineIcon className="text-[#FFF]" />
					</NavLink>
				</Box>
			</Box>
		</>
	)
}
