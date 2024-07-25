/* eslint-disable arrow-body-style */

import * as React from 'react'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Logout from '@mui/icons-material/Logout'
import useUserStore from '../../store/store'
import { Badge, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'

export const Profile = () => {
	const { clearUser, user } = useUserStore()
	const [anchorEl, setAnchorEl] = React.useState(null)
	const open = Boolean(anchorEl)
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<React.Fragment>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					textAlign: 'center',
				}}
			>
				<Tooltip title="Perfil">
					<IconButton
						onClick={handleClick}
						size="small"
						sx={{ ml: 0, p: 0 }}
						aria-controls={open ? 'account-menu' : undefined}
						aria-haspopup="true"
						aria-expanded={open ? 'true' : undefined}
					>
						<Avatar
							sx={{ width: 32, height: 32 }}
							alt="Profile"
							src="/src/assets/img/profile_default.png"
						/>
					</IconButton>
				</Tooltip>
			</Box>
			<Menu
				anchorEl={anchorEl}
				id="account-menu"
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				PaperProps={{
					elevation: 0,
					sx: {
						overflow: 'visible',
						filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
						mt: 1.5,
						'& .MuiAvatar-root': {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1,
						},
						'&::before': {
							content: '""',
							display: 'block',
							position: 'absolute',
							top: 0,
							right: 14,
							width: 10,
							height: 10,
							bgcolor: 'background.paper',
							transform: 'translateY(-50%) rotate(45deg)',
							zIndex: 0,
						},
					},
				}}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
			>
				<NavLink to="/account">
					<MenuItem>
						<Avatar
							alt="Account"
							src="/src/assets/img/profile_default.png"
						/>{' '}
						{!user.username === '' ? user.username : 'invitado'}
					</MenuItem>
				</NavLink>

				<MenuItem sx={{ fontSize: '14px' }}>
					<ListItemIcon>
						<MailOutlineIcon fontSize="small" />
					</ListItemIcon>
					<Typography variant="inherit" noWrap>
						{user && user.user.email ? user.user.email : 'Invitado'}
					</Typography>
				</MenuItem>
				<Divider />
				<MenuItem onClick={handleClose}>
					<ListItemIcon>
						<Badge color="success" variant="dot">
							<NotificationsNoneIcon fontSize="small" />
						</Badge>
					</ListItemIcon>
					Notificaciones
				</MenuItem>
				<MenuItem onClick={clearUser}>
					<ListItemIcon>
						<Logout fontSize="small" />
					</ListItemIcon>
					Cerrar Sesión
				</MenuItem>
			</Menu>
		</React.Fragment>
	)
}
