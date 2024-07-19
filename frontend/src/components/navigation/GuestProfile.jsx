/* eslint-disable arrow-body-style */

import * as React from 'react'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { NavLink } from 'react-router-dom'

export const GuestProfile = () => {
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
				<Tooltip title="Acceder">
					<IconButton
						onClick={handleClick}
						size="small"
						sx={{ ml: 0, p: 0 }}
						aria-controls={open ? 'account-menu' : undefined}
						aria-haspopup="true"
						aria-expanded={open ? 'true' : undefined}
					>
						<Avatar 
                        sx={{ width: 32, height: 32, border: 'none'}} 
                        src='../../assets/img/guest-profile.svg'
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
                        width: '140px',
                        backgroundColor: '#F6FFF4',
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
                <NavLink to='/login'>
                    <MenuItem className='text-primaryText hover:text-white' sx={[{
                        '&:hover': {
                            backgroundColor: '#6E9E30',
                            transition: '0.3s'
                        }
                    }]}>  
                        Iniciar Sesion
                    </MenuItem>
                </NavLink>
                <NavLink to='/register'>
                    <MenuItem className='text-primaryText hover:text-white' sx={[{
                        '&:hover': {
                            backgroundColor: '#6E9E30',
                            transition: '0.3s'
                        }
                    }]}>
                        Registrarse
                    </MenuItem>
                </NavLink>
			</Menu>
		</React.Fragment>
	)
}