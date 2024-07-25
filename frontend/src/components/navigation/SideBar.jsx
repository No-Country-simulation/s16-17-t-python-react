import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import MenuIcon from '@mui/icons-material/Menu'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import logo from '../../assets/img/logo_green.svg'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { IconButton } from '@mui/material'
import { NavLink } from 'react-router-dom'

export const SideBar = () => {
	const [open, setOpen] = React.useState(false)

	const toggleDrawer = (newOpen) => () => {
		setOpen(newOpen)
	}

	const DrawerList = (
		<Box
			sx={{ width: 250 }}
			role="presentation"
			onClick={toggleDrawer(false)}
		>
			<List>
				<ListItem>
					<NavLink to="/">
						<img src={logo} alt="Logo" />
					</NavLink>
				</ListItem>

				{['Descubrir', 'Nosotros', 'Servicios', 'Contacto'].map(
					(text, index) => (
						<ListItem key={text} disablePadding>
							<ListItemButton>
								<ListItemText primary={text} />
							</ListItemButton>
						</ListItem>
					)
				)}
			</List>
			<Divider />
		</Box>
	)

	return (
		<div>
			<IconButton
				aria-label="account of current user"
				aria-controls="menu-appbar"
				aria-haspopup="true"
				onClick={toggleDrawer(true)}
				color="inherit"
			>
				<MenuIcon sx={{ color: '#313031' }} />
			</IconButton>
			<Drawer open={open} onClose={toggleDrawer(false)}>
				{DrawerList}
			</Drawer>
		</div>
	)
}
