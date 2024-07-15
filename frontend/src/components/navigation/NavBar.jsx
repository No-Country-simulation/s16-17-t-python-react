/* eslint-disable arrow-body-style */

import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import logo from '../../assets/img/logo_green.svg'
import { NavLink } from 'react-router-dom'
import { Profile } from '../profile/Profile'
import { SearchBar } from './SearchBar'
import { Stack } from '@mui/material'

const pages = ['Descubrir', 'Nosotros', 'Servicios', 'Contacto']

export const NavBar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null)
	const [anchorElUser, setAnchorElUser] = React.useState(null)

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget)
	}
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	const handleCloseUserMenu = () => {
		setAnchorElUser(null)
	}

	return (
		<AppBar position="static" sx={{ backgroundColor: '#fff' }}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Box
						sx={{
							flexGrow: 1,
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<NavLink
								to="/"
								className="hidden md:flex mr-2 flex-nowrap"
							>
								<img src={logo} alt="" />
						</NavLink>
						<Box
							sx={{
								flexGrow: 1,
								display: { xs: 'flex', md: 'none' },
							}}
						>
							<IconButton
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								color="inherit"
							>
								<MenuIcon sx={{ color: '#313031' }} />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'left',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'left',
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: 'block', md: 'none' },
								}}
							>
								{pages.map((page) => (
									<MenuItem
										key={page}
										onClick={handleCloseNavMenu}
									>
										<Typography textAlign="center">
											{page}
										</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>
						<NavLink
							to="/"
							className="flex md:hidden mr-1 flex-nowrap flex-grow"
						>
							<img
								src={logo}
								alt=""
								className="mr-2 flex md:hidden"
							/>
						</NavLink>
						<Box
							sx={{
								flexGrow: 1,
								display: { xs: 'none', md: 'flex' },
							}}
						>
							{pages.map((page) => (
								<Button
									key={page}
									onClick={handleCloseNavMenu}
									sx={{
										color: '#313031',
										display: 'block',
										px: 1,
										py: 0,
									}}
								>
									{page}
								</Button>
							))}
						</Box>

						<Stack direction='row' sx={{ flexGrow: 0, display: 'flex', gap: '20px', alignItems: 'center' }}>
							<SearchBar />
							<Box sx={{display: 'flex'}}>
								<Profile />
							</Box>
							<Box sx={{display: 'none'}}>
								<NavLink className="text-black">Iniciar Sesion</NavLink>
								<NavLink className="text-black">Registrarse</NavLink>
							</Box>
							
						</Stack>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	)
}
